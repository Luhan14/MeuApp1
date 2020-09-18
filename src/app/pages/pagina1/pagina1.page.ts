import { Component, OnInit,} from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.page.html',
  styleUrls: ['./pagina1.page.scss'],
})
export class Pagina1Page implements OnInit {  //form1.load()
  nome: string ="Luhan";
  padrao: any = {rg: ''}

  constructor(private navControl: NavController) { }

  ngOnInit() {
  }
    irPagina2(){
      this.navControl.navigateForward("pagina2");
    }
}
