import mongoose from "mongoose";

const ProductSchema = mongoose.Schema(
    {
        desc:{
            type: String,
            require: true,
        },
        price:{
            type: Number,
            require: true,
        },
        publishYear:{
            type: String,
            require: true,
        },
    },
    {
        timestamps: true,
    
    }
)