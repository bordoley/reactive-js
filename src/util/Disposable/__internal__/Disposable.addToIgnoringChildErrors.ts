import { Updater } from "../../../functions.js";
import { DisposableLike } from "../../../util.js";
import Disposable_addDisposableOrTeardown from "./Disposable.addDisposableOrTeardown.js";

const Disposable_addToIgnoringChildErrors =
  <T extends DisposableLike>(parent: DisposableLike): Updater<T> =>
  (child: T): T => {
    Disposable_addDisposableOrTeardown(parent, child, true);
    return child;
  };

export default Disposable_addToIgnoringChildErrors;
