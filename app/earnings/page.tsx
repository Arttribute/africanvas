"use client";
import { useState, useEffect } from "react";
import AppBar from "@/components/layout/AppBar";
import { Button } from "@/components/ui/button";

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

  const handleWithdraw = () => {
    alert("All earnings have been withdrawn!");
    setTotalEarnings(0);
  };

  return (
    <div>
      <AppBar />
      <div className="flex flex-col items-center justify-center w-full mt-20">
        <h1 className="text-3xl font-semibold mb-6">Earnings Page</h1>

        <div className="mt-6">
          <p className="text-xl font-semibold">
            Total Earnings: ${totalEarnings}
          </p>
          <Button
            onClick={handleWithdraw}
            className="mt-4 bg-blue-600 text-white px-4 py-2"
          >
            Withdraw All
          </Button>
        </div>

        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            <div className="w-3/4 mx-auto mt-6">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-6 py-3 border-b text-left">Client</th>
                    <th className="px-6 py-3 border-b text-right">Amount Paid</th>
                  </tr>
                </thead>
                <tbody>
                  {payments.map((payment) => (
                    <tr key={payment._id}>
                      <td className="px-6 py-4 border-b flex items-center">
                        {payment.profileImage ? (
                          <img
                            src={payment.profileImage}
                            alt={`${payment.clientName}'s profile`}
                            className="w-10 h-10 rounded-full mr-4"
                          />
                        ) : (
                          <div className="w-10 h-10 rounded-full mr-4 bg-gray-300 flex items-center justify-center">
                            <span className="text-white font-bold">
                              {payment.clientName.charAt(0)}
                            </span>
                          </div>
                        )}
                        <span>{payment.clientName}</span>
                      </td>
                      <td className="px-6 py-4 border-b text-right">${payment.amountPaid}</td>
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
