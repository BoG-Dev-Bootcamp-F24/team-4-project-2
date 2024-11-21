import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const animalSchema = new mongoose.Schema({
    name: String,
    breed: String,
    owner: ObjectId,
    hoursTrained: Number,
    profilePicture: String,
});

const AnimalModel = mongoose.models.Animal || mongoose.model('Animal', animalSchema);

export default AnimalModel;