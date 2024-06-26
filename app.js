
import createError from 'http-errors'
import express from "express"
import path from "path"
import cookieParser from "cookie-parser"
import logger from "morgan"
import { fileURLToPath } from "url"
import packages from "./packages/packages.js"
import viewRouter from "./routes/view-router.js"
import apiRouter from "./routes/api-router.js"

const app = express()
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(logger('dev'))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// load packages
packages(app, express, __dirname)

// view route
viewRouter(app, express)

// api route
apiRouter(app, express)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

export default app