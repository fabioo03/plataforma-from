import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Solicitud } from '../enties/solicitud';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  private baseUrl = 'http://localhost:8080/solicitud/consultarFecha';
  private baseUrlc = 'http://localhost:8080/solicitud/crear';
  
  constructor(private httpClient : HttpClient) { }

// trae las solicitudes por fecha de un empleado  
 obtenerListaSolicitudes(id: number): Observable<Solicitud[]> {
  const url = `${this.baseUrl}${id}`; 
  return this.httpClient.get<Solicitud[]>(url);
 }
 // registra Solicitud 
  registrarSolicitud(solicitud: Solicitud): Observable<any> {
    return this.httpClient.post(`${this.baseUrlc}`, solicitud);
  }

}
