import { ObserverLike } from "../../../concurrent.js";
declare const Observer_assertObserverState: <TThis extends ObserverLike<T>, T>(notify: (this: TThis, next: T) => void) => (this: TThis, next: T) => void;
export default Observer_assertObserverState;
