const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  const queryText = `SELECT "name" FROM "genres";`;
  pool.query(queryText)
    .then((dbRes) =>{
      res.send(dbRes.rows);
    }).catch((dbErr) =>{
      console.log('Error in genres GET:', dbErr);
      res.sendStatus(500);
    });
});

module.exports = router;