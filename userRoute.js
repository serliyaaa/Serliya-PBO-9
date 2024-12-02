import express from "express";
import {

    getUsers,
    getUserById, 
    createUser,
    UpdateUser,
    deleteUser
} from "/controllers/Users.js";


const router = express.Router();

router.get ('/users', getUsers);
router.get ('/users/:id', getUserById);
router.post ('/users', createUsers);
router.patch ('/users/:id', updateUsers);
router.delete ('/users/:id', deleteUsers);
export default router;