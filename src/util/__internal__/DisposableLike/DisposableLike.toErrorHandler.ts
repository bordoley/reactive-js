import { SideEffect1, pipe } from "../../../functions";
import { DisposableLike } from "../../../util";
import dispose from "./DisposableLike.dispose";

const DisposableLike__toErrorHandler =
  (disposable: DisposableLike): SideEffect1<unknown> =>
  cause =>
    pipe(disposable, dispose({ cause }));

export default DisposableLike__toErrorHandler;
