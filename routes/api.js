import express from "express";
import * as ProductController from "../src/controllers/ProductController.js"
import * as UserController from "../src/controllers/UserController.js"
import * as WishlistController from "../src/controllers/WishListController.js"
import * as CartlistController from "../src/controllers/CarListController.js"
import AuthMiddleware from "../src/middlewares/AuthMiddleware.js";
import * as FeatureController from "../src/controllers/FeaturesController.js";
import * as InvoiceController from "../src/controllers/InvoiceController.js";

const router=express.Router();

//product

router.get('/ProductBrandList',ProductController.ProductBrandList);
router.get('/ProductSliderList',ProductController.ProductSliderList);
router.get('/ProductCategoryList',ProductController.ProductCategoryList);
router.get('/ProductListByBrand/:BrandID',ProductController.ProductListByBrand);
router.get('/ProductListByCategory/:CategoryID',ProductController.ProductListByCategory);
router.get('/ProductListByRemark/:Remark',ProductController.ProductListByRemark);
router.get('/ProductListBySimilarity/:CategoryID',ProductController.ProductListBySimilarity);
router.get('/ProductDetails/:ProductID',ProductController.ProductDetails);
router.get('/ProductListByKeyword/:Keyword',ProductController.ProductListByKeyword);
router.get('/ProductReviewList/:ProductID',ProductController.ProductReviewList);
router.get('/CreateReview',ProductController.CreateReview);


//user
router.get('/Login/:email',UserController.Login);
router.get('/OtpVerification/:email/:otp',UserController.OtpVerification);
router.get('/Logout',AuthMiddleware,UserController.LogOut);
router.post('/CreateProfile',AuthMiddleware,UserController.CreateProfile);
router.post('/UpdateProfile',AuthMiddleware,UserController.UpdateProfile);
router.get('/ReadProfile',AuthMiddleware,UserController.ReadProfile);



//wishlist
router.post('/CreateWishlist/:productID',AuthMiddleware,WishlistController.CreateWishlist);
router.post('/RemoveWishlist/:wishlistID',AuthMiddleware,WishlistController.RemoveWishlist);
router.get('/Wishlist',AuthMiddleware,WishlistController.Wishlist);


//cartlist
router.post('/CreateCartlist',AuthMiddleware,CartlistController.SaveCartList);
router.post('/RemoveCartlist',AuthMiddleware,CartlistController.RemoveCartList);
router.post('/UpdateCartlist/:cartID',AuthMiddleware,CartlistController.UpdateCartList);
router.get('/Cartlist',AuthMiddleware,CartlistController.CartList);

//feature
router.get('/FeatureList',FeatureController.FeatureList);


// Invoice
router.post('/CreateInvoice',AuthMiddleware,InvoiceController.CreateInvoice);
router.get('/InvoiceList',AuthMiddleware,InvoiceController.InvoiceList)
router.get('/InvoiceProductList/:invoice_id',AuthMiddleware,InvoiceController.InvoiceProductList)


router.post('/PaymentSuccess/:trxID',InvoiceController.PaymentSuccess)
router.post('/PaymentCancel/:trxID',InvoiceController.PaymentCancel)
router.post('/PaymentFail/:trxID',InvoiceController.PaymentFail)
router.post('/PaymentIPN/:trxID',InvoiceController.PaymentIPN)


export default router;
