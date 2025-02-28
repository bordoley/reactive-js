import { Array_every, Array_map } from "../../../__internal__/constants.js";
import * as Computation from "../../../computations/Computation.js";
import {
  MulticastObservableLike,
  ObservableLike,
} from "../../../concurrent.js";
import { TypePredicate, isTrue } from "../../../functions.js";

const Observable_allAreMulticasted = (observables =>
  observables[Array_map](Computation.isMulticasted)[Array_every](
    isTrue,
  )) as TypePredicate<
  ReadonlyArray<ObservableLike>,
  ReadonlyArray<MulticastObservableLike>
>;

export default Observable_allAreMulticasted;
