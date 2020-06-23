

const getAll = () => {
    return new Promise((resolve, reject) => {
        db.query('select * from empleados', (err, rows) => {
            if (err) reject(err);

            resolve(rows);
        })
    })

}



//Crear neuevo usuario.
const create = ({ nombre, dni, sexo, fecha_nac, salario, cargo, fk_departamento }) => {
    return new Promise((resolve, reject) => {
        db.query('insert into empleados(nombre, dni, sexo, fecha_nac, salario, cargo, fK_departamento) values (?, ?, ?, ?, ?, ?, ?)',
            [nombre, dni, sexo, fecha_nac, salario, cargo, fk_departamento],
            (err, result) => {
                if (err) reject(err);
                resolve(result);
            })
    })
}
//borrar nuevo usuario

const deleteById = (pId) => {


    return new Promise((resolve, reject) => {
        db.query('delete from empleados where id = ?', [pId], (err, result) => {
            if (err) reject(err);

            resolve(result)
        });
    });
}

//conseguir por id
const getById = (pEmpleadoId) => {
    return new Promise((resolve, reject) => {
        db.query('select * from empleados where id = ?', [pEmpleadoId], (err, rows) => {
            if (err) reject(err);

            resolve(rows);
        })
    });
};

//editar
const updateById = (pId, { nombre, dni, sexo, fecha_nac, salario, cargo }) => {
    return new Promise((resolve, reject) => {
        db.query(
            'update empleados set nombre = ?, dni = ?, sexo = ?, fecha_nac = ?, salario = ?, cargo = ? where id = ?',
            [nombre, dni, sexo, fecha_nac, salario, cargo, pId],
            (err, result) => {
                if (err) reject(err);
                resolve(result);
                console.log(result)
            })
    });
}



module.exports = {
    getAll, deleteById, create, getById, updateById
}