import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import './AddMeeting.css'
import { meetingService } from '../../../services/MeetingService';
import { useEffect, useState } from 'react';
import { MeetingDraftModel } from '../../../models/MeetingDraft';
import { GroupModel } from '../../../models/Group';

export default function AddMeeting() {

    const { register, handleSubmit, reset, formState } = useForm<MeetingDraftModel>();
    const [group, setGroup] = useState<GroupModel[]>([])
    const navigate = useNavigate();

    async function onSubmit(draft: MeetingDraftModel) {
        try {
            await meetingService.createMeeting(draft);
            alert('Meeting added successfully');
            reset();
            navigate('/');

        } catch (error) {
            console.log(error)
        }
    }

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

    return (
        <div className='AddMeeting'>
            <h1>Add Meeting</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='edit-meeting-form'>

                <label>Group:
                    <select {...register('groupId')} defaultValue="" required>
                        <option value = "" disabled>Select Category...</option>
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
                    <button type="submit" className='add-Meeting-btn'>Add Meeting</button>
                </div>
            </form>
        </div>
    )
}




