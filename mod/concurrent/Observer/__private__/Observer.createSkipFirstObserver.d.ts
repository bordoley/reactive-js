import { ObserverLike } from "../../../concurrent.js";
declare const Observer_createSkipFirstObserver: <T>(delegate: ObserverLike<T>, count: number) => ObserverLike<T>;
export default Observer_createSkipFirstObserver;
