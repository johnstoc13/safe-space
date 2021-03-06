import * as mongoose from "mongoose";

export const BusinessSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    website: {
        type: String
    },
    description: {
        type: String
    },
    contactName: {
        type: String
    },
    phone: {
        type: String
    },
    email: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    memberOwned: {
        type: Boolean
    }
    
});

export interface IBusiness extends mongoose.Document {  //  this interface gets added as a type "<IBusiness>" in users.service.ts
    id: string;
    type: string;
    name: string;
    website: string;
    description: string;
    contactName: string;
    phone: string;
    email: string;
    city: string;
    state: string;
    memberOwned: boolean;
}