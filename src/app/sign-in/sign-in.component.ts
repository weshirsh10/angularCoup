import { Component, OnInit, NgModule } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SignInService } from './sign-in.service'
import { Router } from '@angular/router'


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  name;
  signInForm;

  constructor(    
    private formBuilder: FormBuilder,
    private signInService: SignInService,
    private router: Router,
    ) { 
      this.signInForm = this.formBuilder.group({
      "name": '',
      });
  }

  ngOnInit(): void {


    this.signInService.getToken()
    this.name = this.signInService.getName();


  }

 

  onSubmit(nameData){
    this.signInService.postName(nameData).subscribe(
      data => {
        console.log('Success', data)
        this.router.navigate(['gameplay', data['name']])
      },
      error => console.error('Error!', error)
    )
  }

}
