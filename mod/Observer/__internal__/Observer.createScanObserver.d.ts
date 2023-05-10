import { Factory, Reducer } from "../../functions.js";
import { ObserverLike } from "../../types.js";
declare const Observer_createScanObserver: <T, TAcc>(delegate: ObserverLike<TAcc>, reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) => ObserverLike<T>;
export default Observer_createScanObserver;
