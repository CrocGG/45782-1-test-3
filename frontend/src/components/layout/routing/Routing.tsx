import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home/Home"
import AddMeeting from "../../pages/add-meeting/AddMeeting";
import NotFound from "../../pages/not-found/NotFound";
import GetMeeting from "../../pages/get-meeting/GetMeeting";

export default function Routing() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/meeting-shower" element={<GetMeeting />} />
            <Route path="/meeting-add" element={<AddMeeting />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}