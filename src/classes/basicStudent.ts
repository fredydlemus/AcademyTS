import { Course } from "./course";
import {Student, studentInterface } from "./student";

export class basicStudent extends Student{
    constructor(props: studentInterface){
        super(props);
    }

    approvedCourse(newCourse: Course){
        if(newCourse.lang !== "english"){
            this._approvedCorses.push(newCourse);
        }else{
            console.warn(`Lo sentimos, no puedes tomar cursos en ingles`);
        }
    }
}