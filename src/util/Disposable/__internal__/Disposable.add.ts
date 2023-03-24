import { DisposableLike } from "../../../util.js";
import Disposable_addDisposableOrTeardown from "./Disposable.addDisposableOrTeardown.js";

const Disposable_add =
  <T extends DisposableLike>(child: DisposableLike) =>
  (parent: T): T => {
    Disposable_addDisposableOrTeardown(parent, child);
    return parent;
  };

export default Disposable_add;
