import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Administrador, Empleado, Equipo } from 'src/app/enties/empleado';
import { AdministradorService } from 'src/app/service/administrador.service';
import { EmpleadoService } from 'src/app/service/empleado.service';
import { EquipoService } from 'src/app/service/equipo.service';

@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.css']
})
export class RegistrarEmpleadoComponent implements OnInit{

    administradores : Administrador [] ; 
    equipos: Equipo [];
    administradorSelec: Administrador[] = [];
    equipoSelec: Equipo[] = [];
    empleado: Empleado = new Empleado;
    selectedEquipo:  string;
    selectedAdministrador: string;
    usuarioid : number ;
    tipodocumento : string;
    primernombre: string;
    segundonombre:string;
    primerapellido: string;
    segundonapellido: string;
    segundoapellido: string;
    telefono: string;
    calle: string;
    numero: string;
    barrio: string;
    correo: string;
    apodousuario: string;
    contrasena: string;
    tipocontrato : string;
    estadocontrato : string;
    estadoempleado: string;
    fechaingreso: Date;
    fecharetiro : Date;

   constructor(
    private empleadoServicio:EmpleadoService,
    private administradorService:AdministradorService,
    private equipeService:EquipoService,
    private router: Router,   )  {}

  ngOnInit(): void {     
    this.ObtenerListaAdministradoresE();
    this.ObtenerListaEquipoE();
  }
  
  guardarempleado(){

    const domicilio = {
      domicilioid :-1,
      calle:this.calle,
      numero:this.numero,
      barrio:this.barrio
    }
    const contrato = {
      contratoid:     -1,
      tipocontrato:   this.tipocontrato,
      estadocontrato: this.estadocontrato,
      estadoempleado: this.estadocontrato,
      fechaingreso:   this.fechaingreso,
      fecharetiro:    this.fecharetiro
    }
    const usuario = {

      usuarioid:      this. usuarioid,
      domicilio:       domicilio,
      contrato:       contrato,
      tipodocumento:   this.tipodocumento,
      primernombre:    this.primernombre,
      segundonombre:   this.segundonombre,
      primerapellido:  this.primerapellido,
      segundoapellido: this.segundoapellido,
      telefono:        this.telefono,
      correo:          this. correo,
      apodousuario:    this.apodousuario,
      contrasena:      this.contrasena
    }

    const empleado= {

      id_empleado :-1,
      usuario:       usuario,
      equipo:       this.equipos[0],
      administrador: this.administradores[0]

    }
    this.empleadoServicio.registrarEmpleado(empleado)
    .subscribe(
      (response) => {
        console.log(response);
        alert("Se registró el nuevo empleado");
        this.irAlaListaEmpleados();
      },
      (error) => {
        console.error(error);
        alert("Ocurrió un error al registrar el empleado");
      }
    );
  }

  onSubmit(){
    this.guardarempleado();
  }
  irAlaListaEmpleados(){
    this.router.navigate(['empleados']);
  }

 ObtenerListaAdministradoresE(){
  this.administradorService.obtenerListaAdministradores().subscribe(dato =>{
  this.administradores = dato;
  })
 }

 ObtenerListaEquipoE(){
  this.equipeService.obtenerListaEquipos().subscribe(dato =>{
  this.equipos = dato;
  })
 }

 /*
 buscarEquipoPorNombre(selectedEquipo: string) {
  //this.empleado.equipo = this.equipos[0];
  this.empleado.equipo = this.equipos.filter(s =>
     s.nombreequipo  === selectedEquipo)[0];
 }
 */

 buscarAdministradorPorNombre(selectedAdministrador: string) {
//  this.empleado.administrador = this.administradores[0];
  this.empleado.administrador = this.administradores.filter(e =>
    e.usuario.primernombre === this.selectedAdministrador)[0];
 }


}
