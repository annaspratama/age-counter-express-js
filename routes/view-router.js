const router = (app, express) => {
  const router = express.Router()

  app.use(express.urlencoded({ extended: false }))

  /* GET home page. */
  router.get('/', function(req, res, next) {
    res.render('index', { title: 'Age Counter | Node Express JS' })
  })

  app.use(router)
}

export default router