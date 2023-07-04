//import { Administrador } from "./administrador";
// import { Equipo } from "./equipo";
// import { Usuario } from "./usuario";
/*
export class Empleado {
  
    id_empleado: number;
    id_documento : Usuario;
    administradorid:Administrador;
    equipoid :Equipo;
   
}*/

export class Empleado {
  id_empleado:   number;
  usuario:       Usuario;
  equipo:        Equipo;
  administrador: Administrador;
  // Nusuario: Usuario = new Usuario();
 // administradores : Administrador [] ; 
 // equipos: Equipo [];
}

export class Administrador {
  administradorid: number;
  usuario:         Usuario;
}

export class Usuario {
  usuarioid:       number;
  domicilio:       Domicilio;
  contrato:        Contrato;
  tipodocumento:   string;
  primernombre:    string;
  segundonombre:   null | string;
  primerapellido:  string;
  segundoapellido: null | string;
  telefono:        string;
  correo:          string;
  apodousuario:    string;
  contrasena:      string;
 // Ndomicilio: Domicilio = new Domicilio();
  //Ncontrato: Contrato = new Contrato();


}

export class Contrato {
  contratoid:     number;
  tipocontrato:   string;
  estadocontrato: string;
  estadoempleado: string;
  fechaingreso:   Date;
  fecharetiro:    Date;
}

export class Domicilio {
  domicilioid: number;
  calle:       string;
  numero:      string;
  barrio:      string;
}

export class Equipo {
  equipoid:     number;
  usuario:      Usuario;
  nombreequipo: string;
  nombre:       string;
}
