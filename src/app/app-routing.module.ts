import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
},
{
  path: 'home',
  loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
},
{
  path: 'login',
  loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
},
{
  path: 'qrreader',
  loadChildren: () => import('./pages/qrreader/qrreader.module').then( m => m.QrreaderPageModule)
},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
