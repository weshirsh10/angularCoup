import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpHeaders, HttpClientModule } from '@angular/common/http';;
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component'
import { GameplayComponent } from './gameplay/gameplay.component';


const routes: Routes = [
  {path: 'sign-in', component: SignInComponent},
  {path: 'gameplay/:name', component: GameplayComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
