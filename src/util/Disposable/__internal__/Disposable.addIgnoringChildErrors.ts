import { DisposableLike } from "../../../util.js";
import Disposable_addDisposableOrTeardown from "./Disposable.addDisposableOrTeardown.js";

const Disposable_addIgnoringChildErrors =
  <T extends DisposableLike>(child: DisposableLike) =>
  (parent: T): T => {
    Disposable_addDisposableOrTeardown(parent, child, true);
    return parent;
  };

export default Disposable_addIgnoringChildErrors;
