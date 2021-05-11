
const BBDD_photos = []

const uuid = require('uuid')

exports.findAll = () => {
    return BBDD_photos.sort((a, b) => b.date - a.date);
}

exports.addPhoto = (title, url, date, color, id=uuid.v1()) => {
    const foundPhoto = BBDD_photos.findIndex(photo => photo.url === url);

    if (foundPhoto != -1) {
        throw new Error('La imatge ja existeix a la base de dades');
    }

    const newPhoto =
    {
        id:id,
        title: title,
        url: url,
        color: color,
        date: date
    };

    BBDD_photos.push(newPhoto);
    // BBDD_photos.sort((a, b) => b.date - a.date);
}

exports.deletePhotos = (id) => {
    const index = BBDD_photos.findIndex(photo => photo.id == id);
    BBDD_photos.splice(index, 1);
    console.log(index);
    
}
exports.modifyPhotos = (id) =>{
    const index = BBDD_photos.findIndex(photo => photo.id == id);
    const photo = BBDD_photos[index];
    console.log(photo);
    return photo;
}
