import { DisposableLike } from "../../../utils.js";
import type * as Disposable from "../../Disposable.js";
import Disposable_addChildToParent from "./Disposable.addChildToParent.js";

const Disposable_addTo: Disposable.Signature["addTo"] =
  <T extends DisposableLike>(parent: DisposableLike) =>
  (child: T): T => {
    Disposable_addChildToParent(parent, child);
    return child;
  };

export default Disposable_addTo;
