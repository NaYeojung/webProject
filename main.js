const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser');
const FileStore = require('session-file-store')(session)

var authRouter = require('./lib_login/auth');
var authCheck = require('./lib_login/authCheck.js');
var template = require('./lib_login/template.js');
var listRouter = require('./lib_login/list.js');
var newsRouter = require('./lib_login/news.js');
var diaryRouter = require('./lib_login/diary.js');

const app = express()
const port = 8080
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
  secret: '~~~',	
  resave: false,
  saveUninitialized: true,
  store:new FileStore(),
}))

app.get('/', (req, res) => {                                      // 로그인 되어있으면 메인 페이지로 이동시킴
    res.redirect('/main');
    return false;
})

// 인증 라우터
app.use('/auth', authRouter);
app.use('/list', listRouter);
app.use('/news', newsRouter);
app.use('/diary', diaryRouter);
app.use(express.static(__dirname));

// 메인 페이지
app.get('/main', (req, res) => {
  res.sendFile(__dirname + "/main/main.html");
})

app.get('/my', (req, res) => {
  if (!authCheck.isOwner(req, res)) {  // 로그인 안되어있으면 로그인 페이지로 이동시킴
    res.redirect('/auth/login');
    return false;
  }
  var html = template.HTML('Welcome',
    `<hr>
        <h2>My page</h2>
        <button class="btn2" style="margin-bottom: 30px"><a href="/list/allmylist">Travel bucket list</a></button>
        <button class="btn2" style="margin-bottom: 70px"><a href="/diary/map">Travel diary</a></button>`,
    authCheck.statusUI(req, res)
  );
  res.send(html);
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})