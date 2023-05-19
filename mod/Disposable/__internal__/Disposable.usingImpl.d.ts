import { Factory } from "../../functions.js";
import { DisposableLike } from "../../types.js";
declare const Disposable_usingImpl: (f: (...args: DisposableLike[]) => unknown, factoryOrDisposables: readonly (DisposableLike | Factory<DisposableLike>)[]) => unknown;
export default Disposable_usingImpl;
