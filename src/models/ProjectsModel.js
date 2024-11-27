import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: String,
        required: true,
        enum: ['completed', 'inProgress', 'notStarted', 'onHold'],
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    client: {
        type: String,
        required: true,
        trim: true
    },
    stage: {
        type: String,
        required: true,
        enum: ['Building Permit', 'Preliminary Drawing', 'Concept Plan', 'Construction Drawings', 'Developer Approval'],
    },
    developer: {
        type: String,
        required: true,
        trim: true
    }
}, { timestamps: true });


export default mongoose.models?.Projects || mongoose.model('Projects', projectSchema);