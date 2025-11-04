import axios from "axios";
import { applicationConfiguration } from "../utilities/ApplicationConfiguration";
import { MeetingModel } from "../models/Meeting";
import { MeetingDraftModel } from "../models/MeetingDraft";
import { GroupModel } from "../models/Group";

class MeetingService {

    public async getMeeting(): Promise<MeetingModel[]> {
        const response = await axios.get<MeetingModel[]>(`${applicationConfiguration.basisUrl}/meeting-shower/meeting`);
        const meetings = response.data;
        return meetings;
    }

    public async getGroup(): Promise<GroupModel[]> {
        const response = await axios.get<GroupModel[]>(`${applicationConfiguration.basisUrl}/meeting-shower/group`);
        const meetingCategories = response.data;
        return meetingCategories;
    }

    public async createMeeting(meeting: MeetingDraftModel): Promise<MeetingDraftModel> {
        const response = await axios.post<MeetingDraftModel>(`${applicationConfiguration.basisUrl}/meeting-add`, meeting);
        return response.data;
    }

    public async annihilateMeeting(id: string): Promise<boolean> {
        const response = await axios.delete(`${applicationConfiguration.basisUrl}/meeting-delete/${id}`);
        return response.data;
    }

    public async editMeeting(id: string, draft: MeetingDraftModel): Promise<MeetingModel> {
        const response = await axios.patch<MeetingModel>(`${applicationConfiguration.basisUrl}/meeting-shower/meeting-patcher/${id}`, draft);
        return response.data;
    }

    public async extractMeeting(groupId: string): Promise<MeetingModel[]> {
        const response = await axios.get<MeetingModel[]>(`${applicationConfiguration.basisUrl}/meeting-extract/${groupId}`);
        const meetingCategories = response.data;
        return meetingCategories;
    }


    public async getOneMeeting(id: string): Promise<MeetingModel> {
        const response = await axios.get<MeetingModel>(`${applicationConfiguration.basisUrl}/meeting-shower/${id}`);
        const meeting = response.data;
        return meeting;
    }

}

export const meetingService = new MeetingService();


