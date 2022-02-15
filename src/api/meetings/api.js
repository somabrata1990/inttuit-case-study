import 'regenerator-runtime/runtime';

export const getMeetingDetails = async () => {
    try {
        const response = await fetch('http://smart-meeting.herokuapp.com/', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                query: `{
                    Buildings {
                        name
                        id
                        meetingRooms {
                            meetings {
                                id
                            }
                        }
                    }
                }`
            })
        });
        const { data } = await response.json();
        return data;
    } catch (error) {
        return null;
    }
}

export const getBuildingList = async () => {
    try {
        const response = await fetch('http://smart-meeting.herokuapp.com/', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                query: `{
                    Buildings {
                        name
                        id
                    }
                }`
            })
        });
        const { data } = await response.json();
        return data;
    } catch (error) {
        return null;
    }
}

export const getAllMeetingRoomList = async () => {
    try {
        const response = await fetch('http://smart-meeting.herokuapp.com/', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                query: `{
                    MeetingRooms {
                      id
                      name
                      floor
                      building {
                        name
                        id
                      }
                      meetings {
                        id
                        title
                        startTime
                        endTime
                      }
                    }
                  }`
            })
        });
        const { data } = await response.json();
        return data;
    } catch (error) {
        return null;
    }
}

export const saveMeeting = async (payload) => {
    try {
        const response = await fetch('http://smart-meeting.herokuapp.com/', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'token': 'a123gjhgjsdf6576',
            },
            body: JSON.stringify({
                query: `mutation { Meeting( id: 1 title: "${payload.title}" date: "${payload.date}" startTime: "${payload.startTime}" endTime: "${payload.endTime}" meetingRoomId: ${payload.meetingRoomId}) {
                        id
                        title
                    }
                }`
            })
        });
        const { data } = await response.json();
        return data;
    } catch (error) {
        return null;
    }
}