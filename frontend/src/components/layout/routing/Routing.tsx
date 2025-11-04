import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home/Home"
import AddMovie from "../../pages/add-movie/AddMovie";
import NotFound from "../../pages/not-found/NotFound";
import EditMovie from "../../pages/edit-movie/EditMovie";
import GetMovie from "../../pages/get-movie/GetMovie";

export default function Routing() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie-shower" element={<GetMovie />} />
            <Route path="/movie-add" element={<AddMovie />} />
            <Route path="/movie-shower/movie-patcher/:id" element={<EditMovie />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}