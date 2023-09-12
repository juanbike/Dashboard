import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { enviroment } from "src/enviroments/enviroment.dev";
import { of } from "rxjs"

export class ApiClass{
    public url = enviroment.uri
    public IsProduction = enviroment.production;

    constructor( protected http: HttpClient){ }


    //1- Manejador de errorres
    error(error: HttpErrorResponse){
        let errorMessage = '';
        if(error.error instanceof ErrorEvent){
            errorMessage = error.error.message
        }else{
            errorMessage = `Error Code: $(error.status)\nMessage:_$(error.message)`;
        }
        return of({
            error:true, msg: errorMessage, data: null
        })
    }
    





}