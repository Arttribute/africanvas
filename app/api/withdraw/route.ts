// import { requestTransfer } from "@/lib/minipay"; // Assuming your Minipay functions are here
// import { NextApiRequest, NextApiResponse } from "next";

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === "POST") {
//     const { account, to, value } = req.body;  // Expecting transaction details in the request body

//     try {
//       const transaction = await requestTransfer({ account, to, value });

//       if (transaction) {
//         return res.status(200).json({ message: "Withdrawal successful", transaction });
//       } else {
//         return res.status(500).json({ error: "Transaction failed" });
//       }
//     } catch (error) {
//       // Type guard for error object
//       if (error instanceof Error) {
//         return res.status(500).json({ error: error.message });
//       } else {
//         return res.status(500).json({ error: "An unknown error occurred." });
//       }
//     }
//   } else {
//     res.status(400).json({ error: "Invalid request method" });
//   }
// }
