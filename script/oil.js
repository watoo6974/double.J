function calcNow(){
 
    var y = calc_divide(calc.b.value, calc.d.value)
    var z = calc_multiply(y, calc.c.value)
    var x = calc_plus(z, calc.e.value)
    calc.f.value = calc_divide(x, calc.a.value)

    
}
function calc_multiply(y, c){
    return y*c;
}
function calc_divide(b, d){
    return b/d;
}

function calc_plus(z, e){
    return Number(z) + Number(e);
}
function calc_divide(x, a){
    return x/a;
}
function Reset(){
    document.resetbutton.reset();
}

function oilAlert(){
    alert ('인원 : 주행에 함께 한 인원이 몇 명인지 입력합니다.\n거리 : 함께 한 총 주행거리를 입력 하시면 됩니다.\n리터당기름값 : 자주 이용하는 주유소의 현재 금액을 쓰시면 됩니다.\n평균연비 : 주행 하시는 차량의 평균연비를 입력하시면 됩니다. 예를들어 1리터로 8.3km를 주행하신다면 8.3 을 입력하면 됩니다.\n톨비 : 통과하신 톨게이트의 비용을 쓰시면 됩니다.\n금액 : 주행에 함께한 모든 인원이 운전자에게 주는 금액입니다.')
}
Math.round(calc.f.value)