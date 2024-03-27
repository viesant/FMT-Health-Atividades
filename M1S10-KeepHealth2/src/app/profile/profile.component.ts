import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CmToMeterPipe } from '../pipes/cm-to-meter.pipe';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CmToMeterPipe],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  activeUser = {
    nome: '',
    email: '',
    peso: null,
    altura: 0,
    codigoDoUsuario: null,
    idade: null,
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    const activeUserStr = localStorage.getItem('activeUser');

    if (!!activeUserStr) {
      this.activeUser = JSON.parse(activeUserStr);
      console.log(this.activeUser);
    } else {
      this.router.navigate(['login']);
    }
  }
}
