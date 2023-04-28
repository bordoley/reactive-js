import { Updater } from "../../../functions.js";
import { DisposableLike } from "../../../util.js";
import Disposable_addChildToParent from "./Disposable.addChildToParent.js";

const Disposable_addTo =
  <T extends DisposableLike>(
    parent: DisposableLike,
    options?: { readonly ignoreChildErrors?: boolean },
  ): Updater<T> =>
  (child: T): T => {
    Disposable_addChildToParent(parent, child, options);
    return child;
  };

export default Disposable_addTo;
