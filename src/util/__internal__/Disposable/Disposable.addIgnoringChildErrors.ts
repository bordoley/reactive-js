import { DisposableLike } from "../../../util";
import addDisposableOrTeardown from "./Disposable.addDisposableOrTeardown";

const Disposable$addIgnoringChildErrors =
  <T extends DisposableLike>(child: DisposableLike) =>
  (parent: T): T => {
    addDisposableOrTeardown(parent, child, true);
    return parent;
  };

export default Disposable$addIgnoringChildErrors;
