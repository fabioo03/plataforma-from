import { Contrato } from "./contrato";
import { Domicilio } from "./domicilio";

export class Usuario {

    id_documento: number;
    id_domicilio :Domicilio;
    id_contrato :Contrato;
    tipo_documento:string;
    Primer_nombre:string;
    segundo_nombre:string;
    primer_apellido:string;
    segundo_apellido:string;
    telefono:string;
    correo:string;
    apodo_usuario:string;
    contraseña: string;
      
}
