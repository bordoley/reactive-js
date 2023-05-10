import type * as Disposable from "../../Disposable.js";
import { SideEffect1, error } from "../../functions.js";
import { DisposableLike, DisposableLike_dispose } from "../../types.js";

const Disposable_toErrorHandler: Disposable.Signature["toErrorHandler"] =
  (disposable: DisposableLike): SideEffect1<unknown> =>
  e =>
    disposable[DisposableLike_dispose](error(e));

export default Disposable_toErrorHandler;
