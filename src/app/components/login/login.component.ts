import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  async onSubmit(formData: any){
    console.log('Provided phoneNumber::: '+formData.phoneNumber)
    console.log('provided password::: '+formData.password)
    // call service to validate provided phone number and password against DB
    this.router.navigate(['/home'])

  }

}
