function checkMonth() {
    let r = Number(document.getElementById("month").value);
    switch (r){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            document.getElementById('result').innerHTML ="tháng" + " " + r +" "+"có 31 ngày"
            break;
        case 2:
            document.getElementById('result').innerHTML = "tháng 2 có 28 hoặc 29 ngày";
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            document.getElementById('result').innerHTML ="tháng" + " " + r + " " + "có 30 ngày"
            break;
        default:
            document.getElementById('result').innerHTML ="Một năm có 12 tháng thôi cha !!"
            break;


    }

}