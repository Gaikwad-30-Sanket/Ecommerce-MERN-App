import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

//Protected Routes with the help of token
//this is the middleware
export const requireSignIn = async (req, res, next) => { //when we get request after that next will validate and after that responce will be sent
  try {
    const decode = JWT.verify( // we have verify function for the comparision
      req.headers.authorization, //we have headers inside that we have authorization and inside that we have token
      process.env.JWT_SECRET  // we will decode by using this key
    );
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
  }
};

//admin acceess : making the middleware for admin access
export const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user.role !== 1) { // if the role is 1 then he is admin otherwise he is normal user
      return res.status(401).send({
        success: false,
        message: "UnAuthorized Access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      error,
      message: "Error in admin middelware",
    });
  }
};
