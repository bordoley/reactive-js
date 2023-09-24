import { DisposableLike } from "../../../utils.js";
import type * as Disposable from "../../Disposable.js";
import Disposable_addChildToParent from "./Disposable.addChildToParent.js";

const Disposable_add: Disposable.Signature["add"] =
  <T extends DisposableLike>(
    child: DisposableLike,
    options?: { readonly ignoreChildErrors?: boolean },
  ) =>
  (parent: T): T => {
    Disposable_addChildToParent(parent, child, options);
    return parent;
  };

export default Disposable_add;
