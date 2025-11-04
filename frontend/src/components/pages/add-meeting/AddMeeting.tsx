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
                <label>Meeting Time: <input type="datetime-local" {...register('meetingStart', { required: true }
                )} /></label>
                <label>Meeting Time: <input type="datetime-local" {...register('meetingFinish', { required: true }
                )} /></label>
                <label>Meeting Description: <input type="text" {...register('meetingDescription', {
                    required: {
                        value: true,
                        message: 'Description is required'
                    },
                    minLength: {
                        value: 25,
                        message: 'Description must be at least 25 characters long'
                    },
                    maxLength: {
                        value: 255,
                        message: 'Description must be up to 255 characters long'
                    }
                    })} /></label>
                    <div className='formError'>{formState.errors.meetingDescription?.message}</div>
                    <label>Meeting Room: <input type="text" {...register('meetingRoom', {
                    required: {
                        value: true,
                        message: 'Room is required'
                    },
                    minLength: {
                        value: 25,
                        message: 'Room must be at least 3 characters long'
                    },
                    maxLength: {
                        value: 255,
                        message: 'Room must be up to 100 characters long'
                    }
                    })} /></label>
                    <div className='formError'>{formState.errors.meetingRoom?.message}</div>
                <div className="form-buttons">
                    <button type="submit" className='add-Meeting-btn'>Add Meeting</button>
                </div>
            </form>
        </div>
    )
}




