import React from "react";
import style from "../../containers/meetings/meetings.module.css";


const MeetingHomeComponent = ({ onAdd, count }) => {
    return <React.Fragment>
        <div className={`${style.section} ${style.border}`}>
            <div><b>Buildings</b></div>
            <div>Total {count.buildings}</div>
        </div>
        <div className={`${style.section} ${style.border}`}>
            <div><b>Rooms</b></div>
            <div>Total {count.meetingRooms}</div>
        </div>
        <div className={`${style.section} ${style.border}`}>
            <div><b>Meetings</b></div>
            <div>Total {count.meetings}</div>
        </div>
        <button onClick={onAdd}>Add a Meeting</button>
    </React.Fragment>
}

export default MeetingHomeComponent;