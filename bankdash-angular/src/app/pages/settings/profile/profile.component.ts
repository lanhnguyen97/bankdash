import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  imports: [FormsModule],
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  form = {
    yourName: 'Charlene Reed',
    userName: 'Charlene Reed',
    email: 'charlenereed@gmail.com',
    password: '**********',
    dob: '25 January 1990',
    presentAddr: 'San Jose, California, USA',
    permAddr: 'San Jose, California, USA',
    city: 'San Jose',
    postal: '45962',
    country: 'USA',
  };
}
