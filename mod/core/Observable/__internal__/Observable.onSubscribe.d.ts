import { DisposableOrTeardown, ObservableLike } from "../../../core.js";
import { Factory } from "../../../functions.js";
declare const Observable_onSubscribe: <T>(f: Factory<DisposableOrTeardown | void>) => (obs: ObservableLike<T>) => ObservableLike<T>;
export default Observable_onSubscribe;
