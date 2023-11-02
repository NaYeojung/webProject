var express = require('express');
var router = express.Router();

var template = require('./bucket/style.js');
var db = require('./db');


router.get('/allmylist', function (request, response) {
    var title = 'all bucketlist';
    var username = request.session.nickname;
    
    db.query('SELECT contents FROM buckettable WHERE username = ?', [username], function(error, results2) {
        db.query('SELECT contents FROM cbuckettable WHERE username = ?', [username], function(error, results3){
            if (error) {throw error;}
            var list2 = template.list2(results3);
            var list = template.list(results2);
            var html = template.HTML(title, list,`
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
                <div class="wrapper">
                <header>Travel Bucketlist</header>    
                <form action="/list/mylist_process" method="post">     
                <div class="inputField">
                <p><input type="text" id="addValue" name="contents" placeholder="your bucketlist"></p>
                <p><input class="btn" type="submit" id = "btn" onclick="addTodo()" value="plus       "><i class="xi-plus xi-2x"></i></p>
                </div>
                </form>
                <div>`,
                
                `</div>
                </div>
                </div>
                
            `, '', list2);
            
            response.writeHead(200);
            response.end(html);
            });
        });
    });


// 리스트 추가 프로세스
router.post('/mylist_process', function(request, response) {    
    var username = request.session.nickname;
    var contents = request.body.contents;

    if (contents) {
        
        db.query('SELECT * FROM usertable WHERE username = ?', [username], function(error, results, fields) { // DB에 같은 이름의 회원아이디가 있는지 확인
            if (error) throw error;
            
            if (results.length > 0) {     // DB에 같은 이름의 회원아이디가 있으면 
                db.query('INSERT INTO buckettable (username, contents) VALUES(?,?)', [username, contents], function (error, data) {
                    if (error) throw error;
                    
                    response.send(`<script type="text/javascript">
                    document.location.href="/list/allmylist";</script>`);
                });
            }          
        });

    } 
    else {        // 입력되지 않은 정보가 있는 경우
        response.send(`<script type="text/javascript">alert("내용을 입력해주세요"); 
        document.location.href="/list/allmylist";</script>`);
    }
});

router.post('/dellist_process', function(request, response) {    
    var deleteBtn = request.body.deleteBtn;
    var username = request.session.nickname;
    db.query('INSERT INTO cbuckettable (username, contents) VALUES(?,?)', [username, deleteBtn], function(error, data2){

        db.query('DELETE FROM buckettable WHERE contents=?', [deleteBtn], function (error, data) {
                        if (error) throw error;
                        response.send(`<script type="text/javascript">
                        document.location.href="/list/allmylist";</script>`);
                    });
    });

});

router.post('/dellist_process2', function(request, response) {    
    var comleteBtn = request.body.comleteBtn;
    var username = request.session.nickname;
    db.query('DELETE FROM cbuckettable WHERE contents=?', [comleteBtn], function (error, data) {
                        if (error) throw error;
                        response.send(`<script type="text/javascript">
                        document.location.href="/list/allmylist";</script>`);
                    });
    });

module.exports = router;