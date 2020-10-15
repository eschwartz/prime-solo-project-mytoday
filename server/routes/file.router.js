const express = require('express');
const fileUpload = require('express-fileupload');
const router = express.Router();

router.use(fileUpload());

router.post('/api/events', (req, res) => {
    // we now have access to the file
    req.files //....

    // ...and other event data
    req.body.user_id


    let timestamp = Date.now();
    // File gets saved to public/uploads/${timestamp}-my-file.jpg
    let filePath = `public/uploads/${timestamp}-${file.path}`

    /*
    INSERT INTO "events" ("date", "user_id", "file_path")
    VALUES req.body.date, req.body.user_id, req.body.files[0].path
    ^ or whatever
    */

    res.send({

    })
});

// MOVING FILE FROM ORIGINAL SOURCE TO "uploads" project folder
router.post('/', (req, res) => {
    if (req.files === null) {
        return res.status(400).json({ msg: 'no file uploaded' });
    }

    const file = req.files.file; //.file is tacos
    console.log('reqFiles is:', req.files)

    file.mv(`/Users/tylerjorenby/PrimeAcademy/solo-project/public/uploads/${file.name}`, err => {
        if (err) {
            console.error(err);
            return res.status(500).send(err)
        }

        res.json({ filePath: `/uploads/${file.name}` });
    });
});

router.post('/', (req, res) => {
    if (req.files === null) {
        return res.status(400).json({ msg: 'no file uploaded' });
    }

    const file = req.files.file; //.file is tacos
    console.log('reqFiles is:', req.files)

    file.mv(`/Users/tylerjorenby/PrimeAcademy/solo-project/public/uploads/${file.name}`, err => {
        if (err) {
            console.error(err);
            return res.status(500).send(err)
        }

        res.json({ filePath: `/uploads/${file.name}` });
    });
});


module.exports = router;