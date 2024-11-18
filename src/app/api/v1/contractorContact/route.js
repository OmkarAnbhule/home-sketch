import connectToDatabase from "@/lib/mongoose";
import ContractorContactModel from "@/models/ContractorContactModel";

export async function GET(request) {
    try {
        await connectToDatabase();
        const cards = await ContractorContactModel.find()
        console.log(cards)
        return new Response(
            JSON.stringify({ message: 'display Cards fetched', data: cards }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
    } catch (error) {
        return new Response(
            JSON.stringify({ message: 'Failed to fetch display cards', error: error.message }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}