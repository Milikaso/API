const router = require('express').Router();
const empleadosRouter = require('./empleados');
const departamentosRouter = require('./departamentos');


router.use('/empleados', empleadosRouter);
router.use('/departamentos', departamentosRouter);

module.exports = router;