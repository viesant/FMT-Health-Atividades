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
        (usuario: { email: string; senha: string }) =>
          usuario.email === this.login.emailUsuario &&
          usuario.senha === this.login.senha
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
      let achouUser = false;
      const listaUsuarios = JSON.parse(listaUsuariosString);
      listaUsuarios.forEach((usuario: { email: string; senha: string }) => {
        if (usuario.email === this.login.emailUsuario) {
          usuario.senha = 'a1b2c3d4';
          alert('Senha atualizada para a1b2c3d4');
          achouUser = true;
        }
      });
      if (!achouUser) {
        alert('Usuário não encontrado');
      }
      localStorage.setItem('listaUsuarios', JSON.stringify(listaUsuarios));
    } else {
      alert('Nenhum usuário cadastrado, crie nova conta');
    }
  }
  cadastrar() {
    this.router.navigate(['cadastro']);
  }
}
