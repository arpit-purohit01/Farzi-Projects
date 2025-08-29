const colors = document.querySelectorAll('.colors')
const body = document.querySelector("body")

colors.forEach( (color) => {
    console.log(color);
    color.addEventListener('click', (e)=>{
        console.log(e);
        console.log(e.target);
        if(e.target.id === "#212121") {body.style.backgroundColor = e.target.id, document.querySelector("h4").style.color = "white"}
        if(e.target.id === "white") {body.style.backgroundColor = e.target.id, document.querySelector("h4").style.color = "#212121";
        }
        if(e.target.id === "red") {body.style.backgroundColor = e.target.id}
        if(e.target.id === "purple") {body.style.backgroundColor = e.target.id}
    })
})
