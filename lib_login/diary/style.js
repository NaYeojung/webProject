module.exports = {
    HTML: function (title, list, authStatusUI, body) {
      return `
      <!DOCTYPE html>
      <html lang="ko">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>지역 일기 작성 페이지</title>
          <style>
          @import url(fontawesome-all.min.css);
        @import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,700,900");

        body {
            font-family: "Source Sans Pro", Helvetica, sans-serif;
            margin: 0;
            padding: 0;
            overflow: hidden;
            display: flex;
            height: 100vh;
        }

        #left-background {
            flex: 2;
            background-color: rgb(236, 236, 236);
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
        }

        #center-background {
            flex: 2;
            background-color: white;
            display: flex;
            flex-direction: column;
            overflow: hidden;
        }

        #right-background {
            flex: 1;
            background-color: rgb(236, 236, 236);
            display: flex;
            flex-direction: column;
            overflow: hidden;
        }

        #diary-form {
            margin-top: 80px;
            height: 70%;
            width: 400px;
            background-color: rgb(255, 255, 255);
            padding: 15px;
            border-radius: 3px;
            box-shadow: 0px 3px 5px rgb(208, 208, 208);
            position: relative;
            z-index: 1000;
        }

        #diary-form label {
            display: block;
        }

        #diary-form>p>input,
        #diary-form textarea {
            width: calc(100% - 10px);
            border: none;
            height: 30px;
            border-radius: 5px;
            background-color: rgb(236, 236, 236);
        }

        #save-btn {
            display: block;
            padding: 10px;
            background-color: #17eeee;
            color: white;
            text-align: center;
            text-decoration: none;
            cursor: pointer;
            border: none;
            border-radius: 4px;
            height: 30px;
            margin-left: 350px;
        }

        #save-btn:hover {
            background-color: #0aa7a7;
        }

        #image-gallery {
            justify-content: center;
            align-items: center;
        }

        #img1, #img3, #img6, #img9{
            cursor: pointer;
            width: 25%;
        }
        #img1 {
          margin-left: 20%;
        }
        #img9 {
          margin-left: 50%;
        }
        #img3, #img6 {
          margin-left: 7%;
          margin-bottom: 7%;
        }
        #img2, #img4, #img5, #img7, #img8 {
          cursor: pointer;
          width: 30%;
      }

        #region {
          position: fixed;
          top: 20%;
          right: 70px;
          font-size: 12px;
            margin-top: auto;
            padding: 12px;
            border: none;
            border-radius: 0.375rem;
            background-color: rgb(255, 255, 255);
            box-shadow: 0px 3px 5px rgb(208, 208, 208);
            cursor: pointer;
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
          margin: 1em;
        }
        .region-item {
            margin: 10px;
        }
        #mouse-circle {
          position: absolute;
          width: 150px;
          height: 150px;
          background-color: transparent;
          border: 4px solid #17eeee; 
          border-radius: 50%;
          pointer-events: none;
          transition: transform 0.1s ease-out;
          z-index: 1;
        }
          </style>
      </head>
      <body>
      <div id="mouse-circle"></div>
      <nav>
                      <a href="../main/main.html">Travler</a>
                      <ul>
                      <li class="nav_li"><a class="menu" href="../메뉴/menu.html">
                      <span></span>
                      <span></span>
                      <span></span>
                      </a>
                      </li>
                      </ul>
                      </nav>

                      <div id="left-background">
                      ${body}
                      </div>
                      <div id="center-background">
                      <div id="image-gallery" style=" margin-top: 50px">
                      <img id="img1" src="../lib_login/diary/img/경기도.jpg"  alt="Image 2" onclick="selectImage('Gyeonggi')">
                      <img id="img2" src="../lib_login/diary/img/강원도.jpg" width="200px" alt="Image 1" onclick="selectImage('Gangwon')"><br>
          
                      <img id="img3" src="../lib_login/diary/img/충청남도.jpg" alt="Image 7" onclick="selectImage('South Cungcheong')">
                      <img id="img4" src="../lib_login/diary/img/충청북도.jpg" alt="Image 8" onclick="selectImage('North Cungcheong')">
                      <img id="img5" src="../lib_login/diary/img/경상북도.jpg" alt="Image 4" onclick="selectImage('North Gyeongsang')"><br>
          
                      <img id="img6" src="../lib_login/diary/img/전라북도.jpg" alt="Image 6" onclick="selectImage('North Jeolla')">
                      <img id="img7" src="../lib_login/diary/img/전라남도.jpg" alt="Image 5" onclick="selectImage('South Jeolla')">
                      <img id="img8" src="../lib_login/diary/img/경상남도.jpg" alt="Image 3" onclick="selectImage('South Gyeongsang')"><br>
          
                      <img id="img9" src="../lib_login/diary/img/제주도.jpg" style="margin-top: 20px;" alt="Image 9" onclick="selectImage('Jeju')">
                      
                    </div>
                    </div>

                  <div id="right-background">
                  <section>
                      <button id="region">
                          <ul class="region-nav">
                              <li class="region-item"><a id="region-link" href="/diary/map" style="color: #17eeee;">> Write a diary</a></li>
                              <li class="region-item"><a id="region-link" href="/diary/diarylist">> Diary box</a></li>
                          </ul>
                      </button>
                  </section>
                  </div>
                  
      
          
      
          <script>
          function selectImage(filename) {
              // Update the location field with the selected filename
              document.getElementById('location').value = filename;
              showDiaryForm(); // Call your existing function to show the diary form
          }
      
          function showDiaryForm() {
              var diaryForm = document.getElementById('diary-form');
              diaryForm.style.display = 'block';
          }
          var mouseCircle = document.getElementById('mouse-circle');
          

          document.addEventListener('mousemove', function (e) {
            // Get the mouse coordinates relative to the document
            var mouseX = e.pageX;
            var mouseY = e.pageY;
          
            // Get the position of the center-background element
            var centerBackground = document.getElementById('left-background');
            var centerBackgroundRect = centerBackground.getBoundingClientRect();
          
            // Calculate the position for the center of the circle within center-background
            var circleX = mouseX - centerBackgroundRect.left - centerBackground.clientLeft - mouseCircle.clientWidth / 2;
            var circleY = mouseY - centerBackgroundRect.top - centerBackground.clientTop - mouseCircle.clientHeight / 2;
          
            // Update the position of the circle
            mouseCircle.style.left = circleX + 'px';
            mouseCircle.style.top = circleY + 'px';

            
          });
          </script>
      </body>
      </html>
   `;
    },

    list:function(results){
      var list='';
      var i=0;

      while(i<results.length){
        list = list + `

        `;
        i=i+1;
      }
      return list;
    }

    
}
