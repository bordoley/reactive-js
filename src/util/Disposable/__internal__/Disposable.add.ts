import { DisposableLike } from "../../../util.js";
import addDisposableOrTeardown from "./Disposable.addDisposableOrTeardown.js";

const Disposable_add =
  <T extends DisposableLike>(child: DisposableLike) =>
  (parent: T): T => {
    addDisposableOrTeardown(parent, child);
    return parent;
  };

export default Disposable_add;
