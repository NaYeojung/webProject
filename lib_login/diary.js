var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')

var template = require('./diary/style.js');
var template2 = require('./diary/style2.js');
var db = require('./db');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/map', function (request, response) {
    var title = 'diary';
    var username = request.session.nickname;
    
    db.query('SELECT * FROM diarytable WHERE username = ?', [username], function(error, results) {
       
            if (error) {throw error;}
            var list = template.list(results);
            var html = template.HTML(title, list, '', `
            <form action="/diary/diary_process" method="post">
            <div id="diary-form">
            <label for="location">Location</label>
            <p><input type="text" name="location" id="location" readonly></p>

            <label for="title">Title</label>
            <p><input type="text" name="title" id="title"></p>

            <label for="date">Date</label>
            <p><input type="text" name="date" id="date"></p>

            <label for="memo">Memo</label>
            <p><textarea type="text" id="memo" name="memo" style="height: 200px;" wrap="hard"></textarea></p>

            <input id="save-btn" type="submit" value="save"></input>
            </div>
            </form>
            `);
            response.writeHead(200);
            response.end(html);
            });

});



router.post('/diary_process', function(request, response) { 
    var location = request.body.location;
    var title = request.body.title;
    var memo = request.body.memo;
    var date = request.body.date;

    if (location && title && memo && date) {

        var username = request.session.nickname;
        db.query('INSERT INTO diarytable (username, location, title, memo, date) VALUES(?,?,?,?,?)', [username, location, title, memo, date], function(error, data){

            if (error) throw error;
            response.send(`<script type="text/javascript">alert("Save it");
            document.location.href="/diary/map";</script>`);

        });

    } 
    else {        // 입력되지 않은 정보가 있는 경우
        response.send(`<script type="text/javascript">alert("Please write your details"); 
        document.location.href="/diary/map";</script>`);
    }
});

router.get('/diarylist', function (request, response) {
    var title = 'diary';
    var username = request.session.nickname;
    
    db.query('SELECT * FROM diarytable WHERE username = ?', [username], function(error, results) {
       
            if (error) {throw error;}
            var list = template2.list(results);
            var html = template2.HTML(title, list,`
                
                <div class="wrapper">
                <header>Travel Diary</header>    
                
                <div>`,
                
                `</div>
                </div>
                </div>
                
            `, '');
            response.writeHead(200);
            response.end(html);
            });

});
router.get('/diarylist/:location', function (request, response) {
    var title = 'diary';
    var username = request.session.nickname;
    var location = request.params.location;
  
    db.query('SELECT * FROM diarytable WHERE username = ? AND location LIKE ?', [username, location + '%'], function (error, results) {
        if (error) {
            throw error;
        }

        var list = template2.list(results);
        var html = template2.HTML(title, list, `

            <div class="wrapper">
                <header>Travel Diary</header>
                <div>
        `, `
                </div>
            </div>
        `, '');

        response.writeHead(200);
        response.end(html);
    });
});

router.post('/delete_diary', function(request, response) {
    var username = request.session.nickname;
    var entryId = request.body.entryId;
    
    db.query('DELETE FROM diarytable WHERE seq = ? AND username = ?', [entryId, username], function(error, data) {
        if (error) {
            console.error('Error deleting diary entry:', error);
            throw error;
        }
        response.redirect('/diary/diarylist');
    });
});

module.exports = router;