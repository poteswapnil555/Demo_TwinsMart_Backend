import { User } from "../models/User.js";
import ErrorHandler from "../utils/UtilityClass.js";
import { TryCatch } from "./Error.js";

export const adminOnly = TryCatch(async (req, res, next) => {
  const { id } = req.query;

  if (!id) return next(new ErrorHandler("Login First", 401));

  const user = await User.findById(id);
  if (!user) return next(new ErrorHandler("Invalid Id", 401));
  if (user.role !== "admin")
    return next(
      new ErrorHandler("Not Authorized To Access This Resource", 403)
    );

  next();
});
