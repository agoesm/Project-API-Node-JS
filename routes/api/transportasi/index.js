const express = require('express');
const router = express.Router();

const c = require('./transportasi.controller');
const {
    auth
} = require('../../../secret');

router.get('/', auth, c.findAll)
router.get('/:id', auth, c.findById)
router.post('/', auth, c.insert)
router.put('/:id', auth, c.updateById)
router.delete('/', auth, c.remove)
router.delete('/:id', auth, c.removeById)

module.exports = router;