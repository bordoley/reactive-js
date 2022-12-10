import { Updater } from "../../../functions";
import {
  DisposableLike,
  DisposableLike_dispose,
  Exception,
} from "../../../util";

const dispose =
  <T extends DisposableLike>(e?: Exception): Updater<T> =>
  disposable => {
    disposable[DisposableLike_dispose](e);
    return disposable;
  };

export default dispose;
