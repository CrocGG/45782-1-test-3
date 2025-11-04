import { MeetingDraftModel } from "./MeetingDraft";
import { GroupModel } from "./Group";

export interface MeetingModel extends MeetingDraftModel {
    id: string
    createdAt: string
    updatedAt: string
    group: GroupModel
}


