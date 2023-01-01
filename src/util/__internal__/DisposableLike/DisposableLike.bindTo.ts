import { Updater } from "../../../functions";
import { DisposableLike } from "../../../util";
import addDisposableOrTeardown from "./DisposableLike.addDisposableOrTeardown";

const DisposableLike__bindTo =
  <T extends DisposableLike>(child: DisposableLike): Updater<T> =>
  (parent: T): T => {
    addDisposableOrTeardown(parent, child);
    addDisposableOrTeardown(child, parent);
    return parent;
  };

export default DisposableLike__bindTo;
