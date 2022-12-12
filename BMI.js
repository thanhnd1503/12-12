function check() {
    let weight = Number(document.getElementById("kg").value);
    let height = Number(document.getElementById("m").value);
    let bmi = parseFloat(weight)/(height^2);
    if (bmi < 18.5){
        document.getElementById("result").innerHTML = "Chỉ số BMI là :" + bmi + "." +"Bạn ốm vl. Ăn nhiều dô nhé!!";
    } else if (bmi>=18.5 && bmi < 25){
        document.getElementById("result").innerHTML = "Chỉ số BMI là :" + bmi + "." +"Bạn đẹp !!!.";
    } else if (bmi >= 25 && bmi <30){
        document.getElementById("result").innerHTML = "Chỉ số BMI là :" + bmi + "." +"Bạn hơi mập rồi đó !!!";
    }else{
        document.getElementById("result").innerHTML = "Chỉ số BMI là :" + bmi + "." +"M mập vl. Giảm cân đi con heo :)))";
    }

}