setInterval(function() {
  var listEls = document.querySelectorAll(".list");

  for(var i=0; i<listEls.length; i++) {
    var headerEl      = listEls[i].querySelector(".list-header");
    var headerTitleEl = listEls[i].querySelector(".list-header-name");
    var totalEl       = listEls[i].querySelector(".chrome-ext-total-header");
    var missingEl     = listEls[i].querySelector(".chrome-ext-missing-header");
    var cardEls       = listEls[i].querySelectorAll(".list-card .list-card-title");

    if(!headerEl) {
      // Early out
      return;
    }

    var date = null;
    var dateDiff = null;
    var dateMatches = headerTitleEl.innerText.match(/([0-9]{1,2}\/[0-9]{1,2}\/(?:[0-9]{4}|[0-9]{2}))/);
    if(dateMatches) {
      date = moment(dateMatches[1], ["DD/MM/YY", "DD/MM/YYYY", "YYYY/MM/DD"]);
      dateDiff = moment(date).diff(moment(), "days");
      dateDiff = parseInt(dateDiff, 10)*8;
    }


    var hrs = 0;
    var missing = 0;

    for(var j=0; j<cardEls.length; j++) {
      var cardEl = cardEls[j];
      var daysMatch = cardEl.innerText.match(/(?:([0-9]+(?:\.[0-9]+)?)\s*days?)/)
      var hrsMatch = cardEl.innerText.match(/(?:([0-9]+(?:\.[0-9]+)?)\s*hrs?)/)

      if(daysMatch) {
        hrs += parseFloat(daysMatch[1], 10)*8;
      } else if(hrsMatch) {
        hrs += parseFloat(hrsMatch[1], 10);
      } else {
        missing++;
      }
    }

    if(!totalEl) {
      totalEl = document.createElement("div");
      totalEl.className = "chrome-ext-total-header";
      var styles = {
        "display": "inline-block",
        "border": "solid black 1px",
        "padding": "0 10px",
        "border-radius": "2px",
        "margin": "2px",
        "font-size": "smaller",
        "margin-right": "5px"
      };

      for(var k in styles) {
        totalEl.style[k] = styles[k];
      }
    }

    if(!missingEl) {
      missingEl = document.createElement("div");
      missingEl.className = "chrome-ext-missing-header";
      var styles = {
        "display": "inline-block",
        "border": "solid red 1px",
        "background-color": "rgb(255, 144, 144)",
        "color": "white",
        "padding": "0 10px",
        "border-radius": "2px",
        "font-size": "smaller",
        "margin": "2px"
      };

      for(var k in styles) {
        missingEl.style[k] = styles[k];
      }
    }

    totalEl.innerHTML = hrs+"hrs ("+(hrs/8)+"days)";
    if(dateDiff !== null) {
      totalEl.innerHTML += " / "+dateDiff+"hrs ("+(dateDiff/8)+"days)";
    }
    headerEl.appendChild(totalEl);

    if(missing > 0) {
      missingEl.innerHTML = missing+" missing";
      headerEl.appendChild(missingEl);
    } else if(headerEl.contains(missingEl)) {
      headerEl.removeChild(missingEl);
    }
  }
}, 1000);
