import mongoose from "mongoose";

const DisplayCenterSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        width: { type: Number, required: true },
        depth: { type: Number, required: true },
        area: { type: Number, required: true },
        bedrooms: { type: Number, required: true },
        bathrooms: { type: Number, required: true },
        garage: { type: Number, required: true },
        living: { type: Number, required: true },
        blueprint: { type: String, required: true },
        caraousel: [{ type: String, required: true }],
        models: { type: String, required: true },
        createdAt: { type: Date, default: Date.now },
    },
    { timestamps: true }
);

export default mongoose.models?.DisplayCenter || mongoose.model("DisplayCenter", DisplayCenterSchema);