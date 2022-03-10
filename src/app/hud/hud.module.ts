import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LogoComponent} from './component/logo/logo.component';
import {MapComponent} from './component/map/map.component';
import {HUDComponent} from './component/hud.component';
import {StatsComponent} from './component/stats/stats.component';
import {ProgressbarModule} from 'ngx-bootstrap/progressbar';

@NgModule({
  declarations: [LogoComponent, MapComponent, HUDComponent, StatsComponent],
  imports: [CommonModule, ProgressbarModule],
  exports: [HUDComponent],
})
/**
 * @class HUDModule
 */
export class HUDModule {}
