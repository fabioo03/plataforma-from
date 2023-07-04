import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadoService } from 'src/app/service/empleado.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AdministradorService } from 'src/app/service/administrador.service';
import { EquipoService } from 'src/app/service/equipo.service';
import { Administrador, Empleado, Equipo } from 'src/app/enties/empleado';

@Component({
  selector: 'app-actualizar-empleado',
  templateUrl: './actualizar-empleado.component.html',
  styleUrls: ['./actualizar-empleado.component.css']
})
export class ActualizarEmpleadoComponent implements OnInit {
  id: number;
  empleado: Empleado[] = [];
  administrador: Administrador[] = [];
  equipo: Equipo[] = [];
  empleadoEditar: Empleado;
  empleadoForm: FormGroup; 
  usuarioid : number ;
  tipodocumento : string;
  primernombre: string;
  segundonombre:string | null ;
  primerapellido: string;
  segundonapellido: string;
  segundoapellido: string | null;
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
  idEmpleado : number ; 
  idcontrato : number ; 
  iddomicilio : number ; 

  constructor(
    private empleadoService: EmpleadoService,
    private router: Router,
    private route: ActivatedRoute,
    private administradorService:AdministradorService,
    private equipeService:EquipoService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.obtenerEmpleados();
  }

  onSubmit() {
   this. cargarListaEmpleados();
  }

  obtenerEmpleados() {
    this.empleadoService.obtenerListaEmpleados().subscribe(dato => {
      this.empleado = dato;
      console.log(this.empleado);
    });
  }

  cargarListaEmpleados() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      const documento = params.get('documento');
      if (id && documento) {
        const idConvertido = parseInt(id, 10);
        const documentoConvertido = parseInt(documento, 10);
        const objetoEncontrado = this.empleado.find(objeto => 
          objeto.id_empleado === idConvertido && objeto.usuario.usuarioid === documentoConvertido);
        if (objetoEncontrado) {
          console.log('Objeto encontrado:', objetoEncontrado);
          this.usuarioid = objetoEncontrado.usuario.usuarioid;
          this.tipodocumento = objetoEncontrado.usuario.tipodocumento;
          this.primernombre = objetoEncontrado.usuario.primernombre;
          this.segundonombre =objetoEncontrado.usuario.segundonombre;
          this.primerapellido = objetoEncontrado.usuario.primerapellido;
          this.segundoapellido = objetoEncontrado.usuario.segundoapellido;
          this.telefono = objetoEncontrado.usuario.telefono;
          this.calle = objetoEncontrado.usuario.domicilio.calle;
          this.numero = objetoEncontrado.usuario.domicilio.numero;
          this.barrio = objetoEncontrado.usuario.domicilio.barrio;
          this.correo = objetoEncontrado.usuario.correo;
          this.apodousuario = objetoEncontrado.usuario.apodousuario;
          this.contrasena = objetoEncontrado.usuario.contrasena;
          this.tipocontrato = objetoEncontrado.usuario.contrato.tipocontrato;
          this.estadocontrato = objetoEncontrado.usuario.contrato.estadocontrato;
          this.estadoempleado = objetoEncontrado.usuario.contrato.estadoempleado;
          this.fechaingreso = objetoEncontrado.usuario.contrato.fechaingreso;
          this.fecharetiro = objetoEncontrado.usuario.contrato.fecharetiro;

          this.iddomicilio = objetoEncontrado.usuario.domicilio.domicilioid;
          this.idcontrato = objetoEncontrado.usuario.contrato.contratoid;
          this .idEmpleado = objetoEncontrado.id_empleado;
          this.equipo[0] = objetoEncontrado.equipo;
          this.administrador[0] = objetoEncontrado.administrador;
        } else {
          console.log('Objeto no encontrado');
        }
      }
    });
  }

  guardarempleado(){

    const domicilio = {
      domicilioid : this.iddomicilio,
      calle:this.calle,
      numero:this.numero,
      barrio:this.barrio
    }
    const contrato = {
      contratoid:     this.idcontrato,
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

      id_empleado : this.idEmpleado,
      usuario:       usuario,
      equipo:       this.equipo[0],
      administrador: this.administrador[0]

    }
    this.empleadoService.actualizarEmpleado( this.idEmpleado,empleado).subscribe(
      (response) => {
        console.log(response);
        alert("Se actualizo un empleado");
        this.irAlaListaEmpleados();
      },
      (error) => {
        console.error(error);
        alert("Ocurrió un error al actualizar el empleado");
      }
    );
  }
  irAlaListaEmpleados(){
    this.router.navigate(['empleados']);
  }
  ObtenerListaAdministradoresE(){
    this.administradorService.obtenerListaAdministradores().subscribe(dato =>{
    this.administrador = dato;
    })
   }
  
   ObtenerListaEquipoE(){
    this.equipeService.obtenerListaEquipos().subscribe(dato =>{
    this.equipo = dato;
    })
   }





}
