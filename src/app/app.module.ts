import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {PhoneModule} from './phone/phone.module';
import {HUDModule} from './hud/hud.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgbModule, PhoneModule, HUDModule],
  bootstrap: [AppComponent],
})
/**
 * @class AppModule
 */
export class AppModule {}
