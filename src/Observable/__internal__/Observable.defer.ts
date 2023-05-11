import DeferredObservable_create from "../../DeferredObservable/__internal__/DeferredObservable.create.js";
import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import type * as Observable from "../../Observable.js";
import { Factory, invoke, pipe } from "../../functions.js";
import {
  DisposableLike,
  ObservableLike_observe,
  SharedObservableLike,
} from "../../types.js";

const Observable_defer: Observable.Signature["defer"] = <T>(
  factory: Factory<SharedObservableLike<T> & DisposableLike>,
) =>
  DeferredObservable_create<T>(observer => {
    pipe(
      factory(),
      Disposable_addTo(observer),
      invoke(ObservableLike_observe, observer),
    );
  });

export default Observable_defer;
