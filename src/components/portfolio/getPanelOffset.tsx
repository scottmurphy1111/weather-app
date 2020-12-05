import { BehaviorSubject, fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";

const bgOverlay$ = new BehaviorSubject<any>(null);

export function getPanelOffset(panel: any) {
  console.log('👍 panel', panel);
  const panelOffset = document.querySelector(panel).offsetTop - 350;
  return panelOffset;
}

export function monitorScrolling$(panel: any, bgColorValue: any) {
  return fromEvent(window, 'scroll').pipe(
    map(() => window.pageYOffset > getPanelOffset(panel)),
    tap(() => {
      bgOverlay$.next(document.querySelector('.bg-overlay'));
      bgOverlay$.value.style.backgroundColor = bgColorValue;
    })
  )
}