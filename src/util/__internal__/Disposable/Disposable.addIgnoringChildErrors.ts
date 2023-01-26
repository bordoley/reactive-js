import { DisposableLike } from "../../../util";
import addDisposableOrTeardown from "./Disposable.addDisposableOrTeardown";

const Disposable_addIgnoringChildErrors =
  <T extends DisposableLike>(child: DisposableLike) =>
  (parent: T): T => {
    addDisposableOrTeardown(parent, child, true);
    return parent;
  };

export default Disposable_addIgnoringChildErrors;
