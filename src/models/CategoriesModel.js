import mongoose from "mongoose";

const DataSchema= mongoose.Schema({
    categoryName: {type: String, unique: true},
    categoryImg: {type: String}
}, {timestamps: true, versionKey: false});

const CategoryModel=mongoose.model('categories', DataSchema);

export default CategoryModel;
