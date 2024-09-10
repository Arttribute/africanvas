const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ArtcanvasEscrow Contract", function () {
  let ArtcanvasEscrow, artcanvasEscrow;
  let client, artist, otherAccount;

  beforeEach(async function () {
    // Get the ContractFactory and Signers here.
    ArtcanvasEscrow = await ethers.getContractFactory("ArtcanvasEscrow");
    [client, artist, otherAccount] = await ethers.getSigners();

    // Deploy a new contract for each test
    artcanvasEscrow = await ArtcanvasEscrow.deploy();
  });

  it("should allow a client to request a commission", async function () {
    const description = "A beautiful sunset painting";
    const price = ethers.parseEther("1"); // 1 Ether

    // Client requests a commission
    await expect(
      artcanvasEscrow
        .connect(client)
        .requestCommission(description, price, { value: price })
    ).to.emit(artcanvasEscrow, "CommissionRequested");

    // Verify commission details
    const commission = await artcanvasEscrow.getCommission(1);
    expect(commission.client).to.equal(client.address);
    expect(commission.price).to.equal(price);
    expect(commission.description).to.equal(description);
    expect(commission.status).to.equal("Requested");
  });

  it("should allow an artist to accept a commission", async function () {
    const description = "A beautiful sunset painting";
    const price = ethers.parseEther("1");

    // Client requests a commission
    await artcanvasEscrow
      .connect(client)
      .requestCommission(description, price, { value: price });

    // Artist accepts the commission
    await expect(artcanvasEscrow.connect(artist).acceptCommission(1))
      .to.emit(artcanvasEscrow, "CommissionAccepted")
      .withArgs(1, artist.address);

    // Verify commission details
    const commission = await artcanvasEscrow.getCommission(1);
    expect(commission.artist).to.equal(artist.address);
    expect(commission.status).to.equal("Accepted");
  });

  it("should allow the artist to complete a commission", async function () {
    const description = "A beautiful sunset painting";
    const price = ethers.parseEther("1");
    const artworkHash = "QmSomeArtworkHash"; // Mock IPFS hash

    // Client requests and artist accepts the commission
    await artcanvasEscrow
      .connect(client)
      .requestCommission(description, price, { value: price });
    await artcanvasEscrow.connect(artist).acceptCommission(1);

    // Artist completes the commission
    await expect(
      artcanvasEscrow.connect(artist).completeCommission(1, artworkHash)
    )
      .to.emit(artcanvasEscrow, "CommissionCompleted")
      .withArgs(1, artworkHash);

    // Verify commission details
    const commission = await artcanvasEscrow.getCommission(1);
    expect(commission.status).to.equal("Completed");
    expect(commission.artworkHash).to.equal(artworkHash);
  });

  it("should allow the client to approve a completed commission and release payment", async function () {
    const description = "A beautiful sunset painting";
    const price = ethers.parseEther("1");
    const artworkHash = "QmSomeArtworkHash"; // Mock IPFS hash

    // Client requests and artist accepts and completes the commission
    await artcanvasEscrow
      .connect(client)
      .requestCommission(description, price, { value: price });
    await artcanvasEscrow.connect(artist).acceptCommission(1);
    await artcanvasEscrow.connect(artist).completeCommission(1, artworkHash);

    // Check initial balance of artist
    const initialBalance = await ethers.provider.getBalance(artist.address);

    // Client approves the commission
    await expect(artcanvasEscrow.connect(client).approveCommission(1))
      .to.emit(artcanvasEscrow, "CommissionApproved")
      .withArgs(1);

    // Verify commission status
    const commission = await artcanvasEscrow.getCommission(1);
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
    await artcanvasEscrow
      .connect(client)
      .requestCommission(description, price, { value: price });
    await artcanvasEscrow.connect(artist).acceptCommission(1);
    await artcanvasEscrow.connect(artist).completeCommission(1, artworkHash);

    // Try approving with a different account
    await expect(
      artcanvasEscrow.connect(otherAccount).approveCommission(1)
    ).to.be.revertedWith("Only the client can approve the commission.");
  });
});
