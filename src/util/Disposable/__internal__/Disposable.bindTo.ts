import { Updater } from "../../../functions.js";
import { DisposableLike } from "../../../util.js";
import Disposable_addDisposableOrTeardown from "./Disposable.addDisposableOrTeardown.js";

const Disposable_bindTo =
  <T extends DisposableLike>(child: DisposableLike): Updater<T> =>
  (parent: T): T => {
    Disposable_addDisposableOrTeardown(parent, child);
    Disposable_addDisposableOrTeardown(child, parent);
    return parent;
  };

export default Disposable_bindTo;
