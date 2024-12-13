import mongoose from "mongoose";

const DataSchema= mongoose.Schema({
    productID:{type:mongoose.Schema.Types.ObjectId,required:true},
    userID:{type:mongoose.Schema.Types.ObjectId,required:true}

}, {timestamps: true, versionKey: false});

const WishlistModel=mongoose.model('wishlists', DataSchema);

export default WishlistModel;