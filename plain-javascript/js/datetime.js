/** 
 * Pattern: Module Pattern
 * Code: Javascript DateTime
 * **/

/* Delare DateTime */
var MyDateTime = (function() {

    var methodGetDate = function() {
        var d = new Date();
        return d;
    }

    var methodGetFormatDate = function(date) {
        var hours = date.getHours(),
            minutes = date.getMinutes(),
            ampm = hours >= 12 ? 'pm' : 'am';

        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime;
    }

    return {
        getDate: methodGetDate,
        getFormatDate: methodGetFormatDate
    };
})();


/* L01: Execute time to display */
var d = MyDateTime.getDate(),
    fmd = MyDateTime.getFormatDate(d),
    selectTag = document.getElementById("myTime"),
    currentStr = selectTag.innerHTML;

currentStr += fmd;
selectTag.innerHTML = currentStr;


/* L02: Show real time */
function realTime(id)
{
  var date = new Date,
      year = date.getFullYear(),
      month = date.getMonth(),
      months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'Jully', 'August', 'September', 'October', 'November', 'December'),
      d = date.getDate(),
      day = date.getDay(),
      days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
      h = date.getHours();
  if(h<10) { h = "0"+h; }
  m = date.getMinutes();

  if(m<10) { m = "0"+m; }
  s = date.getSeconds();

  if(s<10) { s = "0"+s; }
  result = 'Demo 2 - The real time is: '+days[day]+' '+months[month]+' '+d+' '+year+' '+h+':'+m+':'+s;

  setTimeout('realTime("'+id+'");','1000');
  var selectTag = document.getElementById(id),
      strText   = selectTag.innerHTML + result;
      selectTag.innerHTML = result;

  return true;
}
window.onload = realTime('realTime');