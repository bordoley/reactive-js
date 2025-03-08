import {
  MulticastObservableLike,
  ObservableLike_observe,
} from "../../../computations.js";
import { Factory, invoke, pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import { DisposableLike } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import Observable_createPureDeferredObservable from "./Observable.createPureDeferredObservable.js";

const Observable_defer: Observable.Signature["defer"] = <T>(
  factory: Factory<MulticastObservableLike<T> & DisposableLike>,
) =>
  Observable_createPureDeferredObservable<T>(observer => {
    pipe(
      factory(),
      Disposable.addTo(observer),
      invoke(ObservableLike_observe, observer),
    );
  });

export default Observable_defer;
