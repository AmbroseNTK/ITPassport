import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InTestGuard } from './guards/in-test.guard';
import { CanDeactivate } from '@angular/router/src/utils/preactivation';
import { BeforeTestGuard } from './guards/before-test.guard';
import { OnFinishTestGuard } from './guards/on-finish-test.guard';

const routes: Routes = [
  { path: '', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'sign-up', loadChildren: './sign-up/sign-up.module#SignUpPageModule' },
  { path: 'verify-email', loadChildren: './verify-email/verify-email.module#VerifyEmailPageModule' },
  { path: 'main', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'edit-profile-modal', loadChildren: './edit-profile-modal/edit-profile-modal.module#EditProfileModalPageModule' },
  { path: 'training', loadChildren: './training/training.module#TrainingPageModule' },
  { path: 'before-start', loadChildren: './before-start/before-start.module#BeforeStartPageModule', canActivate: [BeforeTestGuard] },
  { path: 'test-room', loadChildren: './test-room/test-room.module#TestRoomPageModule', canActivate: [OnFinishTestGuard], canDeactivate: [InTestGuard] },
  { path: 'test-result', loadChildren: './test-result/test-result.module#TestResultPageModule' },
  { path: 'cat-info-modal', loadChildren: './cat-info-modal/cat-info-modal.module#CatInfoModalPageModule' },
  { path: 'welcome', loadChildren: './welcome/welcome.module#WelcomePageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
