module.exports = {
    HTML: function (title, list, body, authStatusUI) {
        return `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${title}</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/3.10.2/fullcalendar.min.css" />
                <style>
                    @import url(fontawesome-all.min.css);
                    @import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,700,900");

                    body {
                        background-color: rgb(236, 236, 236); 
                        font-family: "Source Sans Pro", Helvetica, sans-serif;
                    }

                    #addEventForm {
                        display: none;
                    }

                    #calendar,
                    #addEventForm {
                        position: fixed;
                        top: 15%;
                        left: 20%;
                        width: 60%;
                        background-color: rgb(255, 255, 255);
                        padding: 20px;
                        border: 1px solid #ccc;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    }

                    #addEventForm label {
                    }

                    #addEventForm input {
                        width: 250px;
                        border: none;
                        height: 27px;
                        border-radius: 5px;
                        background-color: rgb(236, 236, 236);
                        margin-right: 20px;
                        margin-left: 10px;
                        padding-left: 10px;
                    }

                    #addEventForm button {
                        padding: 5px;
                        background-color: #17eeee;
                        color: white;
                        text-align: center;
                        text-decoration: none;
                        cursor: pointer;
                        border: none;
                        border-radius: 4px;
                        height: 27px;
                        margin-top: 10px;
                        margin-bottom: 15px;
                    }

                    #addEventForm button:hover {
                        background-color: #0aa7a7;
                    }

                    #openEventFormBtn {
                        background-color: rgb(236, 236, 236);
                        color: #555555;
                        border: 1px solid #cccccc;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                        font-size: 25px;
                        padding-left: 10px;
                        padding-right: 10px;
                        position: fixed;
                        top: 18%;
                        right: 19%;
                        z-index: 1000;
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
                        white-space: nowrap;
                        font-size: 0;
                    }

                    nav ul li {
                        display: inline-block;
                        vertical-align: middle;
                        width: 100%;
                        transition: all .5s;
                        padding: 1rem;
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
                </style>
            </head>
            <body>
                <nav>
                    <a href="../../main/main.html">Travler</a>
                    <ul>
                        <li><a class="menu" href="../../메뉴/menu.html">
                                <span></span>
                                <span></span>
                                <span></span>
                            </a>
                        </li>
                    </ul>
                </nav>
                ${body}
            </body>
            </html>
        `;
    }
};