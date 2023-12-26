import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/model/cliente/cliente.model';
import { ClienteService } from 'src/app/service/cliente/cliente.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  clienteSelecionado: Cliente = {
    nome: '',
    cpf: '',
    endereco: '',
    bairro: '',
    telefones: []
  }
  msg = ''

  constructor(
    private clienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.msg = '';
    this.buscarCliente(this.route.snapshot.params.id);
  }

  buscarCliente(id: number): void {
    this.clienteService.get(id)
      .subscribe(
        data => {
          this.clienteSelecionado = data;
        },
        error => {
          alert(error);
        });
  }

}
