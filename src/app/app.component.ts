import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'binding-interpolution';
 
  userObject='praveen'
   userObject1= {firstName:'praveen',lastName:'sankratti'}
   userlogin=true
  
   


   contact = [
    {
      'firstname':'praveen',
      'lastname':'sankratti',
      'contactid':1233

    },
    {
      'firstname':'A Khaja',
      'lastname':'bhande',
      'contactid':1234

    }

   ]
   sayhello()
   {
    console.log("welcome to ascent")
   }
   hibro(a:number,b:number,c:number)
   {
    console.log("add "+a+b+c);
   }
   username='praveeen'
}
