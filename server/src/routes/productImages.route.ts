import express from "express";
import { productImagesController } from "../controllers";

const router = express.Router();

router
  .route("/productImages")
  .get(productImagesController.getProductImage)
  .post(productImagesController.postProductImage)
  .put(productImagesController.updateProductImage)
  .delete(productImagesController.deleteProductImage);

export default router;
