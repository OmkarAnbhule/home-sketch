import connectToDatabase from "@/lib/mongoose";
import SalesModel from "@/models/SalesModel";

export async function GET(request, { params }) {
    const { id } = await params;
    try {
        await connectToDatabase();
        const cards = await SalesModel.findById(id).populate('displayCenterId')
        return new Response(
            JSON.stringify({ message: ' Sales fetched', data: cards }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
    } catch (error) {
        return new Response(
            JSON.stringify({ message: 'Failed to fetch Sales', error: error.message }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}
