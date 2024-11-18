import mongoose from "mongoose";

const ContractorContactSchema = new mongoose.Schema(
    {
        companyTitle: { type: String, required: true },
        personName: { type: String, required: true },
        phoneNumber: { type: String, required: true },
        email: { type: String, required: true },
    },
    { timestamps: true }
);

export default mongoose.models?.ContractorContact || mongoose.model("ContractorContact", ContractorContactSchema);