const randomColor = () => {
    let hex = '1234567890ABCDEF'
    let color = '#'
    for(let i = 0; i < 6; i++){
        color += hex [ Math.floor(Math.random()*16)]
    }
    return color
}

let intervelid;
const startChangingColor = () => {
    if (!intervelid){
function setcolor () {document.body.style.backgroundColor = randomColor() 
    
    }
    intervelid = setInterval(setcolor, 1000);
}
}
document.querySelector('#start').addEventListener('click',startChangingColor)

const stopChangingColor = () =>{
    clearInterval (intervelid);
    intervelid = null
}

document.querySelector('#stop').addEventListener('click',stopChangingColor)