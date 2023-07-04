 
 // import { Empleado } from "./empleado";

export class Solicitud {
    solicitudid : number;
    empleado?:             Empleado;
 //   id_documento:            number;
    estadossupervisor:    string;
    estadosadministrador: string;
    fechacontrolestado:    string;
    diassolicitados:         number;
    fechasolicitud:       string;
    fechainicio:          Date;
    fechafin:             Date;
    notasolicitud:        null | string;
}

/*
export interface Solicitud {
    solicitudid:          number;
    empleado:             Empleado;
    estadossupervisor:    string;
    estadosadministrador: string;
    fechasolicitud:       Date;
    fechainicio:          Date;
    fechafin:             Date;
    notasolicitud:        null | string;
    fechacontrolestado:   Date;
    dias_solicitados:     number;
}
*/
export interface Empleado {
    id_empleado:   number;
    usuario:       Usuario;
    equipo:        Equipo;
    administrador: Administrador;
}

export interface Administrador {
    administradorid: number;
    usuario:         Usuario;
}

export interface Usuario {
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
}

export interface Contrato {
    contratoid:     number;
    tipocontrato:   string;
    estadocontrato: string;
    estadoempleado: string;
    fechaingreso:   Date;
    fecharetiro:    Date | null;
}

export interface Domicilio {
    domicilioid: number;
    calle:       string;
    numero:      string;
    barrio:      string;
}

export interface Equipo {
    equipoid:     number;
    usuario:      Usuario;
    nombreequipo: string;
    nombre:       string;
}



