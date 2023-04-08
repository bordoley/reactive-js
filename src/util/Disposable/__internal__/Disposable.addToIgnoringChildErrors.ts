import { Updater } from "../../../functions.js";
import { DisposableLike, DisposableLike_add } from "../../../util.js";

const Disposable_addToIgnoringChildErrors =
  <T extends DisposableLike>(parent: DisposableLike): Updater<T> =>
  (child: T): T => {
    parent[DisposableLike_add](child);
    return child;
  };

export default Disposable_addToIgnoringChildErrors;
