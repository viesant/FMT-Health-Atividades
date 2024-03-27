import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css',
})
export class CadastroComponent {
  newUser = {
    nome: '',
    email: '',
    nascimento: '',
    senha: '',
    confirmaSenha: '',
  };
  constructor(private router: Router) {}

  cadastrar() {
    console.log(this.newUser);
    if (this.newUser.senha === this.newUser.confirmaSenha) {
      const listaUsuariosString = localStorage.getItem('listaUsuarios');
      const listaUsuarios = !!listaUsuariosString
        ? JSON.parse(listaUsuariosString)
        : [];

      if (
        listaUsuarios.find(
          (usuario: { email: string }) => usuario.email === this.newUser.email
        )
      ) {
        alert('Email já cadastrado!');
        return;
      }

      listaUsuarios.push({
        nome: this.newUser.nome,
        email: this.newUser.email,
        nascimento: this.newUser.nascimento,
        senha: this.newUser.senha,
      });
      localStorage.setItem('listaUsuarios', JSON.stringify(listaUsuarios));
      console.log(listaUsuarios);
      this.newUser = {
        nome: '',
        email: '',
        nascimento: '',
        senha: '',
        confirmaSenha: '',
      };
      alert('Novo usuario cadastrado');

      /*  
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
      } else {
        alert('Nenhum usuário cadastrado, crie nova conta');
      }
        */
    } else {
      alert('Senhas não são iguais');
      this.newUser.senha = '';
      this.newUser.confirmaSenha = '';
      return;
    }
  }
  voltar() {
    this.router.navigate(['login']);
  }
}
