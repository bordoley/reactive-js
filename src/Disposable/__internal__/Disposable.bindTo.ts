import type * as Disposable from "../../Disposable.js";
import { DisposableLike, DisposableLike_add } from "../../types.js";

const Disposable_bindTo: Disposable.Signature["bindTo"] =
  <TDisposable extends DisposableLike>(child: DisposableLike) =>
  (parent: TDisposable) => {
    parent[DisposableLike_add](child);
    child[DisposableLike_add](parent);
    return parent;
  };

export default Disposable_bindTo;
