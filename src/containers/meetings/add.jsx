import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MeetingAddComponent, {MeetingSelectRoom} from "../../components/meetings/add";
import { actionGetBuildingList, actionGetMeetingRoomList, actionSaveMeetingRequest, actionSetAddMeeting } from "./actions";

const MeetingAddContainer = () => {
    const navigate = useNavigate();
    const state = useSelector(s => s);
    const dispatch = useDispatch();
    const [selectedBuildingId, setSelectedBuildingId] = useState(null);
    const [internalpathId, setInternalPathId] = useState(0);
    useEffect(async () => {
        if (internalpathId === 0) {
            dispatch(actionGetBuildingList());
        }
    }, [internalpathId])
    if (internalpathId === 1) {
        return <MeetingSelectRoom
            buildingId={selectedBuildingId}
            onSave={(id) => {
                navigate("/");
                dispatch(actionSaveMeetingRequest(id))
            }}
            meetingRooms={state.meetingRooms.list}
        />
    }
    return <MeetingAddComponent
        OnNext={(id, payload) => {
            dispatch(actionSetAddMeeting(payload));
            dispatch(actionGetMeetingRoomList(selectedBuildingId));
            setInternalPathId(id);
        }} 
        onSelect={setSelectedBuildingId}
        buildings={state.buildings.list}
    />
}

export default MeetingAddContainer;