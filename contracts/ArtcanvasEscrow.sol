// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ArtcanvasEscrow {

    // Structure to store commission details
    struct Commission {
        uint256 id;
        address payable client;
        address payable artist;
        uint256 price;
        string description;
        string status; // e.g., "Requested", "Accepted", "Completed", "Approved"
        string artworkHash; 
        bool clientApproved; 
    }

    uint256 public commissionCount; // Keeps track of the number of commissions
    mapping(uint256 => Commission) public commissions; // Store commissions

    // Events to be emitted when specific actions happen
    event CommissionRequested(uint256 commissionId, address client, uint256 price, string description);
    event CommissionAccepted(uint256 commissionId, address artist);
    event CommissionCompleted(uint256 commissionId, string artworkHash);
    event CommissionApproved(uint256 commissionId);

    // Request a new commission
    function requestCommission(string memory _description, uint256 _price) external payable {
        require(msg.value == _price, "Payment must match the price specified.");

        commissionCount++;
        commissions[commissionCount] = Commission(
            commissionCount,
            payable(msg.sender),
            payable(address(0)), // No artist assigned initially
            _price,
            _description,
            "Requested",
            "",
            false
        );

        emit CommissionRequested(commissionCount, msg.sender, _price, _description);
    }

    // Accept a commission by an artist
    function acceptCommission(uint256 _commissionId) external {
        Commission storage commission = commissions[_commissionId];

        require(commission.client != address(0), "Commission does not exist.");
        require(commission.artist == address(0), "Commission already accepted.");
        require(commission.price > 0, "Invalid commission price.");

        commission.artist = payable(msg.sender);
        commission.status = "Accepted";

        emit CommissionAccepted(_commissionId, msg.sender);
    }

    // Complete a commission by the artist and deliver the artwork
    function completeCommission(uint256 _commissionId, string memory _artworkHash) external {
        Commission storage commission = commissions[_commissionId];

        require(commission.artist == msg.sender, "Only the assigned artist can complete the commission.");
        require(keccak256(bytes(commission.status)) == keccak256(bytes("Accepted")), "Commission is not accepted yet.");

        commission.status = "Completed";
        commission.artworkHash = _artworkHash;

        emit CommissionCompleted(_commissionId, _artworkHash);
    }

    // Approve the completed commission by the client to release payment to the artist
    function approveCommission(uint256 _commissionId) external {
        Commission storage commission = commissions[_commissionId];

        require(commission.client == msg.sender, "Only the client can approve the commission.");
        require(keccak256(bytes(commission.status)) == keccak256(bytes("Completed")), "Commission is not completed yet.");

        commission.clientApproved = true;
        commission.status = "Approved";

        // Transfer the payment to the artist
        commission.artist.transfer(commission.price);

        emit CommissionApproved(_commissionId);
    }

    // Allow client to retrieve commission details
    function getCommission(uint256 _commissionId) external view returns (Commission memory) {
        return commissions[_commissionId];
    }
}
