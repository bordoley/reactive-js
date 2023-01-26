import { Updater } from "../../../functions";
import { DisposableLike } from "../../../util";
import addDisposableOrTeardown from "./Disposable.addDisposableOrTeardown";

const Disposable_addTo =
  <T extends DisposableLike>(parent: DisposableLike): Updater<T> =>
  (child: T): T => {
    addDisposableOrTeardown(parent, child);
    return child;
  };

export default Disposable_addTo;
