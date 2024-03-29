import { Array_every, Array_map } from "../../../__internal__/constants.js";
import {
  ObservableLike,
  ObservableLike_isDeferred,
  ObservableLike_isRunnable,
} from "../../../concurrent.js";
import { TypePredicate, isTrue } from "../../../functions.js";
import Observable_isRunnable from "./Observable.isRunnable.js";

const Observable_allAreRunnable = (observables =>
  observables[Array_map](Observable_isRunnable)[Array_every](
    isTrue,
  )) as TypePredicate<
  ReadonlyArray<ObservableLike>,
  ReadonlyArray<
    ObservableLike & {
      [ObservableLike_isDeferred]: true;
      [ObservableLike_isRunnable]: true;
    }
  >
>;

export default Observable_allAreRunnable;
