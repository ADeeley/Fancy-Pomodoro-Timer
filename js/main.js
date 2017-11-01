var pdt = new Object(),
    // Variables for time
    date = new Date(),
    isRunning = false,
    target = 0,
    m = 25, 
    s = 0,
    i = document.getElementById("interval"),
    p = document.getElementById("period"),
    time = document.getElementById("time");

pdt.startTimer = function() {

    let now = Date.now();
    pdt.target = Date.now() + (date.getMinutes() * 60 * 1000);
    console.log(now + " ||| " + pdt.target);
    console.log((pdt.target - now) / 1000);
    pdt.isRunning = true;
}

pdt.getTimeRemaining = function() {
    if (pdt.isRunning) {
        let remaining = pdt.target - Date.now();

        var sec = Math.floor(remaining / 1000) % 60;
        var min = Math.floor(remaining / 1000 / 60);

        console.log("min " + min);
        console.log("sec " + sec);
        return dateObj;
    }
    else {
        return undefined;
    }
}

pdt.incrementInterval =  function() {
    console.log("increment interval");
    i.innerHTML++;
}

pdt.decrementInterval = function() {
    console.log("decrement interval");
    i.innerHTML--;
}

pdt.incrementPeriod = function() {
    console.log("incrementPeriod");
    date.setMinutes(date.getMinutes() + 1);
}
    
pdt.decrementPeriod = function() {
    console.log("incrementPeriod");
    date.setMinutes(date.getMinutes() - 1);
}

window.onload = function(){

    var ii = document.getElementById("incrInterval");
    ii.addEventListener("click", function() {
        pdt.incrementInterval();
    })
    var di = document.getElementById("decrInterval");
    di.addEventListener("click", function() {
        pdt.decrementInterval();
    })
    var ip = document.getElementById("incrPeriod");
    ip.addEventListener("click", function() {
        pdt.incrementPeriod();
    })
    var dp = document.getElementById("decrPeriod");
    dp.addEventListener("click", function() {
        pdt.decrementPeriod();
    })
     
    var displayTime = document.getElementById("time");
    var startButton = document.getElementById("start");
    startButton.addEventListener("click", function() {
        pdt.startTimer();
        // Main loop
        setInterval(function() {
            let remaining = pdt.getTimeRemaining();
            let time = document.getElementById("time").innerHTML;
            time = remaining[min] + ":" + remaining[secs];
        }, 1000);
    });

}











