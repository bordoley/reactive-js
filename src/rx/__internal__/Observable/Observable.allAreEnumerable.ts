import ReadonlyArray$every from "../../../containers/__internal__/ReadonlyArray/ReadonlyArray.every";
import ReadonlyArray$map from "../../../containers/__internal__/ReadonlyArray/ReadonlyArray.map";
import { compose, isTrue } from "../../../functions";
import Observable$isEnumerable from "./Observable.isEnumerable";

const Observable$allAreEnumerable = compose(
  ReadonlyArray$map(Observable$isEnumerable),
  ReadonlyArray$every(isTrue),
);

export default Observable$allAreEnumerable;
