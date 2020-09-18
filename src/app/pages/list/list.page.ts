import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
alunos : string [] = ["José","Pedro","Priscila","Khaled","Luhan","Daniel","William","Karlos","Andre","kawan","Rian","Camille"];
  constructor() { }

  ngOnInit() {
  }
  excluir(aluno){
    console.log('Aluno ' + aluno + 'Aluno removido da lista');
  }
  alterar(){
    console.log('Aluno alterado com sucesso');
  }
}
