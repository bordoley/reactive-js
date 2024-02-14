import { bindMethod, newInstance, pipe } from "../../../functions.js";
import { DisposableContainerLike } from "../../../utils.js";
import type * as DisposableContainer from "../../DisposableContainer.js";
import DisposableContainer_onDisposed from "./DisposableContainer.onDisposed.js";

const DisposableContainer_toAbortSignal: DisposableContainer.Signature["toAbortSignal"] =
  (disposable: DisposableContainerLike): AbortSignal => {
    const abortController: AbortController = newInstance(AbortController);
    pipe(
      disposable,
      DisposableContainer_onDisposed(bindMethod(abortController, "abort")),
    );
    return abortController.signal;
  };

export default DisposableContainer_toAbortSignal;
