import { Response, NextFunction } from "express";
import { checkSign } from "../utils/checkSign";
import UserRequest from "../types/request";
import { UnauthorizedError } from "src/utils/errors";

export const vkValidator = (
    req: UserRequest,
    _: Response,
    next: NextFunction
) => {
    const vkAppSecret = process.env.VK_APP_SECRET;
    if (!vkAppSecret) {
        throw new Error("VK_APP_SECRET is not defined");
    }

    const authorization = req.headers.authorization || "";
    if (!authorization) {
        throw new UnauthorizedError("Authorization header is not defined");
    }

    const isValid = checkSign(authorization.split(" ")[1], vkAppSecret);
    console.log(isValid);
    if (!isValid) {
        throw new UnauthorizedError("Invalid VK signature");
    }

    req.user = {
        id: Number(authorization.split("vk_user_id=")[1].split("&")[0]),
    };
    console.log(req.user?.id)

    next();
};