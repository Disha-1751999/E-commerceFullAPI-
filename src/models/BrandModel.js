import mongoose from "mongoose";

const DataSchema= mongoose.Schema({
    brandName: {type: String, unique: true},
    brandImg: {type: String}
}, {timestamps: true, versionKey: false});

const BrandModel=mongoose.model('brands', DataSchema);

export default BrandModel;
