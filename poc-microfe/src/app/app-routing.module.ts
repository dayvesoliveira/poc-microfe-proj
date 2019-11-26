import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { ContentViewComponent } from './content-view/content-view.component';


const routes: Routes = [
  { path: '**', component: EmptyRouteComponent },
  { path: '', redirectTo: '/content-view', pathMatch: 'full'},
  { path: 'content-view', component: ContentViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
})
export class AppRoutingModule { }
