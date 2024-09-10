// pages/api/commissions.ts
import dbConnect from "@/lib/dbConnect";
import Commission from "@/models/Commissions";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// GET: Fetch all commissions
export async function GET(request: NextRequest) {
  try {
    await dbConnect(); // Ensure DB is connected

    const commissions = await Commission.find({}); // Fetch all commissions from the DB
    return NextResponse.json(commissions, { status: 200 });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
}

// POST: Create a new commission
export async function POST(request: NextRequest) {
  try {
    await dbConnect(); // Ensure DB is connected

    const { clientName, status } = await request.json(); // Parse the request body

    // Create a new commission
    const newCommission = await Commission.create({ clientName, status });

    return NextResponse.json(newCommission, { status: 201 });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
}

// PUT: Update the status of a commission
export async function PUT(request: NextRequest) {
  try {
    await dbConnect(); // Ensure DB is connected

    const url = new URL(request.url);
    const id = url.searchParams.get("id"); // Get commission ID from query params
    const { status } = await request.json(); // Get new status from request body

    // Update the commission's status
    const updatedCommission = await Commission.findByIdAndUpdate(
      id,
      { status },
      { new: true } // Return the updated document
    );

    if (!updatedCommission) {
      return new NextResponse("Commission not found", { status: 404 });
    }

    return NextResponse.json(updatedCommission, { status: 200 });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
}
