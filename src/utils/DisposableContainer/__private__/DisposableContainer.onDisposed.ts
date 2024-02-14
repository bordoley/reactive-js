import { Optional, SideEffect1, Updater } from "../../../functions.js";
import {
  DisposableContainerLike,
  DisposableContainerLike_add,
} from "../../../utils.js";
import type * as DisposableContainer from "../../DisposableContainer.js";

const DisposableContainer_onDisposed: DisposableContainer.Signature["onDisposed"] =

    <T extends DisposableContainerLike>(
      teardown: SideEffect1<Optional<Error>>,
    ): Updater<T> =>
    disposable => {
      disposable[DisposableContainerLike_add](teardown);
      return disposable;
    };

export default DisposableContainer_onDisposed;
