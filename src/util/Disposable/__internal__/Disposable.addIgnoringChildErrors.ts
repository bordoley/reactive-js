import { DisposableLike, DisposableLike_add } from "../../../util.js";

const Disposable_addIgnoringChildErrors =
  <T extends DisposableLike>(child: DisposableLike) =>
  (parent: T): T => {
    parent[DisposableLike_add](child);
    return parent;
  };

export default Disposable_addIgnoringChildErrors;
