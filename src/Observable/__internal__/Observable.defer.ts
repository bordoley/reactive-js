import type * as Observable from "../../Observable.js";
import Observable_create from "../../Observable/__internal__/Observable.create.js";
import { Factory, invoke, pipe } from "../../functions.js";
import {
  MulticastObservableLike,
  ObservableLike_observe,
} from "../../types.js";

const Observable_defer: Observable.Signature["defer"] = <T>(
  factory: Factory<MulticastObservableLike<T>>,
) =>
  Observable_create<T>(observer => {
    pipe(factory(), invoke(ObservableLike_observe, observer));
  });

export default Observable_defer;
