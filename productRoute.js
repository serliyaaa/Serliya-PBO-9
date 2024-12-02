import express from "express"
import {
    getProducts,
    getProductById, 
    createProduct,
    UpdateProduct,
    deleteProduct
} from "../controllers/products.js";

const router = express.Router();

router.get ('/products', getProducts);
router.get ('/products/:id', getProductById);
router.post ('/products', createProduct);
router.patch ('/products/:id', UpdateProduct);
router.delete ('/products/:id', deleteProduct);
export default router;