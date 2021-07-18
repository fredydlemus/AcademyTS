import { roleStundet } from "./roles";
import { Student } from "./student";

interface commentInterface{
    autor: string,
    autorRole: roleStundet,
    contenido: string,
    fecha: string
}

export class Comment{
    private _autor: string;
    private _autorRole: roleStundet;
    private _contenido: string;
    private _fecha: string;
    private _likes: number = 0;

    constructor( comment: commentInterface){
        this._autor = comment.autor;
        this._autorRole = comment.autorRole || roleStundet.student;
        this._contenido = comment.contenido;
        this._fecha = comment.fecha;

    }
    publicar(){
        console.log(this._autor + "(" + this._autorRole + ")");
        console.log(this._likes + "likes");
        console.log(this._contenido);
        console.log(this._fecha);
    }
}