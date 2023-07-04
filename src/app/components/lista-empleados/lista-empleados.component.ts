import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from 'src/app/enties/empleado';
import { Usuario } from 'src/app/enties/empleado';
import { EmpleadoService } from 'src/app/service/empleado.service';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit{

empleados:Empleado[];
eliminarempleado: Usuario[] = [];
  constructor (
    private emleadoServicio:EmpleadoService,
    private router: Router,
    private route: ActivatedRoute
    
    ) { }

  ngOnInit(): void {
    // se llama el metodo y lo corre 
    this.obtenerEmpleados();
  }

  // trae los empleados 
  private obtenerEmpleados (){
    this.emleadoServicio.obtenerListaEmpleados().subscribe(dato =>{
      this.empleados = dato;
    });
}
irActualizarEmpleados(){
  this.router.navigate(['actualizar-empleado']);
}
actualizarEmpleado(empleadoId: number, documento :number) {
  this.router.navigate(['/actualizar-empleado', empleadoId,documento]);
}

listasolicitudes(usuarioid: number) {
  this.router.navigate(['solicitud', usuarioid ]);
}

generarSolicitud(empleadoId: number, documento :number){
  this.router.navigate(['registrar-solicitud',empleadoId,documento]);
}

irVerSolicitud(id: number){
  
  this.router.navigate(['solicitud'] );
}

verSolicitud(id :number){
  this.irVerSolicitud(id);

}
/*
elimimarEmpleado(empleadoId: number, documento: number) {
  this.route.paramMap.subscribe(params => {
    const id = params.get('id');
    const documento = params.get('documento');
    if (id && documento) {
      const idConvertido = parseInt(id, 10);
      const documentoConvertido = parseInt(documento, 10);
      const objetoEncontrado = this.empleados.find(objeto =>
        objeto.id_empleado === idConvertido && objeto.usuario.usuarioid === documentoConvertido);
        this.eliminarempleado = objetoEncontrado ? objetoEncontrado.usuario : null;
      if (objetoEncontrado) {
        console.log('Objeto encontrado:', objetoEncontrado);
        this.emleadoServicio.eliminarEmpleado(this.eliminarempleado[0]).subscribe(dato => {
          console.log(dato);
        });
      } else {
        console.log('Objeto no encontrado');
      }
    }
  });
}
*/
} 
