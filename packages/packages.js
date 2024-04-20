export default (app, express, __dirname) => {
    // load bootstrap & vue
    app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'))
    app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'))
    app.use('/vue', express.static(__dirname + '/node_modules/vue/dist'))
    app.use('/axios', express.static(__dirname + '/node_modules/axios/dist'))
}