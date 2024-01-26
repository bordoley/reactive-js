import { Factory } from "../../../functions.js";
import { DisposableLike } from "../../../utils.js";
declare const Disposable_usingAsyncImpl: (f: (...args: DisposableLike[]) => Promise<unknown>, factories: readonly Factory<DisposableLike>[]) => Promise<unknown>;
export default Disposable_usingAsyncImpl;
