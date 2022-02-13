import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PhoneComponent} from './component/phone.component';

@NgModule({
  declarations: [PhoneComponent],
  imports: [CommonModule],
  exports: [PhoneComponent],
})
/**
 * @class PhoneModule
 */
export class PhoneModule {}
