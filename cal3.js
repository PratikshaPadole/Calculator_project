
let screen=document.getElementById('screen')
let buttons = document.querySelectorAll('button');
let screenValue='';
//document.getElementById("totalValue").innerHTML
for(item of buttons){
    item.addEventListener('click', (e)=>{
        console.log("screenValue",screenValue)
        buttonText=e.target.innerText;
        console.log('button text is',buttonText)
    
         if(buttonText=='AC'){
            screenValue = " ";
            screen.value= screenValue;
        }
        else if (buttonText == '='){
            screen.value =eval(screenValue);
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}

