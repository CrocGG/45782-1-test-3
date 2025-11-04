import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import './AddMovie.css'
import { movieService } from '../../../services/MovieService';
import { useEffect, useState } from 'react';
import { MovieDraftModel } from '../../../models/MovieDraft';
import { CinemaModel } from '../../../models/Cinema';

export default function AddMovie() {

    const { register, handleSubmit, reset, formState } = useForm<MovieDraftModel>();
    const [cinema, setCinema] = useState<CinemaModel[]>([])
    const navigate = useNavigate();

    async function onSubmit(draft: MovieDraftModel) {
        try {
            await movieService.createMovie(draft);
            alert('Movie added successfully');
            reset();
            navigate('/');

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        (async () => {
            try {
                const reloadedCinemas = await movieService.getCinema()
                setCinema(reloadedCinemas)
            }
            catch (error) {
                alert(error)
            }
        })()
    }, [])

    return (
        <div className='AddMovie'>
            <h1>Add Movie</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='edit-movie-form'>

                <label>Cinema:
                    <select {...register('cinemaId')} defaultValue="" required>
                        <option value = "" disabled>Select Category...</option>
                        {cinema.map(({ id, cinemaName }) => <option key={id} value={id}>{cinemaName}</option>)}
                    </select></label>
                <div className='formError'>{formState.errors.cinemaId?.message}</div>
                <label>Movie Name: <input type="text" {...register('movieName', {
                    required: {
                        value: true,
                        message: 'Name is required'
                    },
                    maxLength: {
                        value: 255,
                        message: 'Name must be up to 255 characters long'
                    }
                })} /></label>
                <div className='formError'>{formState.errors.movieName?.message}</div>
                <label>Movie Time: <input type="datetime-local" {...register('movieTime', { required: true }
                )} /></label>
                <label>Movie Length: <input type="number" min="1" step="1" {...register('movieLength', {
                    required: {
                        value: true,
                        message: 'Length is required'
                    },
                    min: {
                        value: 60,
                        message: 'Length must be equal/greater than 60 minutes'
                    }
                })} /></label>
                <div className='formError'>{formState.errors.movieLength?.message}</div>
                <div className="form-buttons">
                    <button type="submit" className='add-Movie-btn'>Add Movie</button>
                </div>
            </form>
        </div>
    )
}




