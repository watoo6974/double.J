function calcNow(){
    calc.e.value = calc_divide(calc.d.value, calc.a.value)
    var g = calc_minus(calc.a.value, calc.b.value)
    var f = calc_minus(calc.c.value, calc.d.value)
    var h = calc_divide(f, g)
    calc.i.value = calc_plus(calc.e.value, h)
    
}
function calc_divide(d, a){
    return d/a;
}
function calc_minus(a, b){
    return a-b;
}
function calc_minus(c, d){
    return c-d;
}
function calc_divide(f, g){
    return f/g;
}
function calc_plus(e, h){
    return Number(e) + Number(h);
}
function Reset(){
    document.resetbutton.reset();
}



function drinkAlert(){
    alert ('인원 : 함께 즐긴 인원이 몇 명인지 입력합니다.\n비음주자 : 함께 한 인원들중 술을 안 드신 인원이 몇 명인지 입력합니다.\n총계 : 술과 안주를 포함한 모든 금액을 쓰시는 칸입니다. 단위는 원 입니다.\n안주 : 드신 것중 안주에 해당하는 금액만 쓰시면 됩니다.\n음주자금액 : 술과 안주를 함께 즐긴 분들이 내셔야 되는 금액 입니다.\n비음주자금액 : 술과 안주중 안주만 즐긴 분들이 내셔야 하는 금액 입니다.')
}
Math.round(calc.i.value, calc.e.value)
