var express = require('express');
var router = express.Router();

var template = require('./template.js');
var db = require('./db');

// 로그인 화면
router.get('/login', function (request, response) {
    var title = 'login';
    var html = template.HTML(title,`
            <h2>Login</h2>
            <form action="/auth/login_process" method="post">
            <p><input class="login" type="text" name="username" placeholder="id"></p>
            <p><input class="login" type="password" name="pwd" placeholder="password"></p>
            <p><input class="btn" type="submit" value="Login"></p>
            </form>            
            <p>Don't have account?  <a href="/auth/register">Signin</a></p> 
        `, '');
    response.send(html);
});

// 로그인 프로세스
router.post('/login_process', function (request, response) {
    var username = request.body.username;
    var password = request.body.pwd;
    if (username && password) {             // id와 pw가 입력되었는지 확인
        
        db.query('SELECT * FROM usertable WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
            if (error) throw error;
            if (results.length > 0) {       // db에서의 반환값이 있으면 로그인 성공
                request.session.is_logined = true;      // 세션 정보 갱신
                request.session.nickname = username;
                request.session.save(function () {
                    response.redirect(`/`);
                });
            } else {              
                response.send(`<script type="text/javascript">alert("Login information does not match"); 
                document.location.href="/auth/login";</script>`);    
            }            
        });

    } else {
        response.send(`<script type="text/javascript">alert("Please enter your ID and password"); 
        document.location.href="/auth/login";</script>`);    
    }
});

// 로그아웃
router.get('/logout', function (request, response) {
    request.session.destroy(function (err) {
        response.redirect('/');
    });
});


// 회원가입 화면
router.get('/register', function(request, response) {
    var title = '회원가입';    
    var html = template.HTML(title, `
    <h2>Signin</h2>
    <form action="/auth/register_process" method="post">
    <p><input class="login" type="text" name="username" placeholder="id"></p>
    <p><input class="login" type="password" name="pwd" placeholder="password"></p>    
    <p><input class="login" type="password" name="pwd2" placeholder="password again"></p>
    <p><input class="btn" type="submit" value="submit"></p>
    </form>            
    <p><a href="/auth/login">Back to login</a></p>
    `, '');
    response.send(html);
});
 
// 회원가입 프로세스
router.post('/register_process', function(request, response) {    
    var username = request.body.username;
    var password = request.body.pwd;    
    var password2 = request.body.pwd2;

    if (username && password && password2) {
        
        db.query('SELECT * FROM usertable WHERE username = ?', [username], function(error, results, fields) { // DB에 같은 이름의 회원아이디가 있는지 확인
            if (error) throw error;
            if (results.length <= 0 && password == password2) {     // DB에 같은 이름의 회원아이디가 없고, 비밀번호가 올바르게 입력된 경우 
                db.query('INSERT INTO usertable (username, password) VALUES(?,?)', [username, password], function (error, data) {
                    if (error) throw error2;
                    response.send(`<script type="text/javascript">alert("Complte signin");
                    document.location.href="/";</script>`);
                });
            } else if (password != password2) {                     // 비밀번호가 올바르게 입력되지 않은 경우
                response.send(`<script type="text/javascript">alert("The entered passwords are different."); 
                document.location.href="/auth/register";</script>`);    
            }
            else {                                                  // DB에 같은 이름의 회원아이디가 있는 경우
                response.send(`<script type="text/javascript">alert("The ID that already exists."); 
                document.location.href="/auth/register";</script>`);    
            }            
        });

    } else {        // 입력되지 않은 정보가 있는 경우
        response.send(`<script type="text/javascript">alert("There is information that has not been entered."); 
        document.location.href="/auth/register";</script>`);
    }
});


module.exports = router;