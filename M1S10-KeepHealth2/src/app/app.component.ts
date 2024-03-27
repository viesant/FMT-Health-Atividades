import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'KeepHealth';
  alimentos = [
    {
      id: 1,
      name: 'Abacate',
      description:
        'O abacate é uma fruta versátil, rica em gorduras saudáveis e nutrientes essenciais.',
      qttCalories: 160, // Valor fictício, ajuste conforme necessário
      qttDaysFeed: 3,
      imageLink: 'link_para_imagem',
    },
    {
      id: 2,
      name: 'Banana',
      description:
        'A banana é uma fruta rica em potássio, que ajuda na saúde dos músculos e do coração.',
      qttCalories: 105, // Valor fictício, ajuste conforme necessário
      qttDaysFeed: 2,
      imageLink: 'link_para_imagem',
    },
    {
      id: 3,
      name: 'Maçã',
      description:
        'A maçã é uma fruta muito popular, rica em fibras e antioxidantes.',
      qttCalories: 95, // Valor fictício, ajuste conforme necessário
      qttDaysFeed: 1,
      imageLink: 'link_para_imagem',
    },
    {
      id: 4,
      name: 'Cenoura',
      description:
        'A cenoura é um vegetal rico em betacaroteno, importante para a saúde da visão.',
      qttCalories: 25, // Valor fictício, ajuste conforme necessário
      qttDaysFeed: 2,
      imageLink: 'link_para_imagem',
    },
    {
      id: 5,
      name: 'Ovo',
      description:
        'O ovo é uma excelente fonte de proteína e contém muitos nutrientes essenciais.',
      qttCalories: 70, // Valor fictício, ajuste conforme necessário
      qttDaysFeed: 4,
      imageLink: 'link_para_imagem',
    },
    {
      id: 6,
      name: 'Salmão',
      description:
        'O salmão é um peixe rico em ácidos graxos ômega-3, benéficos para a saúde cardiovascular.',
      qttCalories: 220, // Valor fictício, ajuste conforme necessário
      qttDaysFeed: 2,
      imageLink: 'link_para_imagem',
    },
    {
      id: 7,
      name: 'Brócolis',
      description:
        'O brócolis é um vegetal rico em vitaminas e minerais, além de ser uma boa fonte de fibras.',
      qttCalories: 50, // Valor fictício, ajuste conforme necessário
      qttDaysFeed: 2,
      imageLink: 'link_para_imagem',
    },
    {
      id: 8,
      name: 'Quinoa',
      description:
        'A quinoa é um grão rico em proteínas e fibras, sendo uma excelente opção para uma dieta equilibrada.',
      qttCalories: 120, // Valor fictício, ajuste conforme necessário
      qttDaysFeed: 3,
      imageLink: 'link_para_imagem',
    },
    {
      id: 9,
      name: 'Iogurte',
      description:
        'O iogurte é uma fonte de cálcio e probióticos, benéficos para a saúde intestinal.',
      qttCalories: 150, // Valor fictício, ajuste conforme necessário
      qttDaysFeed: 2,
      imageLink: 'link_para_imagem',
    },
    {
      id: 10,
      name: 'Nozes',
      description:
        'As nozes são oleaginosas ricas em ácidos graxos insaturados e antioxidantes.',
      qttCalories: 185, // Valor fictício, ajuste conforme necessário
      qttDaysFeed: 1,
      imageLink: 'link_para_imagem',
    },
  ];
  constructor() {}
  ngOnInit(): void {}

  gravarDados() {
    localStorage.setItem('alimentos', JSON.stringify(this.alimentos));
  }
}
