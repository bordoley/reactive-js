import { Factory } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import { DisposableOrTeardown } from "../../../util.js";
declare const Observable$onSubscribe: <T>(f: Factory<DisposableOrTeardown | void>) => (obs: ObservableLike<T>) => ObservableLike<T>;
export { Observable$onSubscribe as default };
