import { Array_every, Array_map } from "../../../__internal__/constants.js";
import * as Computation from "../../../computations/Computation.js";
import {
  ComputationLike_isDeferred,
  ComputationLike_isSynchronous,
} from "../../../computations.js";
import { ObservableLike } from "../../../concurrent.js";
import { TypePredicate, isTrue } from "../../../functions.js";

const Observable_allAreRunnable = (observables =>
  observables[Array_map](Computation.isSynchronous)[Array_every](
    isTrue,
  )) as TypePredicate<
  ReadonlyArray<ObservableLike>,
  ReadonlyArray<
    ObservableLike & {
      [ComputationLike_isDeferred]: true;
      [ComputationLike_isSynchronous]: true;
    }
  >
>;

export default Observable_allAreRunnable;
