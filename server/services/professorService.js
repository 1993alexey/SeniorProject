import Professor from '../schemas/professor'

async function getProfessors(professor = {}) {
    return await Professor.find(professor, { __v: 0, _id: 0 })
}

async function getProfessor(professor) {
    return await Professor.findOne(professor, { __v: 0, _id: 0 })
}

function createProfessor(professor) {
    Professor.create(professor)
}

function createProfessors(professors) {
    for (let professor of professors) {
        if (professor.quality == null)
            delete professor.quality
    }

    Professor.insertMany(professors)
}

export { getProfessors, getProfessor, createProfessor, createProfessors }