import { Router } from 'express';
import * as controller from "../controller/appController.js";

const router = Router();
 
// POST
router.route('/register').post(controller.register); 
// router.route('/registerMail').post(registerMail); 
// router.route('/authenticate').post(controller.verifyUser, (req, res) => res.end()); 
 router.route('/login').post( controller.verifyUser ,controller.login); 

// // GET
// router.route('/user/:username').get(controller.getUser) 
// router.route('/generateOTP').get(controller.verifyUser, localVariables, controller.generateOTP)
// router.route('/verifyOTP').get(controller.verifyUser, controller.verifyOTP) 
// router.route('/createResetSession').get(controller.createResetSession) 

// // PUT
 
// router.route('/updateuser').put(Auth, controller.updateUser); 
// router.route('/resetPassword').put(controller.verifyUser, controller.resetPassword); 

export default router;
