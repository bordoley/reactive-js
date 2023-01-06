import { Factory } from "../../../functions.mjs";
import { RunnableLike } from "../../../rx.mjs";
import { DisposableOrTeardown } from "../../../util.mjs";
declare const RunnableLike__onRun: <T>(f: Factory<DisposableOrTeardown | void>) => (runnable: RunnableLike<T>) => RunnableLike<T>;
export { RunnableLike__onRun as default };
