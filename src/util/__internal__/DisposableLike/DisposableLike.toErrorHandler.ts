import { SideEffect1, pipe } from "../../../functions";
import { DisposableLike } from "../../../util";
import dispose from "./DisposableLike.dispose";

const toErrorHandler =
  (disposable: DisposableLike): SideEffect1<unknown> =>
  cause =>
    pipe(disposable, dispose({ cause }));

export default toErrorHandler;
