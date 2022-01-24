import { CubinhoComponent } from './view/cubinho/cubinho.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { ZapComponent } from './view/zap/zap.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "zap",
    component: ZapComponent
  },
  {
    path: "cubinho",
    component: CubinhoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
