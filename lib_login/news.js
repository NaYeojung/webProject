var express = require('express');
var router = express.Router();

var template = require('./news/style.js');
var template2 = require('./news/style2.js');
var db = require('./db');


router.get('/allnews', function (request, response) {
    var title = 'all news';
    var username = 'duwjd';
    
    db.query('SELECT * FROM newstable WHERE username = ?', [username], function(error, results) {
       
            if (error) {throw error;}
            var list = template.list(results);
            var html = template.HTML(title, list, '', `
            <form action="/news/mynews_process" method="post">
            <div>
            <p><input class="form-control" type="text" name="contents" placeholder="Enter search term..." /></p>
            <p><input class="btn btn-primary" type="submit" id="button-search" value="Go"></input></p>
            </div>
            </form>
            `);
            response.writeHead(200);
            response.end(html);
            });
});

router.get('/selectnews', function (request, response) {
    var title = 'select news';
    var username = 'duwjd';
    db.query('SELECT * FROM selectnewstable WHERE username = ?', [username], function(error, results) {
       
            if (error) {throw error;}
            var list = template2.list(results);
            var html = template2.HTML(title, list, '', `
            <form action="/news/mynews_process" method="post">
            <p><input class="form-control" type="text" name="contents" placeholder="Enter search term..." /></p>
            <p><input class="btn btn-primary" type="submit" id="button-search" value="Go"></input></p>
            </form>
            `);
            response.writeHead(200);
            response.end(html);
    });
});

router.post('/mynews_process', function(request, response) { 
    var contents = request.body.contents;

    if (contents) {

        
        db.query('SELECT * FROM newstable WHERE title like ? or contents like ? or location like ?', ['%' + contents + '%', '%' + contents + '%', '%' + contents + '%'], function(error, results, fields) { 
            if (error) throw error;
            
            if (results.length > 0) {     
                db.query('DELETE FROM selectnewstable', function(error, result) {
                    if (error) {
                        return db.rollback(function() {
                            throw error;
                        });
                    }
                    db.query('INSERT INTO selectnewstable (username, title, contents, location, img, url) SELECT username, title, contents, location, img, url FROM newstable WHERE title LIKE ? or contents like ? or location like ?', ['%' + contents + '%', '%' + contents + '%', '%' + contents + '%'], function (error, data) {
                        if (error) throw error;
                        
                        response.send(`<script type="text/javascript">
                        document.location.href="/news/selectnews";</script>`);
                    });
                })
            }   
            else {
                response.send(`<script type="text/javascript">alert("No results were found")
                        document.location.href="/news/allnews";</script>`);
            }       
        });

    } 
    else {        // 입력되지 않은 정보가 있는 경우
        response.send(`<script type="text/javascript"> 
        document.location.href="/news/allnews";</script>`);
    }
});


module.exports = router;