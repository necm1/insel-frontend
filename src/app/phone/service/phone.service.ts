import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HomeComponent} from '../component/home/home.component';

@Injectable({
  providedIn: 'root',
})
/**
 * @class PhoneService
 */
export class PhoneService {
  /**
   * @private
   * @property
   * @type {BehaviorSubject<any>}
   */
  private $componentSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
    HomeComponent
  );

  /**
   * PhoneService constructor
   *
   * @constructor
   */
  constructor() {}

  /**
   * @public
   * @param {any} component
   */
  public load(component: any): void {
    this.$componentSubject.next(component);
  }

  /**
   * @public
   * @returns {Observable<any>}
   */
  public get asObservable(): Observable<any> {
    return this.$componentSubject.asObservable();
  }
}
