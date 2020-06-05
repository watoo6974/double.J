function btn() {
    var input = document.getElementsByTagName('input');

    for (i = 0; i < input.length; i++) {
        stn0 = input[1].value;
        stn1 = input[2].value;
        stn2 = input[3].value;
        stn3 = input[4].value;
        stn4 = input[5].value;
        stn5 = input[6].value;
    }
    var rdpeople = [stn0 , stn1 , stn2 , stn3 , stn4 , stn5];    

    if (stn5 == ''){
        if (stn4 == ''){
            if (stn3 == ''){
                if (stn2 == ''){
                    if (stn1 == ''){
                        if (stn0 == ''){
                            alert ('이름을  입력하세요.')
                        } else {
                           alert ('이름을 2개 이상 입력하세요.')
                       }
                    } else {
                       var y = Math.floor(Math.random()*2);
                       document.getElementsByTagName('p')[0].innerHTML = ("★"+rdpeople[y]+"★")
                   }
                } else {
                   var y = Math.floor(Math.random()*3);
                   document.getElementsByTagName('p')[0].innerHTML = ("★"+rdpeople[y]+"★")
               }
            } else {
               var y = Math.floor(Math.random()*4);
               document.getElementsByTagName('p')[0].innerHTML = ("★"+rdpeople[y]+"★")
           }
        } else {
           var y = Math.floor(Math.random()*5);
           document.getElementsByTagName('p')[0].innerHTML = ("★"+rdpeople[y]+"★")
       }
     } else {
        var y = Math.floor(Math.random()*6);
        document.getElementsByTagName('p')[0].innerHTML = ("★"+rdpeople[y]+"★")

    }
}
function randomAlert(){
    alert ('최대 6명까지의 이름중에 하나를 랜덤으로 출력합니다.')
}