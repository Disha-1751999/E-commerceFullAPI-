import { BrandListServices, CategoryListServices, SliderListServices, ListByBrandServices, ListByCategoryServices ,ListByRemarkServices, ListBySimilarityServices, ProductDetailsServices, ListByKeywordServices, ProductReviewListServices, CreateReviewServices } from "../services/ProductServices.js"

export const ProductBrandList=async(req,res)=>{
   let result= await BrandListServices();
   res.status(200).json(result);
}

export const ProductCategoryList=async(req,res)=>{
    let result= await CategoryListServices();
   res.status(200).json(result);
}

export const ProductSliderList=async(req,res)=>{
    let result= await SliderListServices();
    res.status(200).json(result);
}

export const ProductListByBrand=async(req,res)=>{
    let result= await ListByBrandServices(req);
    res.status(200).json(result);
}


export const ProductListByCategory=async(req,res)=>{
    let result= await ListByCategoryServices(req);
    res.status(200).json(result);
}

export const ProductListByRemark=async(req,res)=>{
    let result= await ListByRemarkServices(req);
    res.status(200).json(result);
}


export const ProductListBySimilarity=async(req,res)=>{
    let result= await ListBySimilarityServices(req);
    res.status(200).json(result);
   
}

export const ProductDetails=async(req,res)=>{
    let result= await ProductDetailsServices(req);
    res.status(200).json(result);
}

export const ProductListByKeyword=async(req,res)=>{
    let result= await ListByKeywordServices(req);
    res.status(200).json(result);
 
}




export const ProductListByFilter=async(req,res)=>{
    
}






export const ProductReviewList=async(req,res)=>{
    let result= await ProductReviewListServices(req);
    res.status(200).json(result);
}



export const CreateReview=async(req,res)=>{
    let result= await CreateReviewServices(req);
    res.status(200).json(result);
}


