import DeferredObservable_create from "../../DeferredObservable/__internal__/DeferredObservable.create.js";
import type * as Observable from "../../Observable.js";
import { Factory, invoke, pipe } from "../../functions.js";
import {
  MulticastObservableLike,
  ObservableLike_observe,
} from "../../types.js";

const Observable_defer: Observable.Signature["defer"] = <T>(
  factory: Factory<MulticastObservableLike<T>>,
) =>
  DeferredObservable_create<T>(observer => {
    pipe(factory(), invoke(ObservableLike_observe, observer));
  });

export default Observable_defer;
