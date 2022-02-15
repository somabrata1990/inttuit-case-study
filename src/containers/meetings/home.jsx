import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MeetingHomeComponent from "../../components/meetings/home";
import { actionGetAllCount } from "./actions";

const MeetingHomeContainer = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const state = useSelector((s) => s);
    useEffect(async () => {
        dispatch(actionGetAllCount());
    }, []);
    return <MeetingHomeComponent
        onAdd={() => navigate("/add")}
        count={{
            buildings: state.buildings.count,
            meetingRooms: state.meetingRooms.count,
            meetings: state.meetings.count,
        }}
    />
}

export default MeetingHomeContainer;