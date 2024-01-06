import {
  ObservableLike,
  ObservableLike_isMulticasted,
} from "../../../concurrent.js";
import { TypePredicate, isTrue } from "../../../functions.js";
import Observable_isMulticasted from "./Observable.isMulticasted.js";

const Observable_allAreMulticasted = (observables =>
  observables.map(Observable_isMulticasted).every(isTrue)) as TypePredicate<
  ReadonlyArray<ObservableLike>,
  ReadonlyArray<
    ObservableLike & {
      [ObservableLike_isMulticasted]: true;
    }
  >
>;

export default Observable_allAreMulticasted;
