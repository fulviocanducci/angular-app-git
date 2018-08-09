import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderPipe } from './pipe/order.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OrderPipe]
})
export class CoreModule { }
