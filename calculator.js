
var num1 = [];
function val(e,id)
{
    if(num1.length < 3)
    {
        // console.log(e,id,num1.length);
        num1.push(id);
        // console.log(num1);
        populateData(num1)
    }

    else
    {
        calc(num1)
    }
}

function calc(x)
{
    console.log(x);
}

function populateData(arr)
{
    if(arr.length===1){
        const num1 = document.createElement("p");
        num1.textContent = arr[0]
        document.getElementsByClassName('calculation')[0].appendChild(num1)
        num1.classList.add('num1');
    }
    else if (arr.length===2)
    {
        const num2 = document.createElement("p");
        num2.textContent = arr[1]
        document.getElementsByClassName('calculation')[0].appendChild(num2)
        num2.classList.add('num2')
    }
    else
    {
        const num3 = document.createElement("p");
        num3.textContent = arr[2]
        document.getElementsByClassName('calculation')[0].appendChild(num3)
        num3.classList.add('num3')
    }
    
    
}

function operaror(e,id)
{
    val(id,e.target.innerHTML);
}