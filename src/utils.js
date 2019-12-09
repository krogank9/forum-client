// moment js for better date parsing browser compatibility
const moment = require('moment');

export default {
  normalizeName: (name) => {
    return name.replace(/[^a-zA-Z0-9 -]/g, '').replace(/-/g, ' ').replace(/\s+/g, '-').toLowerCase();
  },
  dateToHumanReadable: (date) => {
    date = new Date(moment.utc(`${date}`).format())

    let curDate = new Date()
    let dateDiff = curDate - date
    let oneMin = 1000 * 60
    let sixtyMins = 1000 * 60 * 60
    let oneWeek = sixtyMins * 24 * 7

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
  updateBoardURL: (historyProp, boardName, boardId) => {
    const newLocation = `/boards/${boardName}.${boardId}`
    if (newLocation !== window.location.pathname) {
      historyProp.push(newLocation)
    }
  },
  setThreadURL: (historyProp, threadName, threadId) => {
    const newLocation = `/threads/${threadName}.${threadId}`
    if (newLocation !== window.location.pathname) {
      historyProp.push(newLocation)
    }
  },
  bbcodeToReact: (txt) => {

    let quoteHTML = (
      `<div class="post-quote">
        <div class="post-quote-header">
          <span>$1 said:</span>
          <a href="#$2">↑</a>
        </div>
        <div class="post-quote-body">
          $3
        </div>
      </div>`
    );

    // nested bbcode tag regex replace works because of greediness

    while (true) {
      let newTxt = txt.replace(/\[B\](.+?)\[\/B\]/s, '<b>$1</b>')

      if (txt === newTxt)
        break
      else
        txt = newTxt
    }

    while (true) {
      let newTxt = txt.replace(/\[QUOTE name=(.*?) postNumber=(.*?)\](.*?)\[\/QUOTE\]/s, quoteHTML)

      if (txt === newTxt) {
        break
      }
      else {
        txt = newTxt
      }
    }

    return txt
  }
}