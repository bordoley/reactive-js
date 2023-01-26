import ReadonlyArray_every from "../../../containers/__internal__/ReadonlyArray/ReadonlyArray.every";
import ReadonlyArray_map from "../../../containers/__internal__/ReadonlyArray/ReadonlyArray.map";
import { compose, isTrue } from "../../../functions";
import Observable_isRunnable from "./Observable.isRunnable";

const Observable_allAreRunnable = compose(
  ReadonlyArray_map(Observable_isRunnable),
  ReadonlyArray_every(isTrue),
);

export default Observable_allAreRunnable;
