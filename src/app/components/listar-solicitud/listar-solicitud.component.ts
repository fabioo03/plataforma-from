import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Solicitud } from 'src/app/enties/solicitud';
import { SolicitudService } from 'src/app/service/solicitud.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listar-solicitud',
  templateUrl: './listar-solicitud.component.html',
  styleUrls: ['./listar-solicitud.component.css']
})
export class ListarSolicitudComponent implements OnInit {
  id: number;
  solicitudes: Solicitud[];

  constructor(
    private solicitudService: SolicitudService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const numero = params.get('id');
      if (numero !== null) {
        this.id = parseInt(numero, 10);
        this.obtenerSolicitudes(this.id);
      }
    });
  }

  private obtenerSolicitudes(id: number) {
    this.solicitudService.obtenerListaSolicitudes(id).subscribe(dato => {
      this.solicitudes = dato;
    });
  }
}
