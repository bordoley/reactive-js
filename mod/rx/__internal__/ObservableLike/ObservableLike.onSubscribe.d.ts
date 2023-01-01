import { Factory } from "../../../functions.mjs";
import { ObservableLike } from "../../../rx.mjs";
import { DisposableOrTeardown } from "../../../util.mjs";
declare const ObservableLike__onSubscribe: <T>(f: Factory<DisposableOrTeardown | void>) => (obs: ObservableLike<T>) => ObservableLike<T>;
export { ObservableLike__onSubscribe as default };
