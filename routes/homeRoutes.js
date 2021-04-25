// Include dependencies
// path npm package allows directory paths to be shortened
const path = require('path');
const router = require('express').Router();

// Retrieves the index.html file and displays it
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Retrieves the exercise.html file and displays it
router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
});

// Retrieves the stats.html file and displays it
router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'));
});

module.exports = router;