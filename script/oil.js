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
Math.round(calc.f.value)