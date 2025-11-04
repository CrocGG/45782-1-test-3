import { NextFunction, Request, Response } from "express";
import Group from "../../models/Group"
import Meeting from "../../models/Meeting"


export async function getMeeting(request: Request, response: Response, next: NextFunction) {
    try {
        const meetings = await Meeting.findAll({ include: Group })
        response.json(meetings)
    } catch (error) {
        next(error)
    }
}

export async function getGroup(request: Request, response: Response, next: NextFunction) {
    try {
        const meetingsCategories = await Group.findAll()
        response.json(meetingsCategories)
    } catch (error) {
        next(error)
    }
}

export async function createMeeting(request: Request, response: Response, next: NextFunction) {
    try {
        const newMeeting = await Meeting.create(request.body)
        await newMeeting.reload({ include: Group })
        response.json(newMeeting)
    } catch (error) {
        next(error)
    }
}

export async function annihilateMeeting(request: Request<{ id: string }>, response: Response, next: NextFunction) {
    try {
        const { id } = request.params
        const deletedRows = await Meeting.destroy({ where: { id } })
        if (deletedRows === 0) return next({
            status: 404,
            message: 'The thing you wanted to delete is already gone and/or you had the wrong code...'
        })
        response.json({ success: true })
    } catch (error) {
        next(error)
    }
}

export async function editMeeting(request: Request<{ id: string }>, response: Response, next: NextFunction) {
    try {
        const meeting = await Meeting.findByPk(request.params.id, {
            include: [Group]
        });
        const { groupId, meetingName, meetingTime, meetingLength } = request.body
        meeting.groupId = groupId
        meeting.meetingName = meetingName
        meeting.meetingTime = meetingTime
        meeting.meetingLength = meetingLength
        await meeting.save()
        response.json(meeting)
    } catch (e) {
        next(e)
    }
}

export async function extractMeeting(request: Request<{ groupId: string }>, response: Response, next: NextFunction) {
    try {
        const { meetings } = await Group.findByPk(request.params.groupId, {
            include: [Meeting]
        })
        response.json(meetings)
    } catch (error) {
        next(error)
    }
}

export async function getOneMeeting(request: Request<{ id: string }>, response: Response, next: NextFunction) {
    try {
        const meeting = await Meeting.findOne({
            where: {
                id: request.params.id
            },
            include: [Group]
        })
        response.json(meeting)
    } catch (error) {
        next(error)
    }
}

