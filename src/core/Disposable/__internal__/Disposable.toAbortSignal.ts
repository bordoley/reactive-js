import { DisposableLike } from "../../../core.js";
import { bindMethod, newInstance, pipe } from "../../../functions.js";
import Disposable_onDisposed from "./Disposable.onDisposed.js";

const Disposable_toAbortSignal = (disposable: DisposableLike): AbortSignal => {
  const abortController: AbortController = newInstance(AbortController);
  pipe(disposable, Disposable_onDisposed(bindMethod(abortController, "abort")));
  return abortController.signal;
};

export default Disposable_toAbortSignal;
