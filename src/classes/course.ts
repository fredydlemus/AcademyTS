import { Lesson } from "./lesson";

interface courseInterface{
    name: string,
    lesson: Lesson[],
    isFree?: boolean,
    lang?: string
}

export class Course{

    private _name: string;
    private _lesson: Lesson[];
    private _isFree: boolean = false;
    private _lang: string = "spanish";

    constructor(course: courseInterface){
        this._name = course.name;
        this._lesson = course.lesson;
        this._isFree = course.isFree || false;
        this._lang = course.lang || 'spanish';
    }
}