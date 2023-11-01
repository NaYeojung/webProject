module.exports = {
    HTML: function (title, list, body1, body2, authStatusUI, list2) {
      return `
      <!doctype html>
      <html>
      <head>    
        <title>Login TEST - ${title}</title>
        <meta charset="utf-8">
        <style>
            @import url(fontawesome-all.min.css);
            @import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,700,900");

            *{
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            body{
                height: 100vh;
                width: 100%;
                background-color: rgb(236, 236, 236);
                font-family: "Source Sans Pro", Helvetica, sans-serif;
            }
            .wrapper{
                margin: 120px auto;
                max-width: 700px;
                width: 100%;
                background: white;
                padding: 25px;
                border-radius: 6px;
            }
            .wrapper header{
                margin-top: 20px;
                margin-bottom: 60px;
                font-size: 30px;
                font-weight: 700;
                letter-spacing: 8px;
                text-align: center;
            }

            /*.wrapper안에 있는 것을 부를때(태그 설정 방법은 무궁무진)*/
            .wrapper .inputField{
                display: flex;  
                margin: 5px auto 20px ; 
                height: 45px;
                width: 700px;
                font-family:'Hi Melody', cursive;
            }
            .xi-plus{ 
                color: white;
            }
            p input{
                background-color: rgb(227, 227, 227);
                color: black;
                padding-left: 15px;
                width: 600px;
                height: 100%;
                border: none;
                font-size: 15px;
                border-radius: 5px;
                outline: none;  /*inputbox 클릭시 테두리 안보이게*/
            }

            .inputField .btn{
                width: 50px;
                height: 100%;
                border: none;
                border-radius: 3px;
                background: #17eeee;
                cursor: pointer;
                color: white;
            }
            .wrapper .Todolist{
                display: flex;
            }
            .Todolist li {
              border-radius: 3px;
              margin-left: 15px;
              list-style: none;
            }
            .Todolist li input{
                display: block;
                width: 650px;
                list-style: none;
                line-height: 40px; /*수직 가운데 정렬 : 보통 height랑 같은 숫자를 쓴다*/
                position: relative;
                margin-bottom: 9px;
                font-size: 15px;
                text-indent: 15px; /*들여쓰기*/
                text-align: left;
                background: rgb(241, 242, 241);
                font-weight: 400;
                cursor: pointer;
                
            }

            .wrapper .footer{
                font-weight: 600;
                text-indent: 15px;
                display: flex;
                width: 100%;
                margin-top: 30px;
                justify-content: right;/*flex때문에 써준다*/
            }
            .footer button{
                color: white;
                cursor: pointer;
                font-size: 17px;
                font-weight: 600;
                padding: 6px 10px;
                width: 100px;
                height: 40px;
                border: none;
                border-radius: 9px;
                background: #454545;
            }
            .footer button:hover{
                background-color : #454545;
                color: white;
            }
            
      nav a {
          padding: 0.4rem;
          display: block;
          float: left;
          text-decoration:none;
          font-size:1.3rem;
          color:rgb(86, 86, 86);
          cursor: pointer;
        }
        
        nav a:hover {
          border-bottom-color: transparent;
          color: #17eeee;
        }
        
        nav {
          top: -1rem;
          font-weight: 500;
          margin: 3rem;
          width: 100%;
          z-index: 2;
          position: fixed;
          overflow:hidden;
          background-color: transparent;
        }
        
        nav ul {
          float: right;
          padding: 0 6rem;
          list-style: none;
        }
        
        .menu, menu span {
          display: inline-block;
          box-sizing: border-box;
        }
        
        .menu {
          top: -0.7rem;
          position: relative;
          width: 1.2rem;
          height: 1.2rem;
        }
        
        .menu span {
          position: absolute;
          left: 0;
          width: 1.3rem;
          height: 0.17rem;
          background-color:rgb(86, 86, 86);
          border-radius:0.1rem;
        }
        
        .menu span:nth-of-type(1) {
          top: 0;
        }
        
        .menu span:nth-of-type(2) {
          top: 0.5rem;
        }
        
        .menu span:nth-of-type(3) {
          bottom: 0;
        }
        .nav_li {
          display: inline-block;
          vertical-align: middle;
          width: 100%;
          transition: all .5s;
          padding: 1rem;
        }
        .deleteBtn {
          font-size: 20px;
          border: none;
          float: right;
          right: 17px;
          margin-top: 7px;
          cursor: pointer;
          position: relative;
          list-style: none;
        }
        #complete {
          text-decoration: line-through;
          text-decoration-color: red;
          list-style: none;
        }
        </style>
      </head>
      <body>
        <div class="background">
          ${authStatusUI}
          ${body1}
          ${list}
          ${list2}
          ${body2}
        </div>
      </body>
      </html>
      `;
    },

    list:function(results2){
      var list='<div class="Todolist"><ul id="addTodo">';
      var i=0;

      while(i<results2.length){
        list = list + `
        <form action="/list/dellist_process" method="post">
        <li><div>
        <input type="submit" class="deleteBtn" name="deleteBtn" value="${results2[i].contents}"></input>
        </div></li></form>
        `;
        i=i+1;
      }
      list=list+'</ul></div>';
      return list;
    },

    list2:function(results3){
      var list='<div class="Todolist"><ul id="addTodo">';
      var i=0;

      while(i<results3.length){
        list = list + `
        <form action="/list/dellist_process2" method="post">
        <li><div>
        <input type="submit" class="deleteBtn" id="complete" name="comleteBtn" value="${results3[i].contents}"></input>
        </div></li></form>
        `;
        i=i+1;
      }
      list=list+'</ul></div>';
      return list;
    }
}
