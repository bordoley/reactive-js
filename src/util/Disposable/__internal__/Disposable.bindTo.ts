import { Updater, bindMethod, pipe } from "../../../functions.js";
import {
  DisposableLike,
  DisposableLike_add,
  DisposableLike_dispose,
} from "../../../util.js";
import Disposable_onError from "./Disposable.onError.js";

const Disposable_bindTo =
  <T extends DisposableLike>(child: DisposableLike): Updater<T> =>
  (parent: T): T => {
    parent[DisposableLike_add](child);
    pipe(child, Disposable_onError(bindMethod(parent, DisposableLike_dispose)));

    child[DisposableLike_add](parent);
    pipe(parent, Disposable_onError(bindMethod(child, DisposableLike_dispose)));
    return parent;
  };

export default Disposable_bindTo;
