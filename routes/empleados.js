const router = require('express').Router();
const empleado = require('../models/empleado');




//consigo toodo
router.get('/', async (req, res) => {
    try {
        const allEmpleados = await empleado.getAll();
        res.json(allEmpleados);
    }
    catch (err) { res.send(err) }
})

router.get('/:pId', (req, res) => {
    empleado.getById(req.params.pId)
        .then(result => {
            res.json(result)
        }).catch(err => { res.send(err) })
})



router.post('/create',
    async (req, res) => {
        console.log(req.body)
        res.json(req.body)

        if (!errores.isEmpty()) {
            return res.json(errores.array());
        }
        const result = await empleado.create(req.body);
        if (result['affectedRows'] === 1) {
            const empleado = await empleado.getById(result['insertId']);
            res.json({ success: 'se ha insertado un empleado', cliente: empleado })
        } else {
            res.json({ error: 'ha ocurrido un error al crear un empleao' })
        }
    });

router.delete('/delete/:pId', (req, res) => {

    empleado.deleteById(req.params.pId)
        .then(result => {
            console.log(result);
            res.redirect('/');
        })
        .catch(err => {
            res.send(err);
        });
});

router.put('/update', async (req, res) => {

    const result = await empleado.updateById(req.body.id, req.body);
    console.log(req.body.id);

    if (result['affectedRows'] === 1) {
        res.json({ success: 'se ha actualizado el empleado' });
    } else {
        res.json({ error: 'No se ha actualizado' })
    }


});




module.exports = router;