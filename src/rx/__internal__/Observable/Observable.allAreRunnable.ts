import ReadonlyArray$every from "../../../containers/__internal__/ReadonlyArray/ReadonlyArray.every";
import ReadonlyArray$map from "../../../containers/__internal__/ReadonlyArray/ReadonlyArray.map";
import { compose, isTrue } from "../../../functions";
import Observable$isRunnable from "./Observable.isRunnable";

const Observable$allAreRunnable = compose(
  ReadonlyArray$map(Observable$isRunnable),
  ReadonlyArray$every(isTrue),
);

export default Observable$allAreRunnable;
