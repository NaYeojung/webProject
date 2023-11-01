module.exports = {
    HTML: function (title, body, authStatusUI) {
      return `
      <!doctype html>
      <html>
      <head>    
        <title>Login TEST - ${title}</title>
        <meta charset="utf-8">
        <style>
          @import url(http://fonts.googleapis.com/earlyaccess/notosanskr.css);
          @import url(fontawesome-all.min.css);
          @import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,700,900");
          
          
          body {
              font-family: "Source Sans Pro", Helvetica, sans-serif;
              background-color: rgb(236, 236, 236);
              margin: 100px;
  
          }
          a {
            text-decoration-line: none;
            margin-left: 5px;
            margin-top: 10px;
          }
          h2 {
            margin: 30px;
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
      </style>
      </head>
      <body>
        <div class="background">
          ${authStatusUI}
          ${body}
        </div>
      </body>
      </html>
      `;
    }
}