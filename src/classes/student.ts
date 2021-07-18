import { Course } from "./course";
import { learningPath } from "./learningPath";
import { roleStundet } from "./roles";
import { Comment } from "./comment";


export interface studentInterface{
    name: string,
    email: string,
    username: string,
    socialMedia: socialInterface,
    approvedCourses?: Course[],
    learningPaths?: learningPath[]
}

interface socialInterface{
    twitter?: string,
    instagram?: string,
    facebook?: string,
}

export abstract class Student {
    protected _name: string;
    protected _email: string;
    protected _username: string;
    protected _social: socialInterface;
    protected _approvedCorses: Course[] = undefined;
    protected _learningPaths: learningPath[] = undefined;

    constructor(student: studentInterface){
        this._name = student.name;
        this._email = student.email;
        this._username = student.username;
        this._social = {
            twitter: student.socialMedia.twitter,
            instagram: student.socialMedia.instagram,
            facebook: student.socialMedia.facebook
        }
        this._approvedCorses = student.approvedCourses;
        this._learningPaths = student.learningPaths;
    }
    
    publicarComentario(commentContent: string){
        const comment = new Comment({
            autor: this._name,
            autorRole: roleStundet.student,
            contenido: commentContent,
            fecha: '2020-01'

        });

        comment.publicar();
    }

    
}

