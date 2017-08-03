import moment from 'moment'

const CALENDAR_ID = 'e2hmslpi2ndgg4s4tj9jeb78co@group.calendar.google.com'
const API_KEY = 'AIzaSyAnGqqli_-0_FA9-_GsP2qN-QSuHEJZTcs'
let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`

export function getEvents(callback) {
    fetch(url).then(function(res) {
        return res.json().then(function(jsn) 
        {
            // console.log(jsn);
            // callback(jsn)
            const events = []
            jsn.items.map((event) => {
            events.push({
                start: event.start.date || event.start.dateTime,
                end: event.end.date || event.end.dateTime,
                title: event.summary,
                location: event.location,
                id: event.id
            })
        })
        callback(events);
        })
    })
}
export function getUpcomingEvents(callback) {
    fetch(url).then(function(res) {
        return res.json().then(function(jsn) 
        {
            // console.log(jsn);
            // callback(jsn)
            const events = []
            jsn.items.map((event) => {
                //console.log(moment(new Date()).format('YYYY-MM-DD'))
                // console.log(new Date(event.start.dateTime) > new Date(), Date(event.start.dateTime), new Date());
                if (new Date(event.start.dateTime) >= new Date())
            events.push({
                start: event.start.date || event.start.dateTime,
                end: event.end.date || event.end.dateTime,
                title: event.summary,
                location: event.location,
                id: event.id
            })
        })
        callback(events);
        })
    })
    }