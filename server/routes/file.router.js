const express = require('express');
const fileUpload = require('express-fileupload');
const router = express.Router();

router.use(fileUpload());

// MOVING FILE FROM ORIGINAL SOURCE TO "uploads" project folder
router.post('/', (req, res) => {
    if (req.files === null) {
        return res.status(400).json({ msg: 'no file uploaded' });
    }

    const file = req.files.file; //.file is tacos

    file.mv(`/Users/tylerjorenby/PrimeAcademy/solo-project/public/uploads/${file.name}`, err => {
        if (err) {
            console.error(err);
            return res.status(500).send(err)
        }

        res.json({ filePath: `/uploads/${file.name}` });
    });
});

module.exports = router;