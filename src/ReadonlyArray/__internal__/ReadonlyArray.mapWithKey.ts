import { ReadonlyArrayContainer } from "../../containers.js";
import { Function2 } from "../../functions.js";

const ReadonlyArray_mapWithKey: ReadonlyArrayContainer.TypeClass["mapWithKey"] =

    <
      TA,
      TB,
      TKey extends ReadonlyArrayContainer.TKey = ReadonlyArrayContainer.TKey,
    >(
      selector: Function2<TA, TKey, TB>,
    ) =>
    (arr: readonly TA[]): readonly TB[] =>
      arr.map(selector as Function2<TA, number, TB>);

export default ReadonlyArray_mapWithKey;
