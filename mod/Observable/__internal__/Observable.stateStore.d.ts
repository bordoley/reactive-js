import { Equality, Factory, Updater } from "../../functions.js";
declare const Observable_stateStore: <T>(initialState: Factory<T>, options?: {
    readonly equality?: Equality<T> | undefined;
} | undefined) => (obs: import("../../types.js").DeferredObservableBaseLike<Updater<T>>) => import("../../types.js").DeferredObservableLike<T>;
export default Observable_stateStore;
