import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '@general/pages/not-found/not-found.component';
import { LoginComponent } from './authentication/pages/login/login.component';
import { SignupComponent } from './authentication/pages/signup/signup.component';
import { AuthGuard } from './guard/auth.guard';
import { PreLoginGuard } from './guard/pre-login.guard';
// import { PreLoginGuard } from './guard/pre-login.guard';
import { LayoutComponent } from './layouts/layout/layout.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FeaturesComponent } from './pages/features/features.component';
import { HomeLayoutComponent } from './pages/home-layout/home-layout.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'features',
        component: FeaturesComponent
      },
      {
        path: 'contact-us',
        component: ContactUsComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [PreLoginGuard]
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [PreLoginGuard]
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'buyer',
        loadChildren: () => import('@buyer/buyer.module').then(m => m.BuyerModule)
      },
      {
        path: '',
        loadChildren: () => import('@general/general.module').then(m => m.GeneralModule)
      }
    ]
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
