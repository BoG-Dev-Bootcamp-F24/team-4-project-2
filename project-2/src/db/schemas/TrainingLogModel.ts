import mongoose, { Schema } from "mongoose";

const TrainingLogSchema = new mongoose.Schema({
    user: { type: Schema.Types.ObjectId },
    animal: { type: Schema.Types.ObjectId },
    title: { type: String },
    date: { type: Date },
    description: { type: String },
    hours: { type: Number }
  }, {
  timestamps: true 
});

const TrainingLogModel = mongoose.models.TrainingLog || mongoose.model('TrainingLog', TrainingLogSchema);
export default TrainingLogModel;
