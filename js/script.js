


function convertCurrency(){
    // var calculation = input1.value * usdToCAD;
    // input2.value = calculation.toFixed(3);
    const usdToCAD = 1.32;
    const cadToUSD = 0.76;
    var input1 = document.getElementById('left-input').value;
    var input2 = document.getElementById('right-input').value;
    console.log(input1,input2);

    if(input1 !== null && input2.length == 0){
        
            input2 = usdToCAD * input1
            document.getElementById("right-input").value  = input2.toFixed(3);

            
       
    }else if(input2 !== null && input1.length == 0){
        
            input1 = cadToUSD * input2
            document.getElementById("left-input").value  = input1.toFixed(3);

    }else{
       
            alert("Inappropriate Input. Please Enter value in only one field");
            document.getElementById("left-input").value = "";
            document.getElementById("right-input").value = "";


       
    }
}

