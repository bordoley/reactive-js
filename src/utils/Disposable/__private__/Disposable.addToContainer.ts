import {
  DisposableContainerLike,
  DisposableContainerLike_add,
  DisposableLike,
} from "../../../utils.js";
import type * as Disposable from "../../Disposable.js";

const Disposable_addToContainer: Disposable.Signature["addToContainer"] =
  <T extends DisposableLike>(parent: DisposableContainerLike) =>
  (child: T): T => {
    parent[DisposableContainerLike_add](child);
    return child;
  };

export default Disposable_addToContainer;
