import { NextFunction, Request, Response } from "express";
import Cinema from "../../models/Cinema"
import Movie from "../../models/Movie"


export async function getMovie(request: Request, response: Response, next: NextFunction) {
    try {
        const movies = await Movie.findAll({ include: Cinema })
        response.json(movies)
    } catch (error) {
        next(error)
    }
}

export async function getCinema(request: Request, response: Response, next: NextFunction) {
    try {
        const moviesCategories = await Cinema.findAll()
        response.json(moviesCategories)
    } catch (error) {
        next(error)
    }
}

export async function createMovie(request: Request, response: Response, next: NextFunction) {
    try {
        const newMovie = await Movie.create(request.body)
        await newMovie.reload({ include: Cinema })
        response.json(newMovie)
    } catch (error) {
        next(error)
    }
}

export async function annihilateMovie(request: Request<{ id: string }>, response: Response, next: NextFunction) {
    try {
        const { id } = request.params
        const deletedRows = await Movie.destroy({ where: { id } })
        if (deletedRows === 0) return next({
            status: 404,
            message: 'The thing you wanted to delete is already gone and/or you had the wrong code...'
        })
        response.json({ success: true })
    } catch (error) {
        next(error)
    }
}

export async function editMovie(request: Request<{ id: string }>, response: Response, next: NextFunction) {
    try {
        const movie = await Movie.findByPk(request.params.id, {
            include: [Cinema]
        });
        const { cinemaId, movieName, movieTime, movieLength } = request.body
        movie.cinemaId = cinemaId
        movie.movieName = movieName
        movie.movieTime = movieTime
        movie.movieLength = movieLength
        await movie.save()
        response.json(movie)
    } catch (e) {
        next(e)
    }
}

export async function extractMovie(request: Request<{ cinemaId: string }>, response: Response, next: NextFunction) {
    try {
        const { movies } = await Cinema.findByPk(request.params.cinemaId, {
            include: [Movie]
        })
        response.json(movies)
    } catch (error) {
        next(error)
    }
}

export async function getOneMovie(request: Request<{ id: string }>, response: Response, next: NextFunction) {
    try {
        const movie = await Movie.findOne({
            where: {
                id: request.params.id
            },
            include: [Cinema]
        })
        response.json(movie)
    } catch (error) {
        next(error)
    }
}

