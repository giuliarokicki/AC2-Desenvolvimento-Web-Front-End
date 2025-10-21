import { Injectable } from '@angular/core';


export interface Tarefa {
  id: number;
  nome: string;
  descricao: string;
  concluida: boolean;
}


@Injectable({
  providedIn: 'root'
})

export class TarefaService {
  private tarefas: Tarefa[] = [];

  private nextId(): number {
    return Date.now();
  }

  listar(): Tarefa[] {
    return this.tarefas;
  }

  adicionar(tarefa: Tarefa): void {
    tarefa.id = this.nextId();
    this.tarefas.push(tarefa);
  }

  remover(id: number): void {
    const i = this.tarefas.findIndex(l => l.id === id);
    if (i >= 0) this.tarefas.splice(i, 1);
  }

  marcarConcluida(id: number): void {
    const i = this.tarefas.find(tarefa => tarefa.id === id);
    if (i) {
      i.concluida = true;
    }
  }    
}
