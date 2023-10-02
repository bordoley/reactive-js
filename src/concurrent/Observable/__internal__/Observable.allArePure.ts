import { ObservableLike, ObservableLike_isPure } from "../../../concurrent.js";
import { TypePredicate, isTrue } from "../../../functions.js";
import Observable_isPure from "./Observable.isPure.js";

const Observable_allArePure = (observables =>
  observables.map(Observable_isPure).every(isTrue)) as TypePredicate<
  ReadonlyArray<ObservableLike>,
  ReadonlyArray<
    ObservableLike & {
      [ObservableLike_isPure]: true;
    }
  >
>;

export default Observable_allArePure;
