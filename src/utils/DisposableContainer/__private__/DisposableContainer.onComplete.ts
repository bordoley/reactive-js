import { SideEffect, Updater, isNone } from "../../../functions.js";
import {
  DisposableContainerLike,
  DisposableContainerLike_add,
} from "../../../utils.js";
import type * as DisposableContainer from "../../DisposableContainer.js";

const DisposableContainer_onComplete: DisposableContainer.Signature["onComplete"] =

    <T extends DisposableContainerLike>(teardown: SideEffect): Updater<T> =>
    disposable => {
      disposable[DisposableContainerLike_add](e => {
        if (isNone(e)) {
          teardown();
        }
      });
      return disposable;
    };

export default DisposableContainer_onComplete;
