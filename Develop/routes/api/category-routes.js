const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
//.findAll
//.findOne
//.create
//.update
//.destroy

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  // Category.findAll({
  //   include: [Product]
  // })
  //   .then((model) => res.json(model))
  //   .catch(err => res.json(err))
  try {
    const categories = await Category.findAll({
      include: [Product],
    });
    if (!categories) {
      console.log("no");
      return;
    }
    console.log(categories);
    res.json(categories);
  } catch (err) {
    res.json(err);
  }
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id
    }
  })
    .then((model) => res.json(model))
    .catch(err => res.json(err));
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
  .then((model) => res.json(model))
  .catch(err => res.json(err));
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;