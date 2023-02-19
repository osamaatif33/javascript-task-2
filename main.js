let input =document.querySelector("input");
let result =document.getElementsByClassName("result")[0];

input.oninput=function()
{
    result.innerHTML =`${input.value} USD Dollar = ${(input.value * 30.48).toFixed(2)} Egyptian Pound`;
}