import { newInstance, pipe } from "../../../functions.js";
import { DisposableLike } from "../../../util.js";
import Disposable_onDisposed from "./Disposable.onDisposed.js";

const Disposable_toAbortSignal = (disposable: DisposableLike): AbortSignal => {
  const abortController: AbortController = newInstance(AbortController);
  pipe(
    disposable,
    Disposable_onDisposed(abortController.abort, abortController),
  );
  return abortController.signal;
};

export default Disposable_toAbortSignal;
