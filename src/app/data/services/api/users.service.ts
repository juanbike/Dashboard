import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

//import { ApiClass } from '../../schema/api.Class.class';

//implementacion de un manejador de errroes

/*
Para implementar un manejador de errores en tu servicio en Angular, puedes utilizar el operador catchError de los observables. Aquí tienes un ejemplo de cómo hacerlo:
1- Dentro de tu servicio, importa los módulos necesarios: trowError, catchError
*/
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ICardUser } from 'src/app/shared/components/cards/icard-user.metadata';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public apiUrl = 'http://localhost:3000/users';
  public IsProduction = true;
  id: number = 0;
  constructor(private http: HttpClient) { }


// Sin manejador de errores
/*
  getUsers1(): Observable<ICardUser[]>{
    return this.http.get<ICardUser[]>(this.apiUrl);
  }
*/





//con manejador de errores
getUsers(): Observable<ICardUser[]> {
  return this.http.get<ICardUser[]>(this.apiUrl).pipe(
    catchError(this.handleError)
  );
}



getUserById(id: number): Observable<ICardUser[]>{
  return this.http.get<ICardUser[]>(this.apiUrl + 'users/' + this.id)
}

private handleError(error: HttpErrorResponse): Observable<never> {
  let errorMessage = 'Ha ocurrido un error.';

  if (error.error instanceof ErrorEvent) {
    // Error del lado del cliente
    errorMessage = `Error: ${error.error.message}`;
  } else {
    // Error del lado del servidor
    errorMessage = `Código de error: ${error.status}, mensaje: ${error.message}`;
  }

  console.error(errorMessage);
  return throwError(errorMessage);
}


/*
En este ejemplo, hemos añadido el operador catchError al final del flujo de observables en el método getUsers() del servicio. El método handleError es un método privado que maneja los errores de la solicitud HTTP. Dentro de este método, puedes personalizar la lógica para manejar los diferentes tipos de errores.

2- En tu componente, puedes utilizar el manejador de errores para mostrar mensajes de error o tomar otras acciones según tus necesidades:

*/

}
