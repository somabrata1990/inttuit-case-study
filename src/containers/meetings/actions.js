export const ACTION_STRINGS = {
    GET_ALL_COUNT: "GET_ALL_COUNT",
    SET_ALL_COUNT: "SET_ALL_COUNT",
    SET_BUILDING_LIST: "SET_BUILDING_LIST",
    GET_BUILDING_LIST: "GET_BUILDING_LIST",
    GET_MEETING_ROOM_LIST: "GET_MEETING_ROOM_LIST",
    SET_MEETING_ROOM_LIST: "SET_MEETING_ROOM_LIST",
    SET_ADD_MEETING: "SET_ADD_MEETING",
    SAVE_MEETING_REQUEST: "SAVE_MEETING_REQUEST",
    SAVE_MEETING_RESPONSE: "SAVE_MEETING_RESPONSE"
}

// Actions with get and set appended in it

export const actionGetAllCount = () => ({
    type: ACTION_STRINGS.GET_ALL_COUNT
})

export const actionSetAllCount = (payload) => ({
    type: ACTION_STRINGS.SET_ALL_COUNT,
    payload
});

export const actionGetBuildingList = (payload) => ({
    type: ACTION_STRINGS.GET_BUILDING_LIST,
    payload
});

export const actionSetBuildingList = (payload) => ({
    type: ACTION_STRINGS.SET_BUILDING_LIST,
    payload
});

export const actionGetMeetingRoomList = (payload) => ({
    type: ACTION_STRINGS.GET_MEETING_ROOM_LIST,
    payload
});

export const actionSetMeetingRoomList = (payload) => ({
    type: ACTION_STRINGS.SET_MEETING_ROOM_LIST,
    payload
});

export const actionSetAddMeeting = (payload) => ({
    type: ACTION_STRINGS.SET_ADD_MEETING,
    payload,
});


// Actions with Request Response appended in it

export const actionSaveMeetingRequest = (id) => ({
    type: ACTION_STRINGS.SAVE_MEETING_REQUEST,
    payload: id,
});

export const actionSaveMeetingResponse = (payload) => ({
    type: ACTION_STRINGS.SAVE_MEETING_RESPONSE,
    payload,
});

export default ACTION_STRINGS;