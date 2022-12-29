import { Factory } from "../../../functions.mjs";
import { ObservableLike } from "../../../rx.mjs";
import { DisposableOrTeardown } from "../../../util.mjs";
declare const onSubscribe: <T>(f: Factory<DisposableOrTeardown | void>) => (obs: ObservableLike<T>) => ObservableLike<T>;
export { onSubscribe as default };
