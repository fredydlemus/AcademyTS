interface student{
    name: string,
    email: string,
    username: string,
    socialMedia: social,
    approvedCourses?: string[],
    learningPaths?: string[]
}

interface social{
    twitter?: string,
    instagram?: string,
    facebook?: string,
}

export abstract class Student {
    protected _name: string;
    protected _email: string;
    protected _username: string;
    protected _social: social;
    protected _approvedCorses: string[] = undefined;
    protected _learningPaths: string[] = undefined;

    constructor(student: student){
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
    
}

