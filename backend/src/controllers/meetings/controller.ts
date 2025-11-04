import { NextFunction, Request, Response } from "express";
import Group from "../../models/Group"
import Meeting from "../../models/Meeting"


export async function getMeetings(request: Request, response: Response, next: NextFunction) {
    try {
        const meetings = await Meeting.findAll({ include: Group })
        response.json(meetings)
    } catch (error) {
        next(error)
    }
}

export async function getGroups(request: Request, response: Response, next: NextFunction) {
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

