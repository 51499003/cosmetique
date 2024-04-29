import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    let formControl = {
     
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6) // Exemple de validation de longueur minimale du mot de passe
      ])
    }
    this.myForm = this.fb.group(formControl);
  }


  get email() {
    return this.myForm.get('email');
  }

  get password() {
    return this.myForm.get('password');
  }

  save() {
    console.log(this.myForm.value);
  }
}