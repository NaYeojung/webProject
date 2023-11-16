module.exports = {
    HTML: function (title, list, body1, body2, authStatusUI) {
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
              list-style: none;
            }
            .Todolist li div{
                display: block;
                width: 650px;
                list-style: none;
                line-height: 40px; /*수직 가운데 정렬 : 보통 height랑 같은 숫자를 쓴다*/
                position: relative;
                margin-bottom: 50px;
                font-size: 15px;
                text-indent: 20px; /*들여쓰기*/
                text-align: left;
                background: rgb(241, 242, 241);
                font-weight: 400;
                cursor: pointer;
                padding: 27px;
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
          font-size: 15px;
          border: none;
          float: right;
          cursor: pointer;
          position: relative;
          list-style: none;
        }
        #complete {
          text-decoration: line-through;
          text-decoration-color: red;
          list-style: none;
        }
        
  #region {
    position: fixed;
    top: 20%;
    left: 4%;
  
    border: none;
    border-radius: 0.375rem;
    background: rgb(255, 255, 255);
    padding: 12px;
    font-weight: bold;
    box-shadow: 0px 3px 5px rgb(208, 208, 208);
    cursor: pointer;
  }

  
  .region-nav {
    text-align: left;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    display: table;
    margin-left: auto;
    margin-right: auto;

  }
  #region-link {
    text-decoration: none;
    color: #5d5d5d;
    margin: 1.5em;
  }
  .region-item {
      margin: 15px;
  }
        </style>
        <script>
  function deleteEntry(entryId) {
    if (confirm('Are you sure you want to delete this entry?')) {
      var form = document.createElement('form');
      form.method = 'POST';
      form.action = '/diary/delete_diary';
      
      // Create an input field for entryId
      var input = document.createElement('input');
      input.type = 'hidden';
      input.name = 'entryId'; // This should match the parameter name in your server route
      input.value = entryId;
      
      // Append the input field to the form
      form.appendChild(input);
      
      // Append the form to the body and submit it
      document.body.appendChild(form);
      form.submit();
    }
  }
</script>
      </head>
      <body>
        <div class="background">
          ${authStatusUI}
          ${body1}
          ${list}
          ${body2}
        </div>
      </body>
      <body  margin: 0; padding: 0;">
      <section>
                <button id="region">
                    <ul class="region-nav">
                        <li class="region-item"><a id="region-link" href="/diary/map">> 일기 쓰러 가기</a></li>
                        <li class="region-item"><a id="region-link" href="/diary/diarylist" style="color: #17eeee;">> 일기 보관함</a></li>
                    </ul>
                </button>
            </section>
        <footer style="color: #6b6b6b; text-align: center; padding: 10px;">
            <hr style="margin-bottom: 70px;">
            <div>
                <p style="display: inline-block; color: #2f2f2f; font-size: 20px; font-weight: 600; margin-left: 60px; 
                background: linear-gradient(to right, #17eeee, #162ad9); -webkit-background-clip: text; color: transparent;">Account<br><br>
                    <a href="/auth/login" style="color: #1f1f1f; text-decoration: none; margin: 20px; font-size: 15px; font-weight: 500; display: block;">Login</a>
                    <a href="/auth/login" style="color: #1f1f1f; text-decoration: none; margin: 20px; font-size: 15px; font-weight: 500; display: block;">Signin</a></p>
                <p style="display: inline-block; color: #1f1f1f; font-size: 20px; font-weight: 600; margin-left: 60px;
                background: linear-gradient(to right, #17eeee, #162ad9); -webkit-background-clip: text; color: transparent;">Destination<br><br>
                    <a href="../지역/main.html" style="color: #1f1f1f; text-decoration: none; margin: 20px; font-size: 15px; font-weight: 500; display: block;">By region</a>
                    <a href="../테마/main.html" style="color: #1f1f1f; text-decoration: none; margin: 20px; font-size: 15px; font-weight: 500; display: block;">By theme</a></p>
                <p style="display: inline-block; color: #2f2f2f; font-size: 20px; font-weight: 600; margin-left: 60px;
                background: linear-gradient(to right, #17eeee, #162ad9); -webkit-background-clip: text; color: transparent;">Community & news<br><br>
                    <a href="../테마/main.html" style="color: #1f1f1f; text-decoration: none; margin: 20px; font-size: 15px; font-weight: 500; display: block;">Community</a>
                    <a href="../테마/main.html" style="color: #1f1f1f; text-decoration: none; margin: 20px; font-size: 15px; font-weight: 500; display: block;">News</a></p>
                <p style="display: inline-block; color: #2f2f2f; font-size: 20px; font-weight: 600; margin-left: 60px;
                background: linear-gradient(to right, #17eeee, #162ad9); -webkit-background-clip: text; color: transparent;">My page<br><br>
                    <a href="/list/allmylist" style="color: #1f1f1f; text-decoration: none; margin: 20px; font-size: 15px; font-weight: 500; display: block;">Bucket list</a>
                    <a href="/list/allmylist" style="color: #1f1f1f; text-decoration: none; margin: 20px; font-size: 15px; font-weight: 500; display: block;">Setting</a></p>
			</div>
            <p style="margin-top: 50px; font-size: 15px;">&copy; 2023 My web project.</p>
        </footer>
    </body>
      </html>
   `;
    },

    list:function(results){
    var list='<div class="Todolist"><ul id="addTodo">';
      var i=results.length-1;

      while(i>=0){
        list = list + `
        <li>
        <div>
          <h3 class="entry-title" style="text-align: center">${results[i].title}</h3>
          <p style="text-align: center">${results[i].date}</p>
          <p style="margin-top: 50px; margin-bottom: 50px; white-space: pre-line;">${results[i].memo}</p>
          <button class="deleteBtn" data-seq="${results[i].seq}" onclick="deleteEntry(${results[i].seq})">Delete</button>
        </div>
        </li>

        `;
        i=i-1;
      }
      list=list+'</ul></div>';
      return list;
    }
    
}
