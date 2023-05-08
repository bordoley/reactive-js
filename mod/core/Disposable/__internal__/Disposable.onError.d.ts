import { DisposableLike } from "../../../core.js";
import { SideEffect1, Updater } from "../../../functions.js";
declare const Disposable_onError: <T extends DisposableLike>(teardown: SideEffect1<Error>) => Updater<T>;
export default Disposable_onError;
