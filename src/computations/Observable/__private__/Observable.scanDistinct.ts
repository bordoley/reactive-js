import {
  PureObservableLike,
  SourceLike_subscribe,
} from "../../../computations.js";
import {
  Equality,
  Factory,
  Reducer,
  pipe,
  returns,
} from "../../../functions.js";
import { ObserverLike } from "../../../utils.js";
import Computation_startWith from "../../Computation/__private__/Computation.startWith.js";
import * as Computation from "../../Computation.js";
import type * as Observable from "../../Observable.js";
import * as DeferredSource from "../../__internal__/DeferredSource.js";
import Observable_concat from "./Observable.concat.js";
import Observable_distinctUntilChanged from "./Observable.distinctUntilChanged.js";
import { Observable_genPure } from "./Observable.gen.js";
import Observable_scan from "./Observable.scan.js";

const m = Computation.makeModule<Observable.Computation>()({
  concat: Observable_concat,
  genPure: Observable_genPure,
});

const Observable_scanDistinct: Observable.Signature["scanDistinct"] = (<
    T,
    TAcc,
  >(
    reducer: Reducer<T, TAcc>,
    initialState: Factory<TAcc>,
    options?: { readonly equality?: Equality<TAcc> },
  ) =>
  (source: PureObservableLike<T>) =>
    DeferredSource.create(
      (observer: ObserverLike<TAcc>) => {
        const acc: TAcc = initialState();

        const lifted = pipe(
          source,
          Observable_scan<T, TAcc>(reducer, returns(acc)),
          Computation_startWith(m)<TAcc>(acc),
          x => x,
          Observable_distinctUntilChanged<TAcc>(options),
        );

        lifted[SourceLike_subscribe](observer);
      },

      source,
    )) as Observable.Signature["scanDistinct"];

export default Observable_scanDistinct;
