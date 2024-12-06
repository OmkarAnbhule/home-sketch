import connectToDatabase from "@/lib/mongoose";
import SalesModel from "@/models/SalesModel";

export async function GET(request) {
    try {
        await connectToDatabase();
        const cards = await SalesModel.find().populate('displayCenterId')
        return new Response(
            JSON.stringify({ message: 'sales fetched', data: cards }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
    } catch (error) {
        return new Response(
            JSON.stringify({ message: 'Failed to fetch sales', error: error.message }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}