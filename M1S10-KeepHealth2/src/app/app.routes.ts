import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { DietComponent } from './diet/diet.component';
import { DietDetailComponent } from './diet/diet-detail/diet-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'cadastro',
    component: CadastroComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'diet',
    children: [
      {
        path: '',
        component: DietComponent,
      },
      {
        path: ':id',
        component: DietDetailComponent,
      },
    ],
  },
];
