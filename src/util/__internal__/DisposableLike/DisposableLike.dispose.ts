import { Updater } from "../../../functions";
import { DisposableLike, DisposableLike_dispose } from "../../../util";

const DisposableLike__dispose =
  <T extends DisposableLike>(e?: Error): Updater<T> =>
  disposable => {
    disposable[DisposableLike_dispose](e);
    return disposable;
  };

export default DisposableLike__dispose;
