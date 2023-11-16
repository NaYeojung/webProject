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
            height: 100vh;
            overflow: hidden;
        }

        #mapid {
            height: 100vh;
        }

        #diary-form {
            display: none;
            position: absolute;
            top: 50px;
            left: 180px;
            height: 85%;
            width: 30%;
            background-color: rgb(236, 236, 236);
            padding: 15px;
            border-radius: 3px;
            box-shadow: 0 10 10px rgb(96, 96, 96);
            z-index: 1000;
        }

        #diary-form label {
            display: block;
        }

        #diary-form input,
        #diary-form textarea {
            width: 100%;
            margin-bottom: 5px;
            border: none;
            height: 30px;
            border-radius: 5px;
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
        }

        #save-btn:hover {
            background-color: #0aa7a7;
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
              
  #region {
    position: fixed;
    top: 20%;
    right: 100px;
  
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
</head>
<body>
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
    <div id="mapid"></div>
    <section>
                <button id="region">
                    <ul class="region-nav">
                        <li class="region-item"><a id="region-link" href="/diary/map" style="color: #17eeee;">> 일기 쓰러 가기</a></li>
                        <li class="region-item"><a id="region-link" href="/diary/diarylist">> 일기 보관함</a></li>
                    </ul>
                </button>
            </section>

    ${body}

    <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
    <script>
        var southWest = L.latLng(33, 124),
            northEast = L.latLng(39, 132),
            bounds = L.latLngBounds(southWest, northEast);

        var mymap = L.map('mapid', {
            maxBounds: bounds,
            maxBoundsViscosity: 0.9
        }).setView([37.5665, 126.9780], 7);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(mymap);

        mymap.on('click', function(e) {
            var latlng = e.latlng;
            document.getElementById('location').value = latlng.lat.toFixed(6) + ', ' + latlng.lng.toFixed(6);
            showDiaryForm();
        });

        function showDiaryForm() {
            document.getElementById('diary-form').style.display = 'block';
        }

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
