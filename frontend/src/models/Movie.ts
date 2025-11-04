import { MovieDraftModel } from "./MovieDraft";
import { CinemaModel } from "./Cinema";

export interface MovieModel extends MovieDraftModel {
    id: string
    createdAt: string
    updatedAt: string
    cinema: CinemaModel
}


