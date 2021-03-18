const router = require('express').Router();
// import middleware
const Recipe = require('./recipes-model')

router.get('/:recipe_id', async (req, res, next) => {
  try {
    res.json({ msg: "here" })
  } catch(err) { next(err) }
});

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
    error: err.message,
    stack: err.stack,
  })
})

module.exports = router;