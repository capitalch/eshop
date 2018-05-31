import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';
import { delayWhen, skipUntil, takeWhile, skipWhile, takeUntil, first, last, tap } from 'rxjs/operators';
import { timer } from 'rxjs/Observable/timer';
// import {takeUntilWithTime} from 'rxjs/Observable/takeUntilWithTime';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/skipWhile';
import { AppService } from '../service/app.service';
import { interval } from 'rxjs/observable/interval';
import { empty, Subject } from 'rxjs';
import { IbukiService } from 'ibuki';

@Injectable()
export class EmartResolver implements Resolve<any> {
    constructor(private appService: AppService, private ibuki: IbukiService) { }
    destroy$: Subject<boolean> = new Subject<boolean>();
    resolve() {
        // const source1 = interval(1000);
        // source1.subscribe(x => {
        //     const a = this.getIsInitialized() && (this.destroy$.next(true));
        // });

        // const source2 = interval(1000);


        // const source1: Observable<number> = interval(10);
        // const subs = source1.subscribe(x => {
        //     if (this.appService.getIsInitialized()) {
        //         this.destroy$.next(true);
        //         subs.unsubscribe();
        //         // return(true);
        //     }
        // });
        // const source2 = interval(1000);
        // const example2 = source2.takeUntil(this.destroy$);
        // return(example2);


        return(true);
        // const source2 = interval(20);
        // const stream$ = source2.takeUntil(this.destroy$);
        // return(stream$);
        // let condition = false;
        // Observable.while(condition, Observable.of(''));
        // return Observable.of(null).delay(130);
        // return(true);
        // const obs = Observable.from(this.appService.isInitialized())
        // const source1 = Observable.of(1, 2, 3, 4);
        // const source$ = interval(30);
        // const condition$ = source$.pipe(takeWhile(d => this.appService.getIsNotInitialized()));
        // const condition1$ = Observable.of(condition$);
        // return (condition1$);
        // const obs = source.pipe((d => this.appService.getIsInitialized()));
        // const obs = Observable.of('').pipe(takeWhile(d => this.appService.getIsInitialized()));
        // const obs = Observable.of('').delay(5000);

        // return(condition$);
        // return Observable.of('').skipWhile(d => this.appService.getIsnotInitialized());
        // const obs = Observable.of(null).takeW
        // return (this.appService.getResolver());
        // return(null);
    }
}
