import { Updater } from "../../../functions.js";
import { DisposableLike, DisposableLike_dispose } from "../../../util.js";

const Disposable_dispose =
  <T extends DisposableLike>(e?: Error): Updater<T> =>
  disposable => {
    disposable[DisposableLike_dispose](e);
    return disposable;
  };

export default Disposable_dispose;
