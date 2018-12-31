import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'sign-up', loadChildren: './sign-up/sign-up.module#SignUpPageModule' },
  { path: 'verify-email', loadChildren: './verify-email/verify-email.module#VerifyEmailPageModule' },
  { path: 'main', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'edit-profile-modal', loadChildren: './edit-profile-modal/edit-profile-modal.module#EditProfileModalPageModule' },
  { path: 'training', loadChildren: './training/training.module#TrainingPageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
