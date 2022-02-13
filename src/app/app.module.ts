import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {PhoneModule} from './phone/phone.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgbModule, PhoneModule],
  bootstrap: [AppComponent],
})
/**
 * @class AppModule
 */
export class AppModule {}
