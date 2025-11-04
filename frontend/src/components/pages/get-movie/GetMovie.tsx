import "./GetMovie.css"
import { CinemaModel } from "../../../models/Cinema"
import { movieService } from "../../../services/MovieService"
import { ChangeEvent, useEffect, useState } from "react"
import { MovieModel } from "../../../models/Movie"
import { NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom"


export default function GetMovie() {

    const [movieCategories, setMovieCategories] = useState<CinemaModel[]>([])
    const [selectedCinemaId, setSelectedCinemaId] = useState<string>('')
    const [movies, setMovies] = useState<MovieModel[]>([])
    const navigate = useNavigate()

    useEffect(() => {
        (async () => {
            try {
                const movieCategories = await movieService.getCinema()
                setMovieCategories(movieCategories)
            }
            catch (error) {
                alert(error)
            }
        })()
    }, [])

    useEffect(() => {
        (async () => {
            if (selectedCinemaId) {
                try {
                    const movies = await movieService.extractMovie(selectedCinemaId)
                    setMovies(movies)
                }
                catch (error) {
                    alert(error)
                }
            }
        })()
    }, [selectedCinemaId])

    function cinemaChanged(event: ChangeEvent<HTMLSelectElement>) {
        setSelectedCinemaId(event.currentTarget.value)
    }

    async function deleteClick(event: React.MouseEvent<HTMLButtonElement>) {
        try {
            if (confirm('Are you sure?')) {
                await movieService.annihilateMovie(event.currentTarget.value)
                alert('Annihilated!!')
            }
            navigate('/')
        } catch (error) {
            alert(error)
        }
    }

    return (
        <div className='movie-extracted-list'>
            <h1>Movie List</h1>
            <select defaultValue="" onChange={cinemaChanged}>
                <option disabled value="">Select Category...</option>
                {movieCategories.map(({ id, cinemaName }) => <option key={id} value={id}> {cinemaName}</option>)}
            </select>
            {selectedCinemaId &&
                <table>
                    <thead>
                        <tr>
                            <th>movieName</th>
                            <th>movieTime</th>
                            <th>movieLength</th>
                            <th>Delete</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movies.map(({ id, movieName, movieTime, movieLength }) => <tr key={id}>
                            <th>{movieName}</th>
                            <th>{movieTime as unknown as string}</th>
                            <th>{movieLength}</th>
                            <th>
                                <button onClick={deleteClick} value={id}>Delete</button>
                            </th>
                            <th><NavLink to={`movie-patcher/${id}`}>
                                <button>Edit</button>
                            </NavLink></th>
                        </tr>)}
                    </tbody>
                </table>}
        </div>
    )
}






