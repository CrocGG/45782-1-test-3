import "./GetMeeting.css"
import { GroupModel } from "../../../models/Group"
import { meetingService } from "../../../services/MeetingService"
import { ChangeEvent, useEffect, useState } from "react"
import { MeetingModel } from "../../../models/Meeting"
import { NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom"


export default function GetMeeting() {

    const [meetingCategories, setMeetingCategories] = useState<GroupModel[]>([])
    const [selectedGroupId, setSelectedGroupId] = useState<string>('')
    const [meetings, setMeetings] = useState<MeetingModel[]>([])
    const navigate = useNavigate()

    useEffect(() => {
        (async () => {
            try {
                const meetingCategories = await meetingService.getGroup()
                setMeetingCategories(meetingCategories)
            }
            catch (error) {
                alert(error)
            }
        })()
    }, [])

    useEffect(() => {
        (async () => {
            if (selectedGroupId) {
                try {
                    const meetings = await meetingService.extractMeeting(selectedGroupId)
                    setMeetings(meetings)
                }
                catch (error) {
                    alert(error)
                }
            }
        })()
    }, [selectedGroupId])

    function groupChanged(event: ChangeEvent<HTMLSelectElement>) {
        setSelectedGroupId(event.currentTarget.value)
    }

    async function deleteClick(event: React.MouseEvent<HTMLButtonElement>) {
        try {
            if (confirm('Are you sure?')) {
                await meetingService.annihilateMeeting(event.currentTarget.value)
                alert('Annihilated!!')
            }
            navigate('/')
        } catch (error) {
            alert(error)
        }
    }

    return (
        <div className='meeting-extracted-list'>
            <h1>Meeting List</h1>
            <select defaultValue="" onChange={groupChanged}>
                <option disabled value="">Select Category...</option>
                {meetingCategories.map(({ id, groupName }) => <option key={id} value={id}> {groupName}</option>)}
            </select>
            {selectedGroupId &&
                <table>
                    <thead>
                        <tr>
                            <th>meetingName</th>
                            <th>meetingTime</th>
                            <th>meetingLength</th>
                            <th>Delete</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {meetings.map(({ id, meetingName, meetingTime, meetingLength }) => <tr key={id}>
                            <th>{meetingName}</th>
                            <th>{meetingTime as unknown as string}</th>
                            <th>{meetingLength}</th>
                            <th>
                                <button onClick={deleteClick} value={id}>Delete</button>
                            </th>
                            <th><NavLink to={`meeting-patcher/${id}`}>
                                <button>Edit</button>
                            </NavLink></th>
                        </tr>)}
                    </tbody>
                </table>}
        </div>
    )
}






