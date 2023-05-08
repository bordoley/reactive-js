import { DisposableLike, DisposableLike_add } from "../../../core.js";
import { Updater } from "../../../functions.js";

const Disposable_bindTo =
  <T extends DisposableLike>(child: DisposableLike): Updater<T> =>
  (parent: T): T => {
    parent[DisposableLike_add](child);
    child[DisposableLike_add](parent);
    return parent;
  };

export default Disposable_bindTo;
