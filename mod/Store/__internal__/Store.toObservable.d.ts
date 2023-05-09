import { StoreLike } from "../../types.js";
declare const Store_toObservable: <T>() => (store: StoreLike<T>) => import("../../types.js").ObservableLike<T>;
export default Store_toObservable;
