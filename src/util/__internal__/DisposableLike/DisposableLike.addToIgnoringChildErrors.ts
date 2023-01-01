import { Updater } from "../../../functions";
import { DisposableLike } from "../../../util";
import addDisposableOrTeardown from "./DisposableLike.addDisposableOrTeardown";

const DisposableLike__addToIgnoringChildErrors =
  <T extends DisposableLike>(parent: DisposableLike): Updater<T> =>
  (child: T): T => {
    addDisposableOrTeardown(parent, child, true);
    return child;
  };

export default DisposableLike__addToIgnoringChildErrors;
