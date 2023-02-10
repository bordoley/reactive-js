import { Map, ReadonlyArrayLike } from "../../../containers";
import { Function1 } from "../../../functions";

const ReadonlyArray_map: Map<ReadonlyArrayLike>["map"] =
  <TA, TB>(mapper: Function1<TA, TB>) =>
  (arr: readonly TA[]): readonly TB[] =>
    arr.map(mapper);

export default ReadonlyArray_map;
