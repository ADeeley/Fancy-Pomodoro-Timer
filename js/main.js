function PDTimer() {
    // Variables for time
    var date = new Date();
    date.setMinutes(25);
    date.setSeconds(0);

    var m, s;
    var i = document.getElementById("interval");
    var p = document.getElementById("period");
    var time = document.getElementById("time");

    this.displayTime = function() {
        m = date.getMinutes();
        s = date.getSeconds();
        document.getElementById("time").innerHTML = m + ":" + s;
    }

    this.tick = function() {
    }

    this.incrementInterval =  function() {
        console.log("increment interval");
        i.innerHTML++;
    }

    this.decrementInterval = function() {
        console.log("decrement interval");
        i.innerHTML--;
    }

    this.incrementPeriod = function() {
        console.log("incrementPeriod");
        date.setMinutes(date.getMinutes() + 1);
        this.displayTime();
    }
    
    this.decrementPeriod = function() {
        console.log("incrementPeriod");
        date.setMinutes(date.getMinutes() - 1);
        this.displayTime();
    }
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
     
    var pdt = new PDTimer();
    pdt.displayTime();
}










