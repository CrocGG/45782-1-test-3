import Joi from "joi";

export const createMeetingValidator = Joi.object({
    groupId: Joi.string().uuid().required(),
    meetingName: Joi.string().max(255).required(),
    meetingTime: Joi.date().required(),
    meetingLength: Joi.number().min(60).required(),
})

export const getAllByCategorizationValidator = Joi.object({
    groupId: Joi.string().uuid().required()
})

export const annihilateMeetingValidator = Joi.object({
    id: Joi.string().uuid().required()
})

export const editMeetingValidatorBody = createMeetingValidator

export const editMeetingValidatorParams = annihilateMeetingValidator

export const getOneMeetingValidator = annihilateMeetingValidator