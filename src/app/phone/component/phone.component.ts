import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import {map, Observable, share, Subscription, timer} from 'rxjs';
import {PhoneService} from '../service/phone.service';

@Component({
  selector: 'insel-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss'],
})
/**
 * @class PhoneComponent
 * @implements {OnInit, OnDestroy, AfterViewInit}
 */
export class PhoneComponent implements OnInit, OnDestroy, AfterViewInit {
  /**
   * @private
   * @property
   * @type {Observable}
   */
  private timer: Observable<Date> = timer(0, 1000).pipe(
    map((tick) => new Date()),
    share()
  );

  /**
   * @private
   * @property
   * @type {Subscription}
   */
  private timerSubscription: Subscription = {} as Subscription;

  /**
   * @private
   * @property
   * @type {string}
   */
  private $time: string = '';

  /**
   * @private
   * @property
   * @type {Subscription}
   */
  private phoneSubscription: Subscription = {} as Subscription;

  @ViewChild('content', {read: ViewContainerRef})
  /**
   * @private
   * @property
   * @type {ViewContainerRef | undefined}
   */
  private content: ViewContainerRef | undefined;

  /**
   * PhoneComponent constructor
   *
   * @constructor
   * @param {PhoneService} phoneService
   */
  constructor(private readonly phoneService: PhoneService) {}

  /**
   * On Initialization
   *
   * @public
   */
  public ngOnInit(): void {
    this.timerSubscription = this.timer.subscribe(
      (value) =>
        (this.$time = value.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }))
    );
  }

  /**
   * On Destroy
   *
   * @public
   */
  public ngOnDestroy(): void {
    if (this.timerSubscription && !this.timerSubscription.unsubscribe) {
      this.timerSubscription.unsubscribe();
    }

    if (this.phoneSubscription && !this.phoneSubscription.unsubscribe) {
      this.phoneSubscription.unsubscribe();
    }
  }

  /**
   * AfterViewInit
   *
   * @public
   */
  public ngAfterViewInit(): void {
    this.phoneSubscription = this.phoneService.asObservable.subscribe(
      (component) => this.load(component)
    );
  }

  /**
   * Load component
   *
   * @public
   * @param {any} component
   */
  private load(component: any): void {
    if (!this.content) {
      return;
    }

    this.content.clear();
    this.content.createComponent(component);
  }

  /**
   * @public
   * @returns {string}
   */
  public get time(): string {
    return this.$time;
  }
}
