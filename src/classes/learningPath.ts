import { Course } from "./course";

interface learningPathInterface{
    name: string,
    courses?: Course[]
}

export class learningPath{

    private _name: string;
    private _courses :Course[];

    constructor(learningPath: learningPathInterface){
        this._name = learningPath.name;
        this._courses = learningPath.courses;
    }

}