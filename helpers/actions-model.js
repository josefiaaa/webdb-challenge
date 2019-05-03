const db = require('../data/dbConfig');

module.exports = {
    find,
    findById,
    add
}

function find() {
    return db('actions')
}

function findById(id) {
    return db('actions')
      .where({ id })
      .first();
}

function add(action) {
    return db('actions')
      .insert(action, 'id')
      .then(([id]) => {
        return findById(id);
    });
}