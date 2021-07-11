import { Course } from "./modules/course";
import { freeStudent } from "./modules/freeStudent";


const newStudent = new freeStudent({
    name: 'fredy',
    email: 'fredyflemus@gmail.com',
    username: 'fredyflemus',
    socialMedia: {
        twitter: 'fredyflemus',
        instagram: 'fredyflemus',
        facebook: 'fredyflemus'
    }
});

const CursoDeProgramacion = new Course({
    name: 'CursoDeProgramacion',
    classes: ['clase']
});


console.log(newStudent);
console.log(CursoDeProgramacion);