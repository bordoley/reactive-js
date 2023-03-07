import { SideEffect1, error } from "../../../functions.js";
import { DisposableLike, DisposableLike_dispose } from "../../../util.js";

const Disposable_toErrorHandler =
  (disposable: DisposableLike): SideEffect1<unknown> =>
  e =>
    disposable[DisposableLike_dispose](error(e));

export default Disposable_toErrorHandler;
