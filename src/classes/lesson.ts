interface lessonInterface{
    name: string,
    videoID: string
    
}


 export class Lesson{
    private _name:string;
    private _videoID: string;

    constructor(lesson: lessonInterface){
        this._name = lesson.name;
        this._videoID = lesson.videoID;
    }
}
