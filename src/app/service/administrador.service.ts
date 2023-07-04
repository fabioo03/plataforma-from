import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Administrador } from '../enties/empleado';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  // url lista de administradores del backend
  private baseUrl = 'http://localhost:8080/administrador/consultar';

  constructor(private httpClient : HttpClient) { }

  // obtener los administradores 
obtenerListaAdministradores():Observable<Administrador[]>{
  return this.httpClient.get<Administrador[]>(` ${this.baseUrl}`) ;
}

}

