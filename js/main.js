var pdt = new Object();
    // Variables for time
    pdt.duration = 25;
    pdt.interval = 5;
    pdt.isRunning = false;
    pdt.target = 0;

pdt.startTimer = function() {
    let now = Date.now();
    pdt.target = Date.now() + (pdt.duration * 60 * 1000);
    pdt.isRunning = true;
}

pdt.getTimeRemaining = function() {
    /**
     * Returns a date object containing the difference between now and 
     * the target date as a Unix date stamp
     */

    if (pdt.isRunning) {
        let remaining = pdt.target - Date.now();

        var dateObj = { 
            sec : Math.floor(remaining / 1000) % 60,
            min : Math.floor(remaining / 1000 / 60)
        };
        console.log("min " + dateObj.min);
        console.log("sec " + dateObj.sec);
        return dateObj;
    }
    else {
        return undefined;
    }
}

pdt.incrementInterval =  function() {
    console.log("increment interval");
    if (pdt.interval < 1000) {
        pdt.interval++;
    }
}

pdt.decrementInterval = function() {
    console.log("decrement interval");
    if (pdt.interval > 1) {
        pdt.interval--;
    }
}

pdt.incrementDuration = function() {
    console.log("incrementPeriod");
    if (pdt.duration < 1000) {
        pdt.duration += 5;
    }
}
    
pdt.decrementDuration = function() {
    console.log("decrementPeriod");
    if (pdt.duration > 1) {
        pdt.duration -= 5;
    }
}

window.onload = function(){
    var ctx = document.getElementById("canvasVisual");
    var ctx = ctx.getContext("2d");
    function visualisation() {
        ctx.beginPath();
        ctx.arc(100, 100, 80, 0, 2*Math.PI);
        ctx.strokeStyle = "#0269B4";
        ctx.lineWidth = 15;
        ctx.stroke();
    }

    visualisation();

    var displayTime = document.getElementById("time");
    var startButton = document.getElementById("start");
    var intervalVal = document.getElementById("interval");
    var periodVal = document.getElementById("period");

    var body = document.getElementById("btns");
    body.addEventListener("click", function(e) {
        switch (e.target.id) {
            case "incrInterval":
                pdt.incrementInterval();
                intervalVal.innerHTML = pdt.interval;
                break;
            case "decrInterval":
                pdt.decrementInterval();
                intervalVal.innerHTML = pdt.interval;
                break;
            case "incrPeriod":
                pdt.incrementDuration();
                periodVal.innerHTML = pdt.duration;
                displayTime.innerHTML = pdt.duration + ":00";
                break;
            case "decrPeriod":
                pdt.decrementDuration();
                periodVal.innerHTML = pdt.duration;
                displayTime.innerHTML = pdt.duration + ":00";
                break;
            case "start":
                pdt.startTimer();
                let remaining = pdt.getTimeRemaining();
                displayTime.innerHTML = remaining.min + ":" + remaining.sec;
                // Main loop
                setInterval(function() {
                    let remaining = pdt.getTimeRemaining();
                    displayTime.innerHTML = remaining.min + ":" + remaining.sec;
                }, 1000);
                break;
            case "reset":
                console.log("Reset pressed");
                break;
        }
    }, true);
}
