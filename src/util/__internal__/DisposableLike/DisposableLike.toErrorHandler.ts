import { SideEffect1, error, pipe } from "../../../functions";
import { DisposableLike } from "../../../util";
import dispose from "./DisposableLike.dispose";

const DisposableLike__toErrorHandler =
  (disposable: DisposableLike): SideEffect1<unknown> =>
  e =>
    pipe(disposable, dispose(error(e)));

export default DisposableLike__toErrorHandler;
