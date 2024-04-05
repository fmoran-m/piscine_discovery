function Sum(num1, num2){
    let total = num1 + num2;
    alert(total);
    console.log(total);
}
function Sub(num1, num2){
    let total = num1 - num2;
    alert(total);
    console.log(total);
}
function Mult(num1, num2){
    let total = num1 * num2;
    alert(total);
    console.log(total);
}
function Div(num1, num2){
    let total = num1 / num2;
    alert(total);
    console.log(total);
}
function Mod(num1, num2){
//    let total = (num1 / 100) * num2;
    let total = Number(num1/num2);
    alert(total);
    console.log(total);
}

function Calculate(){

    const num1 = document.getElementById("left").value;
    const num2 = document.getElementById("right").value;
    const sym = document.getElementById("mySelect");
    const selected = sym.options[sym.selectedIndex].value; 
    if (num1 < 0 || num2 < 0){
        alert("Error :(");
        return ;
    }
    if (num2 === 0 && selected === "%"){
        alert("It's over 9000!"); 
        return ;
    }
    if (num2 === 0 && selected === "/"){
        alert("It's over 9000!"); 
        return ;
    }
    if (selected === "+"){
        Sum(num1, num2);
    }
    else if (selected === "-"){
        Sub(num1, num2);
    }
    else if (selected === "*"){
        Mult(num1, num2);
    }
    else if (selected === "/"){
        Div(num1, num2);
    }
    else if (selected === "%"){
        Mod(num1, num2);
    }
}