import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipo } from '../enties/empleado';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {


  // url lista de administradores del backend
  private baseUrl = 'http://localhost:8080/equipo/consultar';

  constructor(private httpClient : HttpClient) { }

  // obtener los administradores 
obtenerListaEquipos():Observable<Equipo[]>{
  return this.httpClient.get<Equipo[]>(` ${this.baseUrl}`) ;
}

}
