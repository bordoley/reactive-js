import { SideEffect1, Updater } from "../../../functions.js";
import { DisposableLike } from "../../../util.js";
declare const DisposableLike__onError: <T extends DisposableLike>(teardown: SideEffect1<Error>) => Updater<T>;
export { DisposableLike__onError as default };
