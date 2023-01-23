import { Factory } from "../../../functions.js";
import { RunnableLike } from "../../../rx.js";
import { DisposableOrTeardown } from "../../../util.js";
declare const RunnableLike__onRun: <T>(f: Factory<DisposableOrTeardown | void>) => (runnable: RunnableLike<T>) => RunnableLike<T>;
export { RunnableLike__onRun as default };
