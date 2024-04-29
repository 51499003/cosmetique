
import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {

  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    let formControl = {
      nom: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Za-z]+"),
        Validators.minLength(3)
      ]),
      prenom: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Za-z]+"),
        Validators.minLength(3)
      ]),
      telephone: new FormControl('', [
        Validators.required,
        Validators.pattern("[0-9]+")
      ]),
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

  get nom() {
    return this.myForm.get('nom');
  }

  get prenom() {
    return this.myForm.get('prenom');
  }

  get telephone() {
    return this.myForm.get('telephone');
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



 
    

