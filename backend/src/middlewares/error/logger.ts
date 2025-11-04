import { NextFunction, Request, Response } from "express";

export default function logger(error: any, request: Request, response: Response, next: NextFunction) {
    console.error(error)
    next(error)
}