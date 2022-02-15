import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LogoComponent} from './component/logo/logo.component';
import {MapComponent} from './component/map/map.component';
import {HudComponent} from './component/hud.component';

@NgModule({
  declarations: [LogoComponent, MapComponent, HudComponent],
  imports: [CommonModule],
  exports: [HudComponent],
})
/**
 * @class HUDModule
 */
export class HUDModule {}
