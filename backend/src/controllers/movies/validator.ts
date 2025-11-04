import Joi from "joi";

export const createMovieValidator = Joi.object({
    cinemaId: Joi.string().uuid().required(),
    movieName: Joi.string().max(255).required(),
    movieTime: Joi.date().required(),
    movieLength: Joi.number().min(60).required(),
})

export const getAllByCategorizationValidator = Joi.object({
    cinemaId: Joi.string().uuid().required()
})

export const annihilateMovieValidator = Joi.object({
    id: Joi.string().uuid().required()
})

export const editMovieValidatorBody = createMovieValidator

export const editMovieValidatorParams = annihilateMovieValidator

export const getOneMovieValidator = annihilateMovieValidator