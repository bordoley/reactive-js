import { SideEffect1, Updater } from "../../../functions.js";
import { DisposableLike } from "../../../util.js";
declare const Disposable_onError: <T extends DisposableLike>(teardown: SideEffect1<Error>) => Updater<T>;
export default Disposable_onError;
