let dropList,fromCurrency ,toCurrency , buttonPress,selected,optionTag,amount,myImgFrom,myImgto;
dropList =document.querySelectorAll(".drop-list select");
// // fromCurrency = document.querySelector('.from select');
mySelectFrom  = document.querySelector('.fromselect')
mySelectTo  = document.querySelector('.toselect')
toCurrency = document.querySelector('.to select');
buttonPress = document.querySelector('.exchange');
amount = document.querySelector('.inpuamount');
validateinput = /^[0-9]+$/;
exchangeRateText = document.querySelector('.exchange-rate-text');
toggleIcon = document.querySelector('.toggle');

myImgFrom = document.querySelector('.fromImg')

myImgto =document.querySelector('.toImg');



for (let y in myObj ){
    // console.log(Object.entries(y))
}
 

// }
const Currency = 
   fetch ('https://openexchangerates.org/api/currencies.json')
    .then((res)=>res.json())
    .then(countries=>{   
        
        for (let country in countries){
            mySelectFrom.innerHTML += `<option>${country}</option>`;
            mySelectTo.innerHTML += `<option>${country}</option>`
            myImgFrom.src = `https://flagsapi.com/${mySelectFrom.value.slice(0,-1)}/shiny/32.png/`
            myImgto.src = `https://flagsapi.com/${mySelectTo.value.slice(0,-1)}/shiny/32.png/`
            // // myImgTo.src = `https://flagsapi.com/${mySelectFrom.value.slice(0,-1)}/shiny/32.png/`

            mySelectFrom.addEventListener('change',()=>{
                myImgFrom.src = `https://flagsapi.com/${mySelectFrom.value.slice(0,-1)}/shiny/32.png/`
            })
            mySelectTo.addEventListener('change',()=>{
                myImgto.src = `https://flagsapi.com/${mySelectTo.value.slice(0,-1)}/shiny/32.png/`
            })
        }
   
                
    })




                                                                            //Exchange Button   
    buttonPress.addEventListener('click',(e)=>{
        e.preventDefault();
        if ( amount.value == "" || amount.value == "0" || amount.value == " "){
            exchangeRateText.innerText = "Sorry please  Enter a valid Amount "
            
        }else if (!amount.value.match(validateinput)){
              
            exchangeRateText.innerText = "Sorry please  Enter a valid Amount "
        }else{
       
            exchangeRateText.innerHTML = ""

            setTimeout(()=>{
                const prices = fetch(`https://v6.exchangerate-api.com/v6/7f0e798b1d2d8b733ac32491/latest/${mySelectFrom.value}`)
                .then((res)=>res.json())
                .then((CurrencyPrice)=>{
                    let CurrencyRate = CurrencyPrice.conversion_rates;
                     let FinalResult =  amount.value * CurrencyRate[mySelectTo.value]                  
                    exchangeRateText.innerHTML += `${amount.value} ${mySelectFrom.value} = ${FinalResult} ${mySelectTo.value} ` 
                 
             
                })
            },2000)         
        }

    })  

                                                                                   //Toggle Icon
    toggleIcon.addEventListener('click',(s)=>{
        if ( amount.value == "" || amount.value == "0" || amount.value == " "){
            exchangeRateText.innerText = "Sorry please  Enter a valid Amount "
            
        }else if (!amount.value.match(validateinput)){
              
            exchangeRateText.innerText = "Sorry please  Enter a valid Amount "
        }else{
            exchangeRateText.innerHTML = ""
  
                const prices = fetch(`https://v6.exchangerate-api.com/v6/7f0e798b1d2d8b733ac32491/latest/${mySelectTo.value}`)
                .then((res)=>res.json())
                    .then((CurrencyPrice)=>{    
                           [mySelectFrom.value , mySelectTo.value] = [mySelectTo.value ,mySelectFrom.value]

                
                    let CurrencyRate = CurrencyPrice.conversion_rates;
                     let FinalResult =  amount.value * CurrencyRate[mySelectTo.value]                  
                     exchangeRateText.innerHTML += `${amount.value} ${mySelectFrom.value} = ${FinalResult} ${mySelectTo.value} ` 
                })
                

        
        }
    })
    toggleIcon.addEventListener('click',()=>{
        [myImgFrom.src , myImgto.src] = [myImgto.src, myImgFrom.src]
    })