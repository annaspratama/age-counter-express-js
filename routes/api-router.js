import "express-group-routes"
import AgeController from "../controller/AgeController.js";
import Age from "../service/age-service.js"

const router = (app, express) => {
    const router = express.Router()
    let ageController = new AgeController()
  
    // app.use(express.urlencoded({ extended: false }))
    app.use(express.json())

    // routes list
    router.route('/count-age').post(ageController.counter)

    app.group('/api', (route) => {
        route.use(router)
    })
  }
  
  export default router