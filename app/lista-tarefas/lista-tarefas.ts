import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService, Tarefa } from '../Services/tarefa-service';

@Component({
  selector: 'app-lista-tarefas',
  imports: [CommonModule],
  templateUrl: './lista-tarefas.html',
  styleUrl: './lista-tarefas.css'
})

export class ListaTarefas {
  tarefas: Tarefa[] = [];

  constructor(private tarefaService: TarefaService) {
    this.tarefas = this.tarefaService.listar();
  }

  remover(id: number): void {
    this.tarefaService.remover(id);
  }

  marcarConcluida(id: number): void {
    this.tarefaService.marcarConcluida(id);
  }

  
}
