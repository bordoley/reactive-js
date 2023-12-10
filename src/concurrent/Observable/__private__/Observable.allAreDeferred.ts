import {
  ObservableLike,
  ObservableLike_isDeferred,
} from "../../../concurrent.js";
import { TypePredicate, isTrue } from "../../../functions.js";
import Observable_isDeferred from "./Observable.isDeferred.js";

const Observable_allAreDeferred = (observables =>
  observables.map(Observable_isDeferred).every(isTrue)) as TypePredicate<
  ReadonlyArray<ObservableLike>,
  ReadonlyArray<
    ObservableLike & {
      [ObservableLike_isDeferred]: true;
    }
  >
>;

export default Observable_allAreDeferred;
