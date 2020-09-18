import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [

    {
      title: 'Card',
      url: 'card',
      icon: 'journal'
    },

    {
      title: 'Buttons',
      url: 'buttons',
      icon: 'journal'
    },

    {
      title: 'Inputs',
      url: 'inputs',//rotas ou caminho para uma página
      icon: 'file-tray'
    },

    {
      title: 'Navegação',//navegar entre páginas...
      url: 'pagina1',
      icon: 'newspaper'
    },

    {
      title: 'Lista',//navegar entre páginas...
      url: 'list',
      icon: 'newspaper'
    },

    {
      title: 'IMC',//navegar entre páginas...
      url: 'imc',
      icon: 'calculator'
    }
  ];
  public labels = ['Alunos', 'TI88'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
