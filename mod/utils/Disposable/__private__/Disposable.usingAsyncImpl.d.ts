import { Factory } from "../../../functions.js";
import { DisposableLike } from "../../../utils.js";
declare const Disposable_usingAsyncImpl: (f: (...args: DisposableLike[]) => unknown, factoryOrDisposables: readonly (DisposableLike | Factory<DisposableLike>)[]) => Promise<unknown>;
export default Disposable_usingAsyncImpl;
