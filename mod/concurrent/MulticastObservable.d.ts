import { ConcurrentReactiveComputationModule } from "../computations.js";
import { MulticastObservableLike } from "../concurrent.js";
import { ObservableComputationFor } from "./Observable.js";
export interface MulticastObservableModule extends ConcurrentReactiveComputationModule<ObservableComputationFor<MulticastObservableLike>> {
}
export type Signature = MulticastObservableModule;
export declare const fromPromise: Signature["fromPromise"];
export declare const keep: Signature["keep"];
export declare const map: Signature["map"];
export declare const mergeMany: Signature["mergeMany"];
