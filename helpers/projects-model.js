const db = require('../data/dbConfig');

module.exports = {
    find,
    findById,
    add,
    getProjectActions
}

function find() {
    return db('projects')
}

function findById(id) {
    return db('projects')
      .where({ id })
      .first();
}

function add(project) {
    return db('projects')
      .insert(project, 'id')
      .then(([id]) => {
        return findById(id);
    });
}


function getProjectActions(projectId) {
    return db('actions')
        // .join('projects', 'projects.id', 'actions.project_id')
        .where('project_id', projectId)
}
