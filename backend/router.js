const router = require('express').Router();
const {Users} = require('./dbtable');

// Create a new user
router.post('/create', async (req, res) => {
  try {
    const user = await Users.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all users
router.get('/view', async (req, res) => {
  try {
    const user = await Users.findAll({});
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get a single user by ID
router.get('/view/:id', async (req, res) => {
  try {
    const user = await Users.findByPk(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'user not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update a user by ID
router.put('/update/:id', async (req, res) => {
  try {
    const [updated] = await Users.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updateduser = await Users.findByPk(req.params.id);
      res.json(updateduser);
    } else {
      res.status(404).json({ error: 'user not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a user by ID
router.delete('/delete/:id', async (req, res) => {
  try {
    const deleted = await Users.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.json({ message: 'user deleted' });
    } else {
      res.status(404).json({ error: 'user not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
