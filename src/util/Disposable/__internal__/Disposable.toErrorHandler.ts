import { SideEffect1, error, pipe } from "../../../functions.js";
import { DisposableLike } from "../../../util.js";
import dispose from "./Disposable.dispose.js";

const Disposable_toErrorHandler =
  (disposable: DisposableLike): SideEffect1<unknown> =>
  e =>
    pipe(disposable, dispose(error(e)));

export default Disposable_toErrorHandler;
