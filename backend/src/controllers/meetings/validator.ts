import Joi from "joi";

export const createMeetingValidator = Joi.object({
    groupId: Joi.string().uuid().required(),
    meetingStart: Joi.date().required(),
    meetingFinish: Joi.date().required(),
    meetingDescription: Joi.string().min(25).max(255).required(),
    meetingRoom: Joi.string().min(3).max(100).required()
})

export const getAllByCategorizationValidator = Joi.object({
    groupId: Joi.string().uuid().required()
})

    