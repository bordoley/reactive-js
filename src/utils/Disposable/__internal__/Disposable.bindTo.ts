import { DisposableLike, DisposableLike_add } from "../../../utils.js";
import type * as Disposable from "../../Disposable.js";

const Disposable_bindTo: Disposable.Signature["bindTo"] =
  <TDisposable extends DisposableLike>(child: DisposableLike) =>
  (parent: TDisposable) => {
    parent[DisposableLike_add](child);
    child[DisposableLike_add](parent);
    return parent;
  };

export default Disposable_bindTo;
