function PDTimer() {
    var i = document.getElementById("interval");
    var p = document.getElementById("period");
    
    // Variables for time
    var d = new Date();
    d.setMinutes(25);
    var time = document.getElementById("time");

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
        p.innerHTML++;
        d.setMinutes(d.getMinutes() + 1);
        time.innerHTML = d.getMinutes();
    }
    
    this.decrementPeriod = function() {
        console.log("decrementPeriod");
        p.innerHTML--;
        d.setMinutes(d.getMinutes() - 1);
        time.innerHTML = d.getMinutes();
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
}


