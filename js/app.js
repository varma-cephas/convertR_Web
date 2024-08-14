const input_amount = document.querySelector(".input_amount");

const origin_currency_value_container = document.querySelector(".origin_currency_value_container");
const converted_currency_value_container = document.querySelector(".converted_currency_value_container")

const conversion_rate_inner_container = document.querySelector(".conversion_rate_inner_container")

const origin_currency_name_conversion = document.querySelector(".origin_currency_name_conversion");
const origin_currency_amount_conversion_rate = document.querySelector(".origin_currency_amount_conversion_rate");

const converted_currency_amount_conversion_rate = document.querySelector(".converted_currency_amount_conversion_rate");
const converted_currency_name_conversion = document.querySelector(".converted_currency_name_conversion");

const origin_currency_usd = document.querySelector(".origin_currency_usd");
const origin_currency_rwf = document.querySelector(".origin_currency_rwf");


const input_amount_container = document.querySelector(".input-amount-container");
const country_currency_container = document.querySelector(".country_currency_container");
const convert_button__inner_container = document.querySelector(".convert_button__inner_container");

const converted_concurrency_amount_container = document.querySelector(".converted_concurrency_amount_container");
const back_home_button = document.querySelector(".back_home_button");

const currency_amount = document.querySelector(".currency_amount");

let selectedOriginCurrency;
let selected_converted_currency;

let convertedAmount;

const _0x1dd5a7=_0x22d0;function _0x22d0(_0x1a75ea,_0x475155){const _0x24a4ea=_0x24a4();return _0x22d0=function(_0x22d0fa,_0x3501f8){_0x22d0fa=_0x22d0fa-0xb8;let _0x21f3d3=_0x24a4ea[_0x22d0fa];return _0x21f3d3;},_0x22d0(_0x1a75ea,_0x475155);}(function(_0x5a884b,_0x34ef21){const _0x3b5d3b=_0x22d0,_0x2f1ea0=_0x5a884b();while(!![]){try{const _0x3f256a=-parseInt(_0x3b5d3b(0xbd))/0x1+-parseInt(_0x3b5d3b(0xb8))/0x2*(-parseInt(_0x3b5d3b(0xc0))/0x3)+parseInt(_0x3b5d3b(0xbe))/0x4+-parseInt(_0x3b5d3b(0xb9))/0x5+parseInt(_0x3b5d3b(0xbb))/0x6+-parseInt(_0x3b5d3b(0xbc))/0x7+parseInt(_0x3b5d3b(0xbf))/0x8;if(_0x3f256a===_0x34ef21)break;else _0x2f1ea0['push'](_0x2f1ea0['shift']());}catch(_0x4d4859){_0x2f1ea0['push'](_0x2f1ea0['shift']());}}}(_0x24a4,0x1c064));function _0x24a4(){const _0x71c0be=['812xDxnhf','1696688OBAJkp','15xowcHT','71986uZwUUb','588940gZhAfQ','jcKGTcMWAkvwFccF5Czf7pZkJzR0DKAwRphhm6NE','112764oVsWtc','885948ZdUEOP','51908ziilqS'];_0x24a4=function(){return _0x71c0be;};return _0x24a4();}const api_key=_0x1dd5a7(0xba);

async function getCurrencyData(){
    const request = await fetch(`https://api.currencyapi.com/v3/latest?apikey=cur_live_${api_key}`);
    const response = await request.json()
    for(let x in response.data){
        let newOriginCurrencyOption = document.createElement("option");
        let newConvertedCurrencyOption = document.createElement("option");

        newOriginCurrencyOption.textContent = response.data[x].code;
        newOriginCurrencyOption.setAttribute("value", response.data[x].value.toFixed(3));
        newOriginCurrencyOption.setAttribute("class", `origin_currency_${response.data[x].code.toLowerCase()}`)
        origin_currency_value_container.appendChild(newOriginCurrencyOption);

        newOriginCurrencyOption.addEventListener("click", ()=>{
            conversion_rate_inner_container.style.display = "block";

            origin_currency_name_conversion.textContent = newOriginCurrencyOption.textContent;
            origin_currency_amount_conversion_rate.textContent = newOriginCurrencyOption.value;

            alert("here1");
            selectedOriginCurrency = Number(newOriginCurrencyOption.value)
        })


        newOriginCurrencyOption.addEventListener("touchstart", ()=>{
            conversion_rate_inner_container.style.display = "block";

            origin_currency_name_conversion.textContent = newOriginCurrencyOption.textContent;
            origin_currency_amount_conversion_rate.textContent = newOriginCurrencyOption.value;

            alert("here1");
            selectedOriginCurrency = Number(newOriginCurrencyOption.value)
        })


        newConvertedCurrencyOption.textContent = response.data[x].code;
        newConvertedCurrencyOption.setAttribute("value", response.data[x].value.toFixed(3));
        newConvertedCurrencyOption.setAttribute("class", `converted_currency_${response.data[x].code.toLowerCase()}`)
        converted_currency_value_container.appendChild(newConvertedCurrencyOption);

        newConvertedCurrencyOption.addEventListener("click", ()=>{
            conversion_rate_inner_container.style.display = "block";

            converted_currency_name_conversion.textContent = newConvertedCurrencyOption.textContent;
            converted_currency_amount_conversion_rate.textContent = newConvertedCurrencyOption.value;

            alert("here2");
            selected_converted_currency = Number(newConvertedCurrencyOption.value);
        })


        newConvertedCurrencyOption.addEventListener("touchstart", ()=>{
            conversion_rate_inner_container.style.display = "block";

            converted_currency_name_conversion.textContent = newConvertedCurrencyOption.textContent;
            converted_currency_amount_conversion_rate.textContent = newConvertedCurrencyOption.value;

            alert("here2");
            selected_converted_currency = Number(newConvertedCurrencyOption.value);
        })



        back_home_button.addEventListener("click", ()=>{
            input_amount_container.style.display = "block";
                country_currency_container.style.display = "block";
                convert_button__inner_container.style.display = "block";
                converted_concurrency_amount_container.style.display = "none";
                back_home_button.style.display = "none";
        })
    }
}

getCurrencyData();




setTimeout(()=>{
    country_currency_container.addEventListener("submit", (event)=>{
        if(Number(input_amount.value) > 0){
            input_amount_container.style.display = "none";
            country_currency_container.style.display = "none";
            convert_button__inner_container.style.display = "none";
            converted_concurrency_amount_container.style.display = "block";
            back_home_button.style.display = "block";
            convertedAmount = `${((Number(input_amount.value) / selectedOriginCurrency) * selected_converted_currency).toFixed(5)} ${converted_currency_name_conversion.textContent}`;
            currency_amount.textContent = convertedAmount;
            alert(Number(input_amount.value));
            alert(selectedOriginCurrency);
            alert(selected_converted_currency)
            event.preventDefault();
        }
        else{
            alert("Please enter a valid amount");
            event.preventDefault();
        }
    })
},2000)
















const testForm = document.querySelector(".testForm");
const inputText = document.querySelector(".inputText");
const inputField = document.querySelector(".inputField");
const opt1 = document.querySelector(".opt1");
const opt2 = document.querySelector(".opt2");

let selectedValue;

testForm.addEventListener("submit", (event)=>{
    // inputText.textContent = inputField.value;
    alert(inputField.value)
    event.preventDefault();
})

opt1.addEventListener("click", ()=>{
   window.location.reload();
})

opt2.addEventListener("click", ()=>{
    window.location.reload();
 })


