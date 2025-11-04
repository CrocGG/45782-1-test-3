import { useNavigate, useParams } from 'react-router-dom'
import './EditMeeting.css'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import type { MeetingDraftModel } from '../../../models/MeetingDraft'
import { meetingService } from '../../../services/MeetingService'
import { GroupModel } from '../../../models/Group'

export default function EditMeeting() {

    const { id } = useParams<'id'>()

    const { register, handleSubmit, reset, formState } = useForm<MeetingDraftModel>()
    const [group, setGroup] = useState<GroupModel[]>([])

    const navigate = useNavigate()

    useEffect(() => {
        (async () => {
            try {
                const reloadedGroups = await meetingService.getGroup()
                setGroup(reloadedGroups)
            }
            catch (error) {
                alert(error)
            }
        })()
    }, [])

    async function onSubmit(draft: MeetingDraftModel) {
        try {
            await meetingService.editMeeting(id!, draft)
            alert('Meeting Edited!')
            reset()
            navigate('/')
        } catch (error) {
            alert(error)
        }
    }

    return (
        <div className='EditMeeting'>
            <h1>Edit Meeting</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='edit-meeting-form'>
                <label>Group:
                    <select {...register('groupId')} defaultValue="" required>
                        <option value="" disabled>Select Category...</option>
                        {group.map(({ id, groupName }) => <option key={id} value={id}>{groupName}</option>)}
                    </select></label>
                <div className='formError'>{formState.errors.groupId?.message}</div>
                <label>Meeting Name: <input type="text" {...register('meetingName', {
                    required: {
                        value: true,
                        message: 'Name is required'
                    },
                    maxLength: {
                        value: 255,
                        message: 'Name must be up to 255 characters long'
                    }
                })} /></label>
                <div className='formError'>{formState.errors.meetingName?.message}</div>
                <label>Meeting Time: <input type="datetime-local" {...register('meetingTime', { required: true }
                )} /></label>
                <label>Meeting Length: <input type="number" min="1" step="1" {...register('meetingLength', {
                    required: {
                        value: true,
                        message: 'Length is required'
                    },
                    min: {
                        value: 60,
                        message: 'Length must be equal/greater than 60 minutes'
                    }
                })} /></label>
                <div className='formError'>{formState.errors.meetingLength?.message}</div>
                <div className="form-buttons">
                    <button type="submit" className='add-Meeting-btn'>Edit Meeting</button>
                </div>
            </form>
        </div>
    )
}

