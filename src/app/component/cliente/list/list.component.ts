import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/cliente/cliente.model';
import { ClienteService } from 'src/app/service/cliente/cliente.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  clientes?: Cliente[];
  clienteSelecionado: Cliente = {};
  indexSelecionado = -1;
  nome = '';

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.buscarClientes();
  }

  buscarClientes(): void {
    this.clienteService.getAll().subscribe(
      data => {
        this.clientes = data;
      },
      error => {
        alert(error);
      }
    )
  }

  atualizarLista(): void {
    this.buscarClientes();
    this.clienteSelecionado = {};
    this.indexSelecionado = -1;
  }

  selecionarCliente(cliente: Cliente, index: number): void {
    this.clienteSelecionado = cliente;
    this.indexSelecionado = index;
  }

  buscarPorNome(): void {
    this.clienteSelecionado = {}
    this.indexSelecionado = -1

    this.clienteService.findByName(this.nome)
      .subscribe(
        data => {
          this.clientes = data;
        },
        error => {
          alert(error)
        });

  }

}
