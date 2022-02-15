import { getAllMeetingRoomList, getBuildingList, getMeetingDetails, saveMeeting } from "../../api/meetings/api";
import ACTION_STRINGS, { actionSaveMeetingResponse, actionSetAllCount, actionSetBuildingList, actionSetMeetingRoomList } from "./actions";

export default ({ dispatch, getState }) => (next) => async (action) => {
    const { type, payload } = action;
    const state = getState();
    console.log(state);
    switch (type) {
        case ACTION_STRINGS.GET_ALL_COUNT:
            {
                const data = await getMeetingDetails();
                if (data !== null) {
                    const buildingsCount = data.Buildings.length;
                    let meetingRoomsCount = 0, meetingsCount = 0;
                    const buildingsList = [];
                    data.Buildings.forEach(building => {
                        buildingsList.push({ name: building.name, id: building.id })
                        // Count of meetingRooms
                        meetingRoomsCount += building.meetingRooms.length;
                        building.meetingRooms.forEach(meetingRoom => {
                            // Count of meetings
                            meetingsCount += meetingRoom.meetings.length;
                        });
                    });
                    dispatch(actionSetAllCount({
                        buildingsCount,
                        meetingRoomsCount,
                        meetingsCount,
                    }));
                }
            }
            break;
        case ACTION_STRINGS.GET_BUILDING_LIST:
            {
                const data = await getBuildingList();
                if (data !== null) {
                    dispatch(actionSetBuildingList(data.Buildings));
                }
            }
            break;
        case ACTION_STRINGS.GET_MEETING_ROOM_LIST:
            {
                const id = payload;
                const data = await getAllMeetingRoomList();
                if (data !== null) {
                    const list = data.MeetingRooms.filter((m) => m.building.id == id);
                    dispatch(actionSetMeetingRoomList(list))
                }
            }
            break;
        case ACTION_STRINGS.SAVE_MEETING_REQUEST:
            {
                const data = await saveMeeting({ meetingRoomId: payload, ...state.addMeeting });
                if (data !== null) {
                    dispatch(actionSaveMeetingResponse(data));
                }
            }
            break;
    }
    next(action);
}