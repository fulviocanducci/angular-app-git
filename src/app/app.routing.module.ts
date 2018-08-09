import { CommentComponent } from './site/comment/comment.component';
import { HomeComponent } from './site/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';
import { NofoundComponent } from './site/nofound/nofound.component';

const routes: Routes = [
   {
     path: '',
     component: HomeComponent,
     canActivate: []
   },
   {
      path: 'home',
      component: HomeComponent,
      canActivate: []
   },
   {
      path: 'comments',
      component: CommentComponent,
      canActivate: []
   },
   {
     path: '**',
     component: NofoundComponent
   }
 ];

@NgModule({
   declarations: [],
   exports: [RouterModule],
   imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
