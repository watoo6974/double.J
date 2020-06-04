function btn() {
    var input = document.getElementsByTagName('input');

    for (i = 0; i < input.length; i++) {
        stn0 = input[0].value;
        stn1 = input[1].value;
        stn2 = input[2].value;
        stn3 = input[3].value;
        stn4 = input[4].value;
        stn5 = input[5].value;
    }
    var rdpeople = [stn0 , stn1 , stn2 , stn3 , stn4 , stn5];    
    // document.getElementsByTagName('p')[0].innerHTML = (stn0||'')+'<br>'+(stn1||'')+'<br>'+(stn2||'')+'<br>'+(stn3||'')+'<br>'+(stn4||'')+'<br>'+(stn5||'');
    var y = Math.floor(Math.random()*6);
    document.getElementsByTagName('p')[0].innerHTML = (rdpeople[y])
}