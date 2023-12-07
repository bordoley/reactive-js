import { Equality, Factory, Updater } from "../../../functions.js";
declare const Observable_stateStore: <T>(initialState: Factory<T>, options?: {
    readonly equality?: Equality<T> | undefined;
} | undefined) => (obs: import("../../../concurrent.js").ObservableLike<Updater<T>>) => import("../../../concurrent.js").DeferredSideEffectsObservableLike<T>;
export default Observable_stateStore;
