import { StoreLike } from "../../../util.js";
declare const Store_toObservable: <T>() => (store: StoreLike<T>) => import("../../../rx.js").ObservableLike<T>;
export default Store_toObservable;
