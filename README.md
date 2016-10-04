# trello-time
> Break it down! (Music breaks down) Stop, Trello time!

![logo](/images/logo_scaled.png)

So basically it scans the trello cards and totals any cards with a title containing a duration along the lines of

 * `1 day`
 * `2 days`
 * `0.5days`
 * `1hr`
 * `1.5 hrs`

...and inserts the totals and cards missing a duration below the description.

It'll also display the current time left in the sprint if you insert a date in the list title of the format `DD/MM/YY`, `DD/MM/YYYY` or `YYYY/MM/DD` based on an 8 hour working day from the end of the current day.

Basically you'll get something that looks like this

![screenshot](/images/screenshot.png)

**WARNING:** This messes with the DOM so has the potential to break trello, if you see any issues please report. It also polls the DOM every 1 second so might (although probably not) mess with the UI perf of trello.


## Install
Clone this repo and follow <https://developer.chrome.com/extensions/getstarted#unpacked>, it should also work as a [greasemonkey](https://addons.mozilla.org/en-us/firefox/addon/greasemonkey/) script
