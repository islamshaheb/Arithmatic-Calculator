//Not allowed javascript hoisting
"use strict";

var current_click_length = document.querySelectorAll(".mybutton").length;
var equation = "";

function calculate_result(output)
{
   
    var ans=eval(output);
    document.querySelector("h1").innerHTML = ans;
    let temp = ans;
    equation=temp.toString();
    document.querySelector("p").innerHTML=equation;

}

document.addEventListener("keydown", function(event) {
    const isNumber = isFinite(event.key);
    let cur_text=event.key;
    let keyid=event.keyCode;
    
    if(cur_text == "Enter")
    {
        calculate_result(equation);
    }
    else if(keyid == 8 || keyid == 46)
    {
        if(equation.length && keyid==8)
        {
            equation = equation.slice(0,-1);
        }
        else 
        {
            equation="";
            document.querySelector("h1").innerHTML = "";
        }
        document.querySelector("p").innerHTML=equation;
    }
    else if(!isNumber)
    {
        if(cur_text  ==  '.' || cur_text  ==  '+' || cur_text == '-' || cur_text == '*' || cur_text == '/' || cur_text == '(' || cur_text == ')' )
        {
            equation+=cur_text;
            document.querySelector("p").innerHTML=equation;
        }
    }
    else if(isNumber)
    {
        equation+=cur_text;
        document.querySelector("p").innerHTML=equation;
        console.log("Bal");
    }

});

for(var i=0; i<current_click_length; i++)
{
    document.querySelectorAll(".mybutton")[i].addEventListener("click",function()
    {
        var cur_text=this.innerHTML;
        console.log(cur_text);
        console.log(equation);
        if(cur_text == "AC")
        {
            equation="";
            document.querySelector("p").innerHTML=equation;
            document.querySelector("h1").innerHTML = "";
        }
        else if(cur_text == "=")
        {
            calculate_result(equation);
        }
        else if(cur_text == "&lt;")
        {
            equation = equation.slice(0,-1);
            document.querySelector("p").innerHTML=equation;
        }
        else
        {
            equation+=cur_text;
            document.querySelector("p").innerHTML=equation;
        }

    });
}

