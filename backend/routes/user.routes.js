import express from "express"
import { changePassword, forgotPassword, loginUser, logoutUser, registerUser, verification, verifyOTP } from "../controllers/user.controllers.js"
import { isAuthenticated } from "../middleware/isAuthenticated.js"
import { userSchema, validateUser } from "../validators/userValidate.js"
 
const router = express.Router()


router.post('/register',validateUser(userSchema), registerUser)
router.post('/verify', verification)
router.post('/login', loginUser)
router.post('/logout', isAuthenticated, logoutUser)
router.post('/forgot-password',   forgotPassword)
router.post('/verify-otp', verifyOTP)
router.post('/change-password', changePassword)
export default router