import { SideEffect1, error, pipe } from "../../../functions";
import { DisposableLike } from "../../../util";
import dispose from "./Disposable.dispose";

const Disposable_toErrorHandler =
  (disposable: DisposableLike): SideEffect1<unknown> =>
  e =>
    pipe(disposable, dispose(error(e)));

export default Disposable_toErrorHandler;
