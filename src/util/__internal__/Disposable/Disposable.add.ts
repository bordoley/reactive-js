import { DisposableLike } from "../../../util";
import addDisposableOrTeardown from "./Disposable.addDisposableOrTeardown";

const Disposable_add =
  <T extends DisposableLike>(child: DisposableLike) =>
  (parent: T): T => {
    addDisposableOrTeardown(parent, child);
    return parent;
  };

export default Disposable_add;
