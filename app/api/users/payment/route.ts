import dbConnect from "@/lib/dbConnect";
import Payment from "@/models/Payment";
import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    await dbConnect();
    const payments = await Payment.find(); // Fetch all payments
    return new NextResponse(JSON.stringify(payments), {
      status: 200,
    });
  } catch (error: any) {
    return new NextResponse(JSON.stringify({ error: "Failed to fetch payments" }), {
      status: 500,
    });
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    const paymentData = await request.json();
    const newPayment = await Payment.create(paymentData);
    
    return new NextResponse(JSON.stringify(newPayment), {
      status: 201,
    });
  } catch (error: any) {
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
