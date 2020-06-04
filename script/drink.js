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

Math.round(calc.i.value, calc.e.value)
