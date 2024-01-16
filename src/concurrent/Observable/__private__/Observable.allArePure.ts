import { Array_every, Array_map } from "../../../__internal__/constants.js";
import { ObservableLike, ObservableLike_isPure } from "../../../concurrent.js";
import { TypePredicate, isTrue } from "../../../functions.js";
import Observable_isPure from "./Observable.isPure.js";

const Observable_allArePure = (observables =>
  observables[Array_map](Observable_isPure)[Array_every](
    isTrue,
  )) as TypePredicate<
  ReadonlyArray<ObservableLike>,
  ReadonlyArray<
    ObservableLike & {
      [ObservableLike_isPure]: true;
    }
  >
>;

export default Observable_allArePure;
