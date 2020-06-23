const router = require('express').Router();

const departamento = require('../models/departamento');
const { check, validationResult } = require('express-validator');


//Aqui recupero todos los departamentos.
router.get('/', async (req, res) => {
    try {
        const allDepts = await departamento.getAll();
        res.json(allDepts)
    } catch (err) { res.send(err) }
})


//borro 
router.delete('/delete/:pId', (req, res) => {

    departamento.deleteDById(req.params.pId)
        .then(result => {
            console.log(req.params.pId);
            res.redirect('/');
        })
        .catch(err => {
            res.send(err);
        });
});



router.post('/create',
    async (req, res) => {
        console.log(req.body)
        res.json(req.body)

        if (!errores.isEmpty()) {
            return res.json(errores.array());
        }
        const result = await departamento.create(req.body);
        if (result['affectedRows'] === 1) {
            constdepartamento = awaitdepartamento.getById(result['insertId']);
            res.json({ success: 'se ha insertado un departamento', departamento: departamento })
        } else {
            res.json({ error: 'ha ocurrido un error al crear un departamento' })
        }
    });



//Actualizo
router.put('/update', async (req, res) => {

    const result = await departamento.updateById(req.body.id, req.body);
    console.log(req.body.id);

    if (result['affectedRows'] === 1) {
        res.json({ success: 'se ha actualizado el departamento' });
    } else {
        res.json({ error: 'No se ha actualizado' })
    }


});




module.exports = router;