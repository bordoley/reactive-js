import { Factory } from "../../../functions.js";
import { RunnableLike } from "../../../rx.js";
import { DisposableOrTeardown } from "../../../util.js";
declare const Runnable$onRun: <T>(f: Factory<DisposableOrTeardown | void>) => (runnable: RunnableLike<T>) => RunnableLike<T>;
export { Runnable$onRun as default };
