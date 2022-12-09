import { Updater } from "../../../functions";
import { DisposableLike } from "../../../util";
import { addDisposableOrTeardown } from "./DisposableLike.addDisposableOrTeardown";

export const addToIgnoringChildErrors =
  <T extends DisposableLike>(parent: DisposableLike): Updater<T> =>
  (child: T): T => {
    addDisposableOrTeardown(parent, child, true);
    return child;
  };
