import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MapModule} from './map/map.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgbModule, MapModule],
  providers: [],
  bootstrap: [AppComponent],
})
/**
 * @class AppModule
 */
export class AppModule {}
