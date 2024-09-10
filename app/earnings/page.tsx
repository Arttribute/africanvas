"use client";
import { useState, useEffect } from "react";
import AppBar from "@/components/layout/AppBar";
import { Button } from "@/components/ui/button";
import { requestTransfer } from "@/lib/minipay"; // Import the minipay requestTransfer method

// Define a type for the payment object
type Payment = {
  _id: string;
  clientName: string;
  amountPaid: number;
  profileImage?: string;
};

export default function Profile() {
  const [payments, setPayments] = useState<Payment[]>([]);
  const [totalEarnings, setTotalEarnings] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the new API
    const fetchPayments = async () => {
      setIsLoading(true);
      try {
        const res = await fetch("/api/payment"); // Call the new payment API endpoint
        const paymentData: Payment[] = await res.json(); // Parse the response
        setPayments(paymentData); // Set the state with payment data

        const total = paymentData.reduce((acc, payment) => acc + payment.amountPaid, 0);
        setTotalEarnings(total);
      } catch (error) {
        console.error("Error fetching payment data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPayments();
  }, []);

  const handleWithdraw = async () => {
    const account = "0xYourAccountAddress";  // Your wallet address (from user's wallet)
    const to = "0xReceiverAddress";  // Where the funds are being sent
    const value = BigInt(totalEarnings * 1e18);  // Convert total earnings to Wei (18 decimals for cUSD)
  
    try {
      const transaction = await requestTransfer({
        account: account as `0x${string}`,
        to: to as `0x${string}`,
        value,
      });
  
      if (transaction) {
        alert("Withdrawal successful!");
        setTotalEarnings(0); // Reset total earnings on successful withdrawal
        setPayments([]); // Optionally clear the payment list
      } else {
        alert("Withdrawal failed. Please try again.");
      }
    } catch (error) {
      console.error("Error processing withdrawal:", error);
      alert("An error occurred while processing the withdrawal.");
    }
  };

  return (
    <div>
      <AppBar />
      <div className="relative flex flex-col items-center justify-center w-full py-16 bg-gradient-to-r from-purple-900 via-black to-black text-white">
        <h1 className="text-5xl lg:text-7xl font-extrabold mb-6">Earnings Page</h1>

        <div className="mt-6">
          <p className="text-3xl lg:text-5xl font-bold">
            Total Earnings: ${totalEarnings}
          </p>
          <Button
            onClick={handleWithdraw}
            className="mt-4 bg-blue-600 text-white px-9 py-4 text-xl"
          >
            Withdraw All
          </Button>
        </div>

        {isLoading ? (
          <div className="mt-12 text-xl text-gray-300">Loading...</div>
        ) : (
          <>
            <div className="w-3/4 mx-auto mt-12">
              <table className="min-w-full bg-gray-800 border border-gray-700 rounded-lg shadow-md text-white">
                <thead>
                  <tr className="bg-gray-900">
                    <th className="px-6 py-3 border-b border-gray-600 text-left text-gray-300">
                      Client
                    </th>
                    <th className="px-6 py-3 border-b border-gray-600 text-right text-gray-300">
                      Amount Paid
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {payments.map((payment) => (
                    <tr key={payment._id} className="bg-gray-800 hover:bg-gray-700">
                      <td className="px-6 py-4 border-b border-gray-600 flex items-center">
                        {payment.profileImage ? (
                          <img
                            src={payment.profileImage}
                            alt={`${payment.clientName}'s profile`}
                            className="w-10 h-10 rounded-full mr-4"
                          />
                        ) : (
                          <div className="w-10 h-10 rounded-full mr-4 bg-gray-600 flex items-center justify-center">
                            <span className="text-white font-bold">
                              {payment.clientName.charAt(0)}
                            </span>
                          </div>
                        )}
                        <span className="text-gray-200">{payment.clientName}</span>
                      </td>
                      <td className="px-6 py-4 border-b border-gray-600 text-right text-gray-200">
                        ${payment.amountPaid}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
