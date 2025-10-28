let string  =''
const buttons = document.querySelectorAll("button")
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        console.log(e.target)
        if(e.target.innerHTML ==="="){
            string = eval(string)
            document.querySelector('.display').innerHTML = string;
        }
        else if(e.target.innerHTML === 'AC'){
            string = 0;
            document.querySelector('.display').innerHTML = string;
        }else{
        string = string + e.target.innerHTML;
        document.querySelector('.display').innerHTML = string;
        }
    })
})
