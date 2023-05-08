import { DisposableLike } from "../../../core.js";
import Disposable_addChildToParent from "./Disposable.addChildToParent.js";

const Disposable_add =
  <T extends DisposableLike>(
    child: DisposableLike,
    options?: { readonly ignoreChildErrors?: boolean },
  ) =>
  (parent: T): T => {
    Disposable_addChildToParent(parent, child, options);
    return parent;
  };

export default Disposable_add;
