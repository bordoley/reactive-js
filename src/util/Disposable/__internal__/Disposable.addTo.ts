import { Updater, bindMethod, pipe } from "../../../functions.js";
import {
  DisposableLike,
  DisposableLike_add,
  DisposableLike_dispose,
} from "../../../util.js";
import Disposable_onError from "./Disposable.onError.js";

const Disposable_addTo =
  <T extends DisposableLike>(parent: DisposableLike): Updater<T> =>
  (child: T): T => {
    parent[DisposableLike_add](child);
    pipe(child, Disposable_onError(bindMethod(parent, DisposableLike_dispose)));
    return child;
  };

export default Disposable_addTo;
