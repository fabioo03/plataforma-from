import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEmpleadosComponent } from './components/lista-empleados/lista-empleados.component';
import { RegistrarEmpleadoComponent } from './components/registrar-empleado/registrar-empleado.component';
import { ActualizarEmpleadoComponent } from './components/actualizar-empleado/actualizar-empleado.component';
import { RegistrarSolicitudComponent } from './components/registrar-solicitud/registrar-solicitud.component';
import { ListarSolicitudComponent } from './components/listar-solicitud/listar-solicitud.component';

const routes: Routes = [

  // se agregan las rutas de la navegacion entre pestañas 
   { path:'empleados', component:ListaEmpleadosComponent },
   { path:'', redirectTo:'empleados',pathMatch:'full'},
   { path:'registrar-empleado', component:RegistrarEmpleadoComponent },
   { path:'actualizar-empleado/:id/:documento', component:ActualizarEmpleadoComponent  },
   { path: 'registrar-solicitud/:id/:documento', component: RegistrarSolicitudComponent },
    { path:'solicitud/:id', component:ListarSolicitudComponent  },


  // { path:'', redirectTo:'empleados',pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
