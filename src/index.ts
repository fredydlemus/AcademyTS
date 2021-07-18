import { Course } from "./classes/course";
import { freeStudent } from "./classes/freeStudent";
import { learningPath } from "./classes/learningPath";
import { Lesson } from "./classes/lesson";
import './styles/index.scss';

const lesson1 = new Lesson({
    name: 'conceptos basicos html',
    videoID: 'httttps'
});


const CursoDeProgramacion = new Course({
    name: 'CursoDeProgramacion',
    lesson: [lesson1]
});

const CursoDeHTML = new Course({
    name: 'CursoDeHTML',
    lesson: [lesson1],
    isFree: true,
    lang: 'english'
});


const newLearningPath = new learningPath({
    name: 'Frontend Developer'
});

const newLearningPath2 = new learningPath({
    name: 'Programming',
    courses: [CursoDeProgramacion]
});


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

const newStudent2 = new freeStudent({
    name: 'Daniel',
    email: 'danielflemus@gmail.com',
    username: 'danielflemus',
    socialMedia: {
        twitter: 'danielflemus',
        instagram: 'danielflemus',
        facebook: 'danielflemus'
    },
    approvedCourses: [CursoDeProgramacion],
    learningPaths: [newLearningPath]

});



console.log(newStudent);
console.log(newStudent2);
console.log(CursoDeProgramacion);
console.log(CursoDeHTML);
console.log(newLearningPath);
console.log(newLearningPath2);