const express = require('express');

const pool = require('../modules/pool');
const router = express.Router();




/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "events";`;

  pool.query(queryText)
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
      console.error('Error completing GET Events query', err);
      res.sendStatus(500);
    });
});



router.post('/', (req, res) => {
  console.log('req.body is:', req.body);

  const queryText = `
  INSERT INTO "events" ("date", "user_id", "title", "description", "file_url", "highlight")
    VALUES ($1, $2, $3, $4, $5, $6);`;

  pool.query(queryText, [req.body.date, req.body.user_id, req.body.title, req.body.description, req.body.file_url, req.body.highlight])
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
      console.error('Error completing POST ITEM query', err);
      res.sendStatus(500);
    });
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
  // DELETE route code here
  const queryText = `DELETE FROM "item" WHERE id=$1;`;

  pool.query(queryText, [req.body.id])
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
      console.error('Error completing DELETE ITEM query', err);
      res.sendStatus(500);
    });
});

/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
  // PUT route code here
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
  // GET /count route code here
});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {
  // GET item route code here
});

module.exports = router;
