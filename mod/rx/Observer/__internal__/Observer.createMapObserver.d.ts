import { Function1 } from "../../../functions.js";
import { ObserverLike } from "../../../rx.js";
declare const Observer_createMapObserver: <TA, TB>(delegate: ObserverLike<TB>, selector: Function1<TA, TB>) => ObserverLike<TA>;
export default Observer_createMapObserver;
