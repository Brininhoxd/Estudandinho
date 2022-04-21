import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { GlobalService } from 'src/app/services/global.service';

interface Task {
  nome: string;
  selecionado: boolean;
  cor: ThemePalette;
  subtasks?: Task[];
}

@Component({
  selector: 'app-gerador-de-senha',
  templateUrl: './gerador-de-senha.component.html',
  styleUrls: ['./gerador-de-senha.component.scss']
})
export class GeradorDeSenhaComponent implements OnInit {

  public tamanhoSenha: number = 1
  public senha: string = ''
  public task: Task = {
    nome: 'Todos',
    selecionado: false,
    cor: 'primary',
    subtasks: [
      { nome: 'Letras Minúsculas', selecionado: false, cor: 'accent' },
      { nome: 'Letras Maiúsculas', selecionado: false, cor: 'accent' },
      { nome: 'Números', selecionado: false, cor: 'accent' },
      { nome: 'Simbolos', selecionado: false, cor: 'accent' },
    ],
  };
  public todos: boolean = false

  constructor(private globalService: GlobalService) { }

  ngOnInit(): void {
  }

  copiarSenhaClipBoard() {
    this.globalService.copiarTextoClipBoard(this.senha)
   }

  algunsSelecionados(): boolean {
    if (this.task.subtasks == null) {
      return false
    }
    return this.task.subtasks.length > 0 && !this.todos
  }

  selecinarTodos(todosSelecionados: boolean) {
    this.todos = todosSelecionados
    if (this.task.subtasks == null) {
      return
    }
    this.task.subtasks.forEach(t => { t.selecionado = todosSelecionados })
  }

  todosSelecionados() {
    this.todos = this.task.subtasks != null && this.task.subtasks.every(t => t.selecionado)
  }

  gerarSenha(): void {
    if (this.task.subtasks?.every((t) => t.selecionado === false)) {
      this.globalService.mostrarMensagem("Selecione ao menos uma opção", false)
      return
    }
    const MAISUCULAS = this.globalService.gerarAlfabeto(true)
    const MINSUCULAS = this.globalService.gerarAlfabeto(false)
    const NUMEROS = [...Array(10)].map((_, i) => i.toString())
    const SIMBOLOS = "!#$%&()*+-./:<=>?@[\]^_{}~".split("")
    const ARRAYAUXILIAR = [MAISUCULAS, MINSUCULAS, NUMEROS, SIMBOLOS]
    let caracteres: string[] = []
    if (this.todos) {
      caracteres = [...MAISUCULAS, ...MINSUCULAS, ...NUMEROS, ...NUMEROS, ...SIMBOLOS]
    } else {
      this.task.subtasks?.forEach((t, i) => {
        if (t.selecionado) {
          caracteres.push(...ARRAYAUXILIAR[i])
        }
      })
    }

    let aux = []
    for (let i = 0; i < this.tamanhoSenha; i++) {
      aux.push(caracteres[Math.floor(Math.random() * caracteres.length)])
    }
    this.senha = aux.join("")

  }


}
