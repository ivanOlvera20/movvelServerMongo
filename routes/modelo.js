const { Router } = require('express');
const router = Router();

const { createMod, getMods, getMod, deleteMod, updateMod } = require('../controllers/controllers_produccion/modelo.controller')


router.route('/')
    .post(createMod)
    .get(getMods);

router.route('/:id')
    .get(getMod)
    .delete(deleteMod)
    .put(updateMod)



module.exports = router