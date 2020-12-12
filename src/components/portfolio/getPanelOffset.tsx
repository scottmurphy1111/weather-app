import { BehaviorSubject, fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";

const bgOverlay$ = new BehaviorSubject<any>(null);

export function getPanelOffset(panel: string) {
  const section = document.querySelector(panel);
  
  if (section) {
    const panelOffset = (section as HTMLElement).offsetTop - 350;
    return panelOffset;
  } else {
    return 0;
  }  
}

export function monitorScrolling$(panel: string, bgColorValue: string) {
  return fromEvent(window, 'scroll').pipe(
    map(() => window.pageYOffset > getPanelOffset(panel)),
    tap(() => {
      bgOverlay$.next(document.querySelector('.bg-overlay'));
      bgOverlay$.value.style.backgroundColor = bgColorValue;
    })
  )
}