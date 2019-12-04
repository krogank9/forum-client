export default {
  normalizeThreadName: (name) => {
    return name.replace(/[^a-zA-Z0-9 -]/g, '').replace(/\s+/g, '-').toLowerCase();
  },
  dateToHumanReadable: (date) => {
    const rawDate = date
    date = new Date(`${date} UTC`)
    let curDate = new Date()
    let dateDiff = curDate - date
    let oneMin = 1000 * 60
    let sixtyMins = 1000 * 60 * 60
    let oneWeek = sixtyMins * 24 * 7

    //return rawDate

    // if < 1 minute ago: show just now
    if (dateDiff < oneMin) {
      return "Just now";
    }
    //if < 60 minutes: show x minutes ago
    else if (dateDiff < sixtyMins) {
      return `${Math.floor(dateDiff / 1000 / 60)} minutes ago`
    }
    //else if this week: show mon/tues/wed @ timeOfDay
    else if (dateDiff < oneWeek) {
      let timeOfDay = date.toLocaleTimeString(navigator.language, { hour: 'numeric', minute: '2-digit' })
      let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
      weekday = weekday[date.getDay()]
      return `${weekday} at ${timeOfDay}`
    }
    //else: just show date in normal format Nov 12, 2019
    else {
      return date.toLocaleString(navigator.language, { month: 'short', day: 'numeric', year: 'numeric' })
    }
  },
}