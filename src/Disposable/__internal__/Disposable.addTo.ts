import type * as Disposable from "../../Disposable.js";
import { DisposableLike } from "../../types.js";
import Disposable_addChildToParent from "./Disposable.addChildToParent.js";

const Disposable_addTo: Disposable.Signature["addTo"] =
  <T extends DisposableLike>(
    parent: DisposableLike,
    options?: { readonly ignoreChildErrors?: boolean },
  ) =>
  (child: T): T => {
    Disposable_addChildToParent(parent, child, options);
    return child;
  };

export default Disposable_addTo;
