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
    pdt.interval++;
}

pdt.decrementInterval = function() {
    console.log("decrement interval");
    pdt.interval--;
}

pdt.incrementPeriod = function() {
    console.log("incrementPeriod");
    pdt.duration++;
}
    
pdt.decrementPeriod = function() {
    console.log("incrementPeriod");
    pdt.duration--;
}


window.onload = function(){

    var displayTime = document.getElementById("time");
    var startButton = document.getElementById("start");
    var intervalVal = document.getElementById("interval");
    var periodVal = document.getElementById("period");

    var ii = document.getElementById("incrInterval");
    ii.addEventListener("click", function() {
        pdt.incrementInterval();
        intervalVal.innerHTML = pdt.interval;
    })
    var di = document.getElementById("decrInterval");
    di.addEventListener("click", function() {
        pdt.decrementInterval();
        intervalVal.innerHTML = pdt.interval;
    })
    var ip = document.getElementById("incrPeriod");
    ip.addEventListener("click", function() {
        pdt.incrementPeriod();
        periodVal.innerHTML = pdt.duration;
        displayTime.innerHTML = pdt.duration + ":00";
    })
    var dp = document.getElementById("decrPeriod");
    dp.addEventListener("click", function() {
        pdt.decrementPeriod();
        periodVal.innerHTML = pdt.duration;
        displayTime.innerHTML = pdt.duration + ":00";
    })
     
    startButton.addEventListener("click", function() {
        pdt.startTimer();
        let remaining = pdt.getTimeRemaining();
        displayTime.innerHTML = remaining.min + ":" + remaining.sec;
        // Main loop
        setInterval(function() {
            let remaining = pdt.getTimeRemaining();
            displayTime.innerHTML = remaining.min + ":" + remaining.sec;
        }, 1000);
    });

}











