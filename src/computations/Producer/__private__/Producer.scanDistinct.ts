import {
  PureProducerLike,
  ReactiveSourceLike_subscribe,
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
import type * as Producer from "../../Producer.js";
import * as DeferredReactiveSource from "../../__internal__/DeferredReactiveSource.js";
import Producer_concat from "./Producer.concat.js";
import Producer_distinctUntilChanged from "./Producer.distinctUntilChanged.js";
import { Producer_genPure } from "./Producer.gen.js";
import Producer_scan from "./Producer.scan.js";

const m = Computation.makeModule<Producer.Computation>()({
  concat: Producer_concat,
  genPure: Producer_genPure,
});

const Producer_scanDistinct: Producer.Signature["scanDistinct"] = (<T, TAcc>(
    reducer: Reducer<T, TAcc>,
    initialState: Factory<TAcc>,
    options?: { readonly equality?: Equality<TAcc> },
  ) =>
  (source: PureProducerLike<T>) =>
    DeferredReactiveSource.create(
      (observer: ObserverLike<TAcc>) => {
        const acc: TAcc = initialState();

        const lifted = pipe(
          source,
          Producer_scan<T, TAcc>(reducer, returns(acc)),
          Computation_startWith(m, acc),
          x => x,
          Producer_distinctUntilChanged<TAcc>(options),
        );

        lifted[ReactiveSourceLike_subscribe](observer);
      },

      source,
    )) as Producer.Signature["scanDistinct"];

export default Producer_scanDistinct;
