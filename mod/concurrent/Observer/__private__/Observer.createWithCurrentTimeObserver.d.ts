import { ObserverLike } from "../../../concurrent.js";
import { Function2 } from "../../../functions.js";
declare const Observer_createWithCurrentTimeObserver: <TA, TB>(delegate: ObserverLike<TB>, selector: Function2<number, TA, TB>) => ObserverLike<TA>;
export default Observer_createWithCurrentTimeObserver;
