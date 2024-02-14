import { DisposableContainerLike_add, DisposableLike } from "../../../utils.js";
import type * as Disposable from "../../Disposable.js";

const Disposable_bindTo: Disposable.Signature["bindTo"] =
  <TDisposable extends DisposableLike>(child: DisposableLike) =>
  (parent: TDisposable) => {
    parent[DisposableContainerLike_add](child);
    child[DisposableContainerLike_add](parent);
    return parent;
  };

export default Disposable_bindTo;
