import { ObserverLike } from "../../../concurrent.js";
import { Factory, Reducer } from "../../../functions.js";
declare const Observer_createScanObserver: <T, TAcc>(delegate: ObserverLike<TAcc>, reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) => ObserverLike<T>;
export default Observer_createScanObserver;
