import { Course } from "./course";
import {Student, studentInterface } from "./student";

export class expertStudent extends Student{
    constructor(props: studentInterface){
        super(props);
    }

    approvedCourse(newCourse: Course){
        this._approvedCorses.push(newCourse);
    }

}