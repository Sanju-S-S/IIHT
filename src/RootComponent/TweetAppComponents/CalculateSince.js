/**
 * Calculates the time since the tweet was created
 * @param datetime time created_at
 * @return time since in html
 */
const CalculateSince = (datetime) => {
  var tTime = new Date(datetime);
  var cTime = new Date();
  var sinceMin = Math.round((cTime - tTime) / 60000);
  if (sinceMin === 0) {
    var sinceSec = Math.round((cTime - tTime) / 1000);
    if (sinceSec < 10) var since = "10 seconds ago";
    else if (sinceSec < 20) since = "20 seconds ago";
    else since = "half a minute ago";
  } else if (sinceMin === 1) {
    sinceSec = Math.round((cTime - tTime) / 1000);
    if (sinceSec === 30) since = "half a minute ago";
    else if (sinceSec < 60) since = "a minute ago";
    else since = "1 minute ago";
  } else if (sinceMin < 45) since = sinceMin + " minutes ago";
  else if (sinceMin > 44 && sinceMin < 60) since = "about 1 hour ago";
  else if (sinceMin < 1440) {
    var sinceHr = Math.round(sinceMin / 60);
    if (sinceHr === 1) since = "about 1 hour ago";
    else since = "about " + sinceHr + " hours ago";
  } else if (sinceMin > 1439 && sinceMin < 2880) since = "1 day ago";
  else {
    var sinceDay = Math.round(sinceMin / 1440);
    since = sinceDay + " days ago";
  }
  return since;
};

export default CalculateSince;
