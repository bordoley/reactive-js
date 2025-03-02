import { ConcurrentReactiveComputationModule } from "../computations.js";
import { MulticastObservableLike } from "../concurrent.js";
import { ObservableComputationFor } from "./Observable.js";
import * as Observable from "./Observable.js";

export interface MulticastObservableModule
  extends ConcurrentReactiveComputationModule<
    ObservableComputationFor<MulticastObservableLike>
  > {}

export type Signature = MulticastObservableModule;

export const fromPromise: Signature["fromPromise"] = Observable.fromPromise;
export const keep: Signature["keep"] = Observable.keep as Signature["keep"];
export const map: Signature["map"] = Observable.map as Signature["map"];
// FIXME: This is wrong
export const mergeMany: Signature["mergeMany"] =
  Observable.mergeMany as unknown as Signature["mergeMany"];
