import "./GetMeeting.css"
import { GroupModel } from "../../../models/Group"
import { meetingService } from "../../../services/MeetingService"
import { ChangeEvent, useEffect, useState } from "react"
import { MeetingModel } from "../../../models/Meeting"

export default function GetMeeting() {

    const [meetingCategories, setMeetingCategories] = useState<GroupModel[]>([])
    const [selectedGroupId, setSelectedGroupId] = useState<string>('')
    const [meetings, setMeetings] = useState<MeetingModel[]>([])

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
                            <th>Meeting Start</th>
                            <th>Meeting Finish</th>
                            <th>Meeting Description</th>
                            <th>Meeting Room</th>
                        </tr>
                    </thead>
                    <tbody>
                        {meetings.map(({ id, meetingStart, meetingFinish, meetingDescription, meetingRoom }) => <tr key={id}>
                            <th>{meetingStart as unknown as string}</th>
                            <th>{meetingFinish as unknown as string}</th>
                            <th>{meetingDescription}</th>
                            <th>{meetingRoom}</th>
                        </tr>)}
                    </tbody>
                </table>}
        </div>
    )
}






