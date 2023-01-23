import { SideEffect1, Updater } from "../../../functions.mjs";
import { DisposableLike } from "../../../util.mjs";
declare const DisposableLike__onError: <T extends DisposableLike>(teardown: SideEffect1<Error>) => Updater<T>;
export { DisposableLike__onError as default };
