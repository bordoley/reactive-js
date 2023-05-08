import { ObserverLike } from "../../../core.js";
import { Function1 } from "../../../functions.js";
declare const Observer_createMapObserver: <TA, TB>(delegate: ObserverLike<TB>, selector: Function1<TA, TB>) => ObserverLike<TA>;
export default Observer_createMapObserver;
