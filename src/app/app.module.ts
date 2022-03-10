import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {PhoneModule} from './phone/phone.module';
import {HUDModule} from './hud/hud.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ProgressbarModule} from 'ngx-bootstrap/progressbar';
import {ChildShopModule} from './child-shop/child-shop.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    PhoneModule,
    HUDModule,
    BrowserAnimationsModule,
    ProgressbarModule.forRoot(),
    ChildShopModule,
  ],
  bootstrap: [AppComponent],
})
/**
 * @class AppModule
 */
export class AppModule {}
