import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { NofoundComponent } from './nofound/nofound.component';
import { CommentComponent } from './comment/comment.component';
import { SharedModule } from '../shared/shared.module';
import { OrderPipe } from './../core/pipe/order.pipe';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule
  ],
  declarations: [
    HomeComponent,
    NofoundComponent,
    CommentComponent,
    OrderPipe
  ]
})
export class SiteModule { }
