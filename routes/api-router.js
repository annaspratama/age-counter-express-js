import "express-group-routes";

const router = (app, express) => {
    const router = express.Router()
  
    // app.use(express.urlencoded({ extended: false }))
    app.use(express.json())

    router.route('/count-age')
        .get((req, res) => {
            let data = {
                msg: "Pesan data."
            }
            res.json(data).status(200)
            res.end()
        })

    app.group('/api', (route) => {
        route.use(router)
    })
  }
  
  export default router