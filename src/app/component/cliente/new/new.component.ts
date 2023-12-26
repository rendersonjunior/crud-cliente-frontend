import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from 'src/app/model/cliente/cliente.model';
import { Telefone } from 'src/app/model/telefone/telefone.model';
import { ClienteService } from 'src/app/service/cliente/cliente.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  cliente: Cliente = {
    nome: '',
    cpf: '',
    endereco: '',
    bairro: '',
    telefones: []
  }
  submitted = false;
  telefone: Telefone = {
    numero: ''
  }

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
  }

  submit(): void {
          const data = {
        nome: this.cliente.nome,
        cpf: this.cliente.cpf,
        endereco: this.cliente.endereco,
        bairro: this.cliente.bairro,
        telefones: this.cliente.telefones
      }

      this.clienteService.create(data).subscribe(
        response => {
          this.submitted = true;
          alert("Cliente salvo com sucesso!")
        },
        error => {
          alert("Erro ao salvar!")
        });
      }

  clear(): void {
    this.cliente = {
      nome: '',
      cpf: '',
      endereco: '',
      bairro: '',
      telefones: []
    }
    this.submitted = false;    
  }

  inserirTelefone(): void {
    if (this.telefone.numero?.trim() !== '') {
      this.cliente.telefones?.push(this.telefone);
      this.telefone = new Telefone();
    }
  }

}
