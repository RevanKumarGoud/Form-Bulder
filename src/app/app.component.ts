import { Component } from '@angular/core';
import { FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private fb : FormBuilder){}
  registationForm = this.fb.group({
    UserName: ['', [Validators.required,Validators.minLength(6)]],
    Password:[''],
    ConfirmPassword : [''],
   address: this.fb.group({
    city : [''],
    State : [''],
    PostalCode : ['']
   })
  });

  loadApiData(){
    this.registationForm.setValue({
      UserName: 'Vikram',
      Password: 'testqw',
      ConfirmPassword: 'testqw',
      address: {
        city : 'city',
        State : 'State',
        PostalCode : '123456'
      }
    })
  }
}
