import { Component } from '@angular/core';
import { TarefaService } from '../Services/tarefa-service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-cadastrar-tarefa',
  imports: [FormsModule],
  templateUrl: './cadastrar-tarefa.html',
  styleUrl: './cadastrar-tarefa.css'
})
export class CadastrarTarefa {
  id: number = 0;
  nome: string = '';
  descricao: string = '';
  concluida: boolean = false;

  constructor(private tarefaService: TarefaService) {}

  adicionar(): void {
    if (!this.nome.trim() || !this.descricao.trim()) return;
    this.tarefaService.adicionar({ id: 0,
      nome: this.nome.trim(),
      descricao : this.descricao.trim(),
      concluida: false
    });
    this.nome = ''; this.descricao = '';
  }
}
