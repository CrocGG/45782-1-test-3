import axios from "axios";
import { applicationConfiguration } from "../utilities/ApplicationConfiguration";
import { MeetingModel } from "../models/Meeting";
import { MeetingDraftModel } from "../models/MeetingDraft";
import { GroupModel } from "../models/Group";

class MeetingService {

    public async getGroup(): Promise<GroupModel[]> {
        const response = await axios.get<GroupModel[]>(`${applicationConfiguration.basisUrl}/group-shower`);
        const meetingCategories = response.data;
        return meetingCategories;
    }

    public async createMeeting(meeting: MeetingDraftModel): Promise<MeetingDraftModel> {
        const response = await axios.post<MeetingDraftModel>(`${applicationConfiguration.basisUrl}/meeting-add`, meeting);
        return response.data;
    }

    public async extractMeeting(groupId: string): Promise<MeetingModel[]> {
        const response = await axios.get<MeetingModel[]>(`${applicationConfiguration.basisUrl}/meeting-extract/${groupId}`);
        const meetingCategories = response.data;
        return meetingCategories;
    }

}

export const meetingService = new MeetingService();


