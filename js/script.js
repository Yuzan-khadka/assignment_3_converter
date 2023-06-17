function convertCurrency(){
    //constant rate
    const usdToCAD = 1.32;
    const cadToUSD = 0.76;
    // usd value 
    var input1 = document.getElementById('left-input').value;
    // cad value
    var input2 = document.getElementById('right-input').value;
    
    //condition to check input validation
    if(input1 !== null && input2.length == 0){
            input2 = usdToCAD * input1
            document.getElementById("right-input").value  = input2.toFixed(3);
       
    }else if(input2 !== null && input1.length == 0){
            input1 = cadToUSD * input2
            document.getElementById("left-input").value  = input1.toFixed(3);
    }else{
        //alert if user tries to input value on both fields
       
            alert("Inappropriate Input. Please Enter value in only one field");
            document.getElementById("left-input").value = "";
            document.getElementById("right-input").value = "";
    }
}

