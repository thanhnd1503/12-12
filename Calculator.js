let view = document.getElementById("do");
function inputValue(value) {
    view.value += value;
}
function result() {
    let result = eval(view.value);
    view.value = result;
}
function xoa(){
    view.value="";
}