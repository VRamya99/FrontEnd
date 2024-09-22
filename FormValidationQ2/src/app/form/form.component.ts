import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
userForm!:FormGroup
constructor(private fb:FormBuilder){
this.userForm=this.fb.group({
  name:['',[Validators.required]],
  email:['',[Validators.required,Validators.email]],
  password:['',[Validators.required,Validators.minLength(8)]],
  confirmPassword:['',[Validators.required]]

},{
  validator:this.passwordMatchValidator
})
}

passwordMatchValidator(form:AbstractControl)
{
  const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;

    // If passwords do not match, return a validation error
    if (password !== confirmPassword) {
      return { 'passwordMismatch': true };
    }
    return null;

}
onSubmit()
{
  if(this.userForm.valid)
  {
    console.log(this.userForm.value);
  }
  else{
    console.log("this user form is not validated")
  }
}

}








