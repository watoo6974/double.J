<?php
require('view/top.php');
?>
    <script src="script/random.js"></script>
    <link href="css/random.css" rel="stylesheet" type="text/css" >
   </head>
  <body>
      <h1><a href="home.php">
        <img class="home" src="soruce/home.png"></a>
        <a href="random.php">랜덤추첨뽑기</a>
        <input class="help" type="image" src="soruce/help.png" onclick="randomAlert()">
        
      </h1>
      <div id="grid2" class="board">
        <div class="board2">
        <div class="button">
          <div class="inputrd">
            <input type="text" placeholder="1">
            <input type="text" placeholder="2"><br>
            <input type="text" placeholder="3">
            <input type="text" placeholder="4"><br>
            <input type="text" placeholder="5">
            <input type="text" placeholder="6"><br>
          </div>
            <img onClick="btn()" src='soruce/lucky.png' >
        </div>
        <div class = "lucky">
          <b><br>오늘의 주인공</b>
          <p></p>
        </div>
      </div>
        <div class="item">※ 순서대로 작성해주세요 6인용 입니다.
           
      </div>
    </div>
  </body>
</html>