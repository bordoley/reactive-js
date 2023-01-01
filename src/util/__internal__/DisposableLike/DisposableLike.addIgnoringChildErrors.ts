import { DisposableLike } from "../../../util";
import addDisposableOrTeardown from "./DisposableLike.addDisposableOrTeardown";

const DisposableLike__addIgnoringChildErrors =
  <T extends DisposableLike>(child: DisposableLike) =>
  (parent: T): T => {
    addDisposableOrTeardown(parent, child, true);
    return parent;
  };

export default DisposableLike__addIgnoringChildErrors;
