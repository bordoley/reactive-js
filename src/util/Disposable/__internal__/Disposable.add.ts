import { bindMethod, pipe } from "../../../functions.js";
import {
  DisposableLike,
  DisposableLike_add,
  DisposableLike_dispose,
} from "../../../util.js";
import Disposable_onError from "./Disposable.onError.js";

const Disposable_add =
  <T extends DisposableLike>(child: DisposableLike) =>
  (parent: T): T => {
    parent[DisposableLike_add](child);
    pipe(child, Disposable_onError(bindMethod(parent, DisposableLike_dispose)));
    return parent;
  };

export default Disposable_add;
