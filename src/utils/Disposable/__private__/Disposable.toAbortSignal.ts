import { bindMethod, newInstance, pipe } from "../../../functions.js";
import { DisposableLike } from "../../../utils.js";
import type * as Disposable from "../../Disposable.js";
import Disposable_onDisposed from "./Disposable.onDisposed.js";

const Disposable_toAbortSignal: Disposable.Signature["toAbortSignal"] = (
  disposable: DisposableLike,
): AbortSignal => {
  const abortController: AbortController = newInstance(AbortController);
  pipe(disposable, Disposable_onDisposed(bindMethod(abortController, "abort")));
  return abortController.signal;
};

export default Disposable_toAbortSignal;
