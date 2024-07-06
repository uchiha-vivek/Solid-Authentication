
import {Router} from 'express'

const router = Router()


//POST

router.route('/register').post((req,res) => res.json('register-route')) // register user
router.route('/registerMail').post()// send  email
router.route('/auth').post() // authenticate user
router.route('/login').post() // login app


// GET

router.route("/user/:username").get() // user with username
router.route("/generateOTP").get() // generate otp
router.route("/verifyOTP").get()   // verify generate OTP
router.route("/createResetSession").get() // reset all the varibles



// PUT

router.route("/updateUser").put() // update user profile
router.route('/resetPassword').put() // use to rest password


export default router