import { Comment } from "./comment";
import { Course } from "./course";
import { roleStundet } from "./roles";
import {Student, studentInterface } from "./student";

export class Teacher extends Student{
    constructor(props: studentInterface){
        super(props);
    }

    approvedCourse(newCourse: Course){
        this._approvedCorses.push(newCourse);
    }

    publicarComentario(commentContent: string){
        const comment = new Comment({
            contenido: commentContent,
            autor: this._name,
            autorRole: roleStundet.teacher,
            fecha: '2020-01'
        });
    }
}