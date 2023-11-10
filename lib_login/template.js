module.exports = {
    HTML: function (title, body, authStatusUI) {
      return `
      <!doctype html>
      <html>
      <head>    
        <title>Login TEST - ${title}</title>
        <meta charset="utf-8">
        <style>
          @import url(fontawesome-all.min.css);
          @import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,700,900");
          
          
          body {
              font-family: "Source Sans Pro", Helvetica, sans-serif;
              background-color: rgb(236, 236, 236);
              margin: 100px;
              margin-bottom: 10px;
          }
          a {
            text-decoration-line: none;
            margin-left: 5px;
            margin-top: 10px;
          }
          h2 {
            letter-spacing: 2.5px;
            margin: 30px;
            margin-top: 40px;
            margin-bottom: 50px;
          }

          .margin {
            margin-top: 50px;
            margin-bottom: 40px;
          }

          .my_link:link, .my_link:visited {
            background-color: #17eeee;
            color: white;
            width: 150px;
            padding: 15px 25px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
          }
          .my_link:hover, .my_link:active {
            background-color: #0aa7a7;
          }

          .background {
              background-color: white;
              height: auto;
              width: 90%;
              max-width: 450px;
              padding: 10px;
              margin: 0 auto;
              border-radius: 5px;
              box-shadow: 0px 20px 10px -20px rgba(0, 0, 0, 0.3);
              text-align: center;
          }
  
          form {
              display: flex;
              padding: 30px;
              flex-direction: column;
          }
  
          .login {
              border: none;
              border-bottom: 2px solid #D1D1D4;
              background: none;
              padding: 10px;
              font-weight: 700;
              transition: .2s;
              width: 75%;
          }
          .login:active,
          .login:focus,
          .login:hover {
              outline: none;
              border-bottom-color: #17eeee;;
          }
  
          .btn {            
              border: none;
              width: 75%;
              background-color: #17eeee;
              color: white;
              padding: 15px 0;
              font-weight: 600;
              border-radius: 5px;
              cursor: pointer;
              transition: .2s;
          }
          .btn:hover {
              background-color: #0aa7a7;
          }
          .btn2 {            
            border: none;
            width: 75%;
            background-color: #17eeee;
            color: white;
            padding: 15px 0;
            font-weight: 600;
            border-radius: 5px;
            cursor: pointer;
            transition: .2s;
            margin-bottom: 30px;
          }
          .btn2 a {
            color: white;
          }
          .btn2:hover {
              background-color: #0aa7a7;
          }
      </style>
      </head>
      <body>
        <div class="background">
          ${authStatusUI}
          ${body}
        </div>
      </body>
      <body  margin: 0; padding: 0;">
        <footer style="color: #6b6b6b; text-align: center; padding: 10px;">
            <hr style="margin-bottom: 70px; margin-top: 100px;">
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
    }
}