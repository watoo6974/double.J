<?php
require('view/top.php');
?>
    <script src="script/drink.js"></script>
    <link href="css/drink.css" rel="stylesheet" type="text/css" >
   </head>
  <body>
      <h1><a href="home.php">
        <img class="home" src="soruce/home.png"></a>
        <a href="drink.php">술자리뿜빠이</a>
        <input class="help" type="image" src="soruce/help.png" onclick="drinkAlert()">
        
      <div id="grid2" class="board">
        <div>
            <form name="calc">
                <table border : 2px solid white;,style = "margin-left : auto; margin-right : auto;" >
              <tr>
                  <td>인원수</td>
                  <td><input type="text" placeholder="입력해주세요" name="a" onclick="
                    if (this.value ==='입력해주세요'){
                    this.value = '';}"></td>
              </tr>
              <tr>
                  
                  <td>비음주자</td>
                  <td><input type="text" placeholder="입력해주세요" name="b" onclick="
                    if (this.value ==='입력해주세요'){
                    this.value = '';}"></td>
                    
              </tr>
              <tr>
                  <td>총계</td>
                  <td><input type="text" placeholder="입력해주세요" name="c" onclick="
                    if (this.value ==='입력해주세요'){
                    this.value = '';}"></td></td>
              </tr>
              <tr>
                  <td>안주</td>
                  <td><input type="text" placeholder="입력해주세요" name="d" onclick="
                    if (this.value ==='입력해주세요'){
                    this.value = '';}"></td></td>
              </tr>
              <tr>
                  <td>음주자금액</td>
                  <td><input type="text" name="i"readonly ></td>
              </tr>
              <tr>
                  <td>비음주자금액</td>
                  <td><input type="text" name="e" readonly ></td>
              </tr>
    
            </table>
              <div class="button">
              <form name="resetbutton">
              <input type="image" onclick="Reset()" src='soruce/reset.png' >
              </form>
              <img onClick="calcNow()" src='soruce/calc.png' >

            </div>
             
          </form>
    
    </div>
        <div class="item">※ 술자리에 비음주자가 함께 계실 때에 뿜빠이를 도와드리는 계산기 입니다.
           
      </div>
    </div>
  </body>
</html>