const clockDiv = document.querySelector('.clockDiv')

setInterval(() => {
    const time = new Date()
    clockDiv.innerHTML = time.toLocaleTimeString()

}, 1000)