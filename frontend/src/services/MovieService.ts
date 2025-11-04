import axios from "axios";
import { applicationConfiguration } from "../utilities/ApplicationConfiguration";
import { MovieModel } from "../models/Movie";
import { MovieDraftModel } from "../models/MovieDraft";
import { CinemaModel } from "../models/Cinema";

class MovieService {

    public async getMovie(): Promise<MovieModel[]> {
        const response = await axios.get<MovieModel[]>(`${applicationConfiguration.basisUrl}/movie-shower/movie`);
        const movies = response.data;
        return movies;
    }

    public async getCinema(): Promise<CinemaModel[]> {
        const response = await axios.get<CinemaModel[]>(`${applicationConfiguration.basisUrl}/movie-shower/cinema`);
        const movieCategories = response.data;
        return movieCategories;
    }

    public async createMovie(movie: MovieDraftModel): Promise<MovieDraftModel> {
        const response = await axios.post<MovieDraftModel>(`${applicationConfiguration.basisUrl}/movie-add`, movie);
        return response.data;
    }

    public async annihilateMovie(id: string): Promise<boolean> {
        const response = await axios.delete(`${applicationConfiguration.basisUrl}/movie-delete/${id}`);
        return response.data;
    }

    public async editMovie(id: string, draft: MovieDraftModel): Promise<MovieModel> {
        const response = await axios.patch<MovieModel>(`${applicationConfiguration.basisUrl}/movie-shower/movie-patcher/${id}`, draft);
        return response.data;
    }

    public async extractMovie(cinemaId: string): Promise<MovieModel[]> {
        const response = await axios.get<MovieModel[]>(`${applicationConfiguration.basisUrl}/movie-extract/${cinemaId}`);
        const movieCategories = response.data;
        return movieCategories;
    }


    public async getOneMovie(id: string): Promise<MovieModel> {
        const response = await axios.get<MovieModel>(`${applicationConfiguration.basisUrl}/movie-shower/${id}`);
        const movie = response.data;
        return movie;
    }

}

export const movieService = new MovieService();


