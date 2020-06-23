


const getAll = () => {

    return new Promise((resolve, reject) => {

        db.query('select * from departamento', (err, rows) => {

            if (err) reject(err);
            resolve(rows);
        });
    })
}



const create = ({ nombre_departamento, ciudad }) => {
    return new Promise((resolve, reject) => {

        db.query('insert into departamento(nombre, ciudad) values (?, ?)',
            [nombre_departamento, ciudad],
            (err, result) => {
                if (err) reject(err);
                resolve(result);
            });
    })
};



const deleteDById = (pId) => {

    return new Promise((resolve, reject) => {

        db.query('delete from departamento where id = ?', [pId], (err, result) => {
            if (err) reject(err);

            resolve(result);
        });
    });
};




const updateById = (pId, { nombre_departamento: nombre, ciudad }) => {

    return new Promise((resolve, reject) => {
        db.query(
            'update departamento set nombre = ?, ciudad = ? where id = ?',
            [nombre, ciudad, pId],
            (err, result) => {
                if (err) reject(err);
                resolve(result);
                console.log(result)
            });
    });
}


module.exports = {
    getAll, create, deleteDById: deleteDById, updateById
}