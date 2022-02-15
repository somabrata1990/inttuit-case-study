import ACTION_STRINGS from "./containers/meetings/actions";

const initialState = {
    buildings: { count: 0, list: [] },
    meetingRooms: { count: 0 },
    meetings: {count: 0},
    addMeeting: {
        title: "",
        date: "",
        startTime: "",
        endTime: "",
    }
};

export const AppReducer = (
    state = initialState,
    action
) => {
    const {payload, type} = action;
    switch (type) {
        case ACTION_STRINGS.SET_ALL_COUNT :
            return {
                ...state,
                buildings: {
                    ...state.buildings,
                    count: payload.buildingsCount,
                },
                meetingRooms: {
                    ...state.meetingRooms,
                    count: payload.meetingRoomsCount,
                },
                meetings: {
                    ...state.meetings,
                    count: payload.meetingsCount,
                },
            };
        case ACTION_STRINGS.SET_BUILDING_LIST:
            return {
                ...state,
                buildings: {
                    ...state.buildings,
                    list: payload 
                }
            }
        case ACTION_STRINGS.SET_MEETING_ROOM_LIST:
            return {
                ...state,
                meetingRooms: {
                    ...state.meetingRooms,
                    list: payload 
                }
            }
        case ACTION_STRINGS.SET_ADD_MEETING:
            return {
                ...state,
                addMeeting: {
                    ...state.addMeeting,
                    ...payload
                }
            }
        case ACTION_STRINGS.SAVE_MEETING_RESPONSE:
            return {
                ...state,
                addMeeting: {
                    title: "",
                    date: "",
                    startTime: "",
                    endTime: "",
                }
            }
        default:
            return state;
    }
}

export default AppReducer;