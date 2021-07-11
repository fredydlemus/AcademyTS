
interface course{
    name: string,
    classes: string[],
    isFree?: boolean,
    lang?: string
}

export class Course{

    private _name: string;
    private _classes: string[];
    private _isFree: boolean = false;
    private _lang: string = "spanish";

    constructor(course: course){
        this._name = course.name;
        this._classes = course.classes;
        this._isFree = course.isFree;
        this._lang = course.lang;
    }
}