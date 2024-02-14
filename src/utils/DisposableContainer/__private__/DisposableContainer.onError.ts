import { SideEffect1, Updater, isSome } from "../../../functions.js";
import {
  DisposableContainerLike,
  DisposableContainerLike_add,
} from "../../../utils.js";
import type * as DisposableContainer from "../../DisposableContainer.js";

const DisposableContainer_onError: DisposableContainer.Signature["onError"] =
  <T extends DisposableContainerLike>(
    teardown: SideEffect1<Error>,
  ): Updater<T> =>
  disposable => {
    disposable[DisposableContainerLike_add](e => {
      if (isSome(e)) {
        teardown(e);
      }
    });
    return disposable;
  };

export default DisposableContainer_onError;
