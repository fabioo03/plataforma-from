import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado, Usuario } from '../enties/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  // url lista de empleados del backend
  private baseUrl = 'http://localhost:8080/empleado/consultar';
  private baseUrlc = 'http://localhost:8080/empleado/crear';
  private baseUrla = 'http://localhost:8080/empleado/actualizar';
  private baseUrle = 'http://localhost:8080/empleado/eliminar';
  

  constructor(private httpClient : HttpClient) {  } 

  // obtener los empleados 
  obtenerListaEmpleados():Observable<Empleado[]>{
    return this.httpClient.get<Empleado[]>(` ${this.baseUrl}`) ;
  }
  // registra los empleados 
registrarEmpleado(empleado: Empleado): Observable<any> {
  return this.httpClient.post(`${this.baseUrlc}`, empleado);
}
// actualiza los empleados
  actualizarEmpleado(id:number , empleado:Empleado): Observable<Object> {
  return this.httpClient.put((` ${this.baseUrla}${id}`), empleado)
  }
// eliminar los empleados
  eliminarEmpleado( usuario:Usuario): Observable<any>{
  return this.httpClient.delete(` ${this.baseUrle}`)
  }

}
