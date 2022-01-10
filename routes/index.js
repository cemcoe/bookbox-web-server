const Router = require('koa-router')
const router = new Router()
const jwt = require('koa-jwt')

const { secret } = require('../config')
const { getUsersList, login, getOwnerInfo } = require('../controllers/user.js')
const { createPost, getPostList } = require('../controllers/post.js')

router.get('/', (ctx) => {
  ctx.body = '欢迎使用书盒api'
})

// 获取用户列表
router.get('/v1/users', getUsersList)

// 用户登录
router.post('/v1/login', login)

const auth = jwt({ secret })
// 获取登录用户信息
router.get('/v1/owner', auth, getOwnerInfo)

// 创建新文章
router.post('/v1/post', auth, createPost)

// 获取文章列表
router.get('/v1/posts', getPostList)

module.exports = router