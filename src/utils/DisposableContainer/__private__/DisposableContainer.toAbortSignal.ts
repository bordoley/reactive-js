import { bindMethod, newInstance, pipe } from "../../../functions.js";
import { DisposableContainerLike } from "../../../utils.js";
import type * as DisposableContainer from "../../DisposableContainer.js";
import DisposableContainer_onDisposed from "./DisposableContainer.onDisposed.js";

const DisposableContainer_toAbortSignal: DisposableContainer.Signature["toAbortSignal"] =
  /*@__PURE__*/ (() => {
    const abortSignalCache: WeakMap<DisposableContainerLike, AbortSignal> =
      newInstance<WeakMap<DisposableContainerLike, AbortSignal>>(WeakMap);

    return (disposable: DisposableContainerLike): AbortSignal =>
      abortSignalCache.get(disposable) ??
      (() => {
        const abortController: AbortController = newInstance(AbortController);
        pipe(
          disposable,
          DisposableContainer_onDisposed(bindMethod(abortController, "abort")),
        );
        const abortSignal = abortController.signal;
        abortSignalCache.set(disposable, abortSignal);
        return abortSignal;
      })();
  })();

export default DisposableContainer_toAbortSignal;
