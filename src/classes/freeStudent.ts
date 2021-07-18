import { Course } from "./course";
import {Student, studentInterface } from "./student";

export class freeStudent extends Student{
    constructor(props: studentInterface){
        super(props);
    }

    approvedCourse(newCourse: Course){
        if(newCourse.isFree){
            this._approvedCorses.push(newCourse);
        }else{
            console.warn(`Lo sentimos, solo puedes tomar cursos abiertos`);
        }
    }
}

