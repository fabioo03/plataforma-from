import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Administrador, Empleado, Equipo } from 'src/app/enties/empleado';
import { Router } from '@angular/router';
import { SolicitudService } from 'src/app/service/solicitud.service';
import { ActivatedRoute } from '@angular/router';
import { Solicitud } from 'src/app/enties/solicitud';
import { FormsModule } from '@angular/forms';
import { EmpleadoService } from 'src/app/service/empleado.service';

@Component({
  selector: 'app-registrar-solicitud',
  templateUrl: './registrar-solicitud.component.html',
  styleUrls: ['./registrar-solicitud.component.css']
})
export class RegistrarSolicitudComponent implements OnInit {
  empleado: Empleado[] = [];
  diassolicitados: number;
  fechainicio: Date;
  fechafin: Date;
  notasolicitud : string;

  constructor(
    private router: Router,
    private solicitudServicio: SolicitudService,
    private route: ActivatedRoute,
    private empleadoServicio:EmpleadoService
  ) {}

  ngOnInit(): void {
    this.obtenerEmpleados();
    
  }

  onSubmit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      const documento = params.get('documento');
      if (id !== null && documento !== null) {
        const idConvertido = parseInt(id, 10);
        const documentoConvertido = parseInt(documento, 10);
        this.guardarSolicitud(idConvertido, documentoConvertido);
      }
    });
  }

  guardarSolicitud(idempleado: number, documento:number): void {
    const solicitud: Solicitud = {
      solicitudid: -1,
      empleado: this.buscarObjeto(idempleado,documento),
 //     id_documento: documento,
      estadossupervisor: "pendiente",
      estadosadministrador: "pendiente",
      fechacontrolestado: this.obtenerFechaActual(),
      diassolicitados: this.diassolicitados, 
      fechasolicitud: this.obtenerFechaActual(),
      fechainicio: this.fechainicio,
      fechafin: this.fechafin,
      notasolicitud: this.notasolicitud,

    };
    console.log(solicitud);
    this.solicitudServicio.registrarSolicitud(solicitud).subscribe(
      response => {
        console.log(response);
        alert('Se registró la nueva solicitud');
        this.irAlaListaSolicitudes(documento);
      },
      error => {
        console.error(error);
        alert('Ocurrió un error al registrar la solicitud');
      }
    );
  }

  irAlaListaSolicitudes(empleadoId: number): void {
    this.router.navigate(['solicitud', empleadoId]);
  }

  obtenerFechaActual(): string {
    const fecha = new Date();
    const año = fecha.getFullYear();
    const mes = String(fecha.getMonth() + 1).padStart(2, '0');
    const dia = String(fecha.getDate()).padStart(2, '0');
    const fechaFormateada = `${año}-${mes}-${dia}`;
  
    return fechaFormateada;
  }
  

  private obtenerEmpleados (){
    this.empleadoServicio.obtenerListaEmpleados().subscribe(dato =>{
      this.empleado = dato;
    });
}

buscarObjeto(idEmpleado: number, documento: number): Empleado | undefined {
  return this.empleado.find(objeto => objeto.id_empleado === idEmpleado && objeto.usuario.usuarioid === documento);
}
}