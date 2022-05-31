let buttonStart = document.getElementById("start")
let buttonStop = document.getElementById("stop")
let buttonReset = document.getElementById("reset")
let secs = document.getElementById("secs")
let tens = document.getElementById("tens")
let interval

// start button
buttonStart.onclick = () => {
    clearInterval(interval) // prevents multiple triggers
    interval = setInterval(() => {
        tensNum = parseInt(tens.textContent) // gets current tens value (initally tens = 0) / allows continuity after stopping
        tensNum++
        if (tensNum < 10) {
            tens.textContent = "0" + tensNum // tens padding
        } else if (tensNum > 99) { // resets tens and starts counting secs
            tens.textContent = "00"
            secsNum = parseInt(secs.textContent)
            secsNum++
            if (secsNum < 10) {
                secs.textContent = "0" + secsNum // secs padding
            } else {
                secs.textContent = secsNum
            }
        } else {
            tens.textContent = tensNum
        }

        // stop button
        buttonStop.onclick = () => clearInterval(interval)
        
        // reset button
        buttonReset.onclick = () => {
            clearInterval(interval)
            tens.textContent = "00"
            secs.textContent = "00"
        }

    }, 10)
}