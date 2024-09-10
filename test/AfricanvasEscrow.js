const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("AfricanvasEscrow Contract", function () {
  let AfricanvasEscrow, africanvasEscrow;
  let client, artist, otherAccount;

  beforeEach(async function () {
    // Get the ContractFactory and Signers here.
    AfricanvasEscrow = await ethers.getContractFactory("AfricanvasEscrow");
    [client, artist, otherAccount] = await ethers.getSigners();

    // Deploy a new contract for each test
    africanvasEscrow = await AfricanvasEscrow.deploy();
  });

  it("should allow a client to request a commission", async function () {
    const description = "A beautiful sunset painting";
    const price = ethers.parseEther("1"); // 1 Ether

    // Client requests a commission
    await expect(
      africanvasEscrow
        .connect(client)
        .requestCommission(description, price, { value: price })
    ).to.emit(africanvasEscrow, "CommissionRequested");

    // Verify commission details
    const commission = await africanvasEscrow.getCommission(1);
    expect(commission.client).to.equal(client.address);
    expect(commission.price).to.equal(price);
    expect(commission.description).to.equal(description);
    expect(commission.status).to.equal("Requested");
  });

  it("should allow an artist to accept a commission", async function () {
    const description = "A beautiful sunset painting";
    const price = ethers.parseEther("1");

    // Client requests a commission
    await africanvasEscrow
      .connect(client)
      .requestCommission(description, price, { value: price });

    // Artist accepts the commission
    await expect(africanvasEscrow.connect(artist).acceptCommission(1))
      .to.emit(africanvasEscrow, "CommissionAccepted")
      .withArgs(1, artist.address);

    // Verify commission details
    const commission = await africanvasEscrow.getCommission(1);
    expect(commission.artist).to.equal(artist.address);
    expect(commission.status).to.equal("Accepted");
  });

  it("should allow the artist to complete a commission", async function () {
    const description = "A beautiful sunset painting";
    const price = ethers.parseEther("1");
    const artworkHash = "QmSomeArtworkHash"; // Mock IPFS hash

    // Client requests and artist accepts the commission
    await africanvasEscrow
      .connect(client)
      .requestCommission(description, price, { value: price });
    await africanvasEscrow.connect(artist).acceptCommission(1);

    // Artist completes the commission
    await expect(
      africanvasEscrow.connect(artist).completeCommission(1, artworkHash)
    )
      .to.emit(africanvasEscrow, "CommissionCompleted")
      .withArgs(1, artworkHash);

    // Verify commission details
    const commission = await africanvasEscrow.getCommission(1);
    expect(commission.status).to.equal("Completed");
    expect(commission.artworkHash).to.equal(artworkHash);
  });

  it("should allow the client to approve a completed commission and release payment", async function () {
    const description = "A beautiful sunset painting";
    const price = ethers.parseEther("1");
    const artworkHash = "QmSomeArtworkHash"; // Mock IPFS hash

    // Client requests and artist accepts and completes the commission
    await africanvasEscrow
      .connect(client)
      .requestCommission(description, price, { value: price });
    await africanvasEscrow.connect(artist).acceptCommission(1);
    await africanvasEscrow.connect(artist).completeCommission(1, artworkHash);

    // Check initial balance of artist
    const initialBalance = await ethers.provider.getBalance(artist.address);

    // Client approves the commission
    await expect(africanvasEscrow.connect(client).approveCommission(1))
      .to.emit(africanvasEscrow, "CommissionApproved")
      .withArgs(1);

    // Verify commission status
    const commission = await africanvasEscrow.getCommission(1);
    expect(commission.status).to.equal("Approved");

    // Check final balance of artist
    const finalBalance = await ethers.provider.getBalance(artist.address);
    expect(finalBalance).to.equal(initialBalance.add(price));
  });

  it("should not allow anyone except the client to approve a commission", async function () {
    const description = "A beautiful sunset painting";
    const price = ethers.parseEther("1");
    const artworkHash = "QmSomeArtworkHash";

    // Client requests, artist accepts and completes the commission
    await africanvasEscrow
      .connect(client)
      .requestCommission(description, price, { value: price });
    await africanvasEscrow.connect(artist).acceptCommission(1);
    await africanvasEscrow.connect(artist).completeCommission(1, artworkHash);

    // Try approving with a different account
    await expect(
      africanvasEscrow.connect(otherAccount).approveCommission(1)
    ).to.be.revertedWith("Only the client can approve the commission.");
  });
});
