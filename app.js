const express = require('express')

const app = express()

const BBDD_photos = require('./models/BBDD-photos');

const ColorThief = require('colorthief');

const path = require('path');


app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

app.get('/', function (req, res) {
    const findAllPhotos = BBDD_photos.findAll();
    console.log('fotos que enviem')
    console.log(findAllPhotos)
    res.render('pages/index', {
        photos: findAllPhotos,
        deletePhotos : BBDD_photos.deletePhotos,
        modifyPhotos : BBDD_photos.modifyPhotos
    });
});

app.get("/add-photo", (req, res) => {
    res.render('pages/add-photo', { edit:false, error: false, message: null });
})

app.post('/add-photo', function (req, res) {
    const title = req.body.title;
    const url = req.body.url;
    const date = req.body.data;

    ColorThief.getColor(url)
        .then(color => { 
            BBDD_photos.addPhoto(title, url, date, color);
            console.log("La foto s'ha afegit correctament")
            console.log(color)
            res.redirect("/")
        })
        .catch(err => { 
            res.render('pages/add-photo', { edit:false, error: true, message: err })
            console.log("Hi ha hagut un error: " + err)
            console.log(err) })
})

app.get('/deletePhoto/:id',function (req, res){
    const photoId = req.params.id
    BBDD_photos.deletePhotos(photoId)
    console.log(photoId);
    res.redirect('/');
})

app.get('/modifyPhoto/:id',function (req, res){
    const photoId = req.params.id
    const modifiedPhoto = BBDD_photos.modifyPhotos(photoId)
    console.log(photoId);
    res.render('pages/add-photo', {edit:true, error:false, message:null, photo:modifiedPhoto})
})

app.listen(3000)