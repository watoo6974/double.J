<?php
require('view/top.php');
?>
    <script src="script/oil.js"></script>
    <link href="css/drink.css" rel="stylesheet" type="text/css" >
   </head>
  <body>
      <h1>
        <a href="home.php">
        <img class="home" src="soruce/home.png"></a>
        <a href="oil.php">기름값뿜빠이</a><input class="help" type="image" src="soruce/help.png" onclick="oilAlert()">
        
      </h1>
      <div id="grid2" class="board">
        <div>
            <form name="calc">
                <table border : 2px solid white;, style = "margin-left : auto; margin-right : auto;" >
              <tr>
                  <td>인원수</td>
                  <td><input type="text" placeholder="입력해주세요" name="a" onclick="
                    if (this.value ==='입력해주세요'){
                    this.value = '';}"></td>
              </tr>
              <tr>
                  
                  <td>거리(km)</td>
                  <td><input type="text" placeholder="입력해주세요" name="b" onclick="
                    if (this.value ==='입력해주세요'){
                    this.value = '';}"></td>
                    
              </tr>
              <tr>
                  <td>리터당 기름값</td>
                  <td><input type="text" placeholder="입력해주세요" name="c" onclick="
                    if (this.value ==='입력해주세요'){
                    this.value = '';}"></td></td>
              </tr>
              <tr>
                  <td>평균연비(km/L)</td>
                  <td><input type="text" placeholder="입력해주세요" name="d" onclick="
                    if (this.value ==='입력해주세요'){
                    this.value = '';}"></td>
              </tr>
              <tr>
                  <td>톨비</td>
                  <td><input type="text" placeholder="입력해주세요" name="e" ></td>
              </tr>
              <tr>
                  <td>금액</td>
                  <td><input type="text" name="f" readonly ></td>
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
        <div class="item">※ 여러명이 차를 같이 타고 갈 때에 기름값 뿜빠이를 도와드리는 계산기 입니다.
           
      </div>
    </div>
  </body>
</html>