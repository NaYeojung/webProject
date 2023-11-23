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