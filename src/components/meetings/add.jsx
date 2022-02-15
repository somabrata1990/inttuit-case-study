import React, { useRef, useState } from "react";
import style from "../../containers/meetings/meetings.module.css";


const MeetingAddComponent = ({ buildings = [], OnNext, onSelect }) => {
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const titleRef = useRef(null);
    const dateRef = useRef(null);
    return <div>
        <div className={`${style.header}`}><b>Add Meeting</b></div>
        <div className={`${style.section} ${style.displayFlex}`}>
            <span>Title</span>
            <span>
                <input type="text" ref={titleRef} />
            </span>
        </div>
        <div className={`${style.section} ${style.displayFlex}`}>
            <span>Date</span>
            <span>
                <input type="text" ref={dateRef} />
            </span>
        </div>
        <div className={`${style.section} ${style.displayFlex}`}>
            <span>Start Time</span>
            <span>
                <input type="text" onChange={e => setStartTime(e.target.value)} />
            </span>
        </div>
        <div className={`${style.section} ${style.displayFlex}`}>
            <span>End Time</span>
            <span>
                <input type="text" onChange={e => setEndTime(e.target.value)} />
            </span>
        </div>
        <div className={`${style.section}`}>
            <select onChange={(e) => onSelect(e.target.value)}>
                {/* TODO: Needs tto be handled properly  */}
                <option key={0} value={0}></option>
                {
                    buildings.map(
                        building => <option key={building.id} value={building.id}>{building.name}</option>
                    )
                }
            </select>
        </div>
        <button onClick={() => {
            OnNext(1, {
                title: titleRef.current.value,
                date: dateRef.current.value,
                startTime,
                endTime,
            });
        }}>Next</button>
    </div>
}

export const MeetingSelectRoom = ({ meetingRooms = [], building = {}, onSave }) => {
    // api is returning duplicate id for different meeting room. hence using
    // name instead of id
    const [selectedRoomName, setSelectedRoomName] = useState(null);
    const [selectedRoomId, setSelectedRoomId] = useState(0);
    return <div>
        <div>Please select one of the Rooms</div>
        {
            meetingRooms.map((room) => (
                <div
                    key={room.id}
                    className={`${style.section} ${style.border} ${room.name === selectedRoomName ? style.selected : ''}`}
                    onClick={() => {
                        setSelectedRoomName(room.name);
                        setSelectedRoomId(room.id)
                    }}
                >
                    <div><b>{room.name}</b></div>
                    <div>Building {building.name}</div>
                    <div>Floor {room.floor}</div>
                </div>
            ))
        }
        <button onClick={() => onSave(selectedRoomId)} disabled={meetingRooms.length === 0}>Save</button>
    </div>
}

export default MeetingAddComponent;