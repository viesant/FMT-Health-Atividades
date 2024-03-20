import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  // tempUsers = [
  //   { user: 'user1@gmail.com', password: '1234' },
  //   { user: 'user2@gmail.com', password: 'abcd' },
  //   { user: 'user3@gmail.com', password: '1111' },
  //   { user: 'user4@gmail.com', password: 'aaaa' },
  //   { user: 'user5@gmail.com', password: 'cccc' },
  // ];
  // constructor() {
  //   localStorage.setItem('listaUsuarios', JSON.stringify(this.tempUsers));
  // }
  constructor(private router: Router) {}

  login = {
    emailUsuario: '',
    senha: '',
  };

  entrar() {
    const listaUsuariosString = localStorage.getItem('listaUsuarios');

    if (!!listaUsuariosString) {
      const listaUsuarios = JSON.parse(listaUsuariosString);
      const achouUsuario = listaUsuarios.find(
        (usuario: { user: string; password: string }) =>
          usuario.user === this.login.emailUsuario &&
          usuario.password === this.login.senha
      );
      if (achouUsuario) {
        console.log('achou', achouUsuario);
        this.router.navigate(['home']);
      } else {
        alert('Usuário e/ou senha inválidos');
      }
    } else {
      alert('Nenhum usuário cadastrado, crie nova conta');
    }
  }

  resetarSenha() {
    const listaUsuariosString = localStorage.getItem('listaUsuarios');

    if (!!listaUsuariosString) {
      const listaUsuarios = JSON.parse(listaUsuariosString);
      listaUsuarios.forEach((usuario: { user: string; password: string }) => {
        if (usuario.user === this.login.emailUsuario) {
          usuario.password = 'a1b2c4d4';
        }
      });
      localStorage.setItem('listaUsuarios', JSON.stringify(listaUsuarios));
    } else {
      alert('Nenhum usuário cadastrado, crie nova conta');
    }
  }

  // class User {
  //   #login;
  //   #password;
  //   constructor(login: string, password: string){
  //     this.#login = login;
  //     this.#password = password;
  //   }
  //   get login(){
  //     return this.#login
  //   }
  //   get password(){
  //     return this.#password
  //   }
  //   set password(password){
  //     this.#password = password;
  //   }
  // }
}
