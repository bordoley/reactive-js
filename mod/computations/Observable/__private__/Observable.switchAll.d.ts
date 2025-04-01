import { EventSourceLike } from "../../../computations.js";
import { ObserverLike } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
export declare const createSwitchAllObserver: <TInnerSource extends EventSourceLike<T, ObserverLike<T>>, T>(delegate: ObserverLike<T>) => ObserverLike<TInnerSource>;
declare const Observable_switchAll: Observable.Signature["switchAll"];
export default Observable_switchAll;
