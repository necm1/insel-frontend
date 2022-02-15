import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PhoneComponent} from './component/phone.component';
import {HomeComponent} from './component/home/home.component';
import {PhoneService} from './service/phone.service';

@NgModule({
  declarations: [PhoneComponent, HomeComponent],
  imports: [CommonModule],
  exports: [PhoneComponent],
  providers: [PhoneService],
})
/**
 * @class PhoneModule
 */
export class PhoneModule {}
