import { KeyedContainer, ReadonlyArrayContainer } from "../../../core.js";
import { Function2 } from "../../../functions.js";

const ReadonlyArray_mapWithKey: KeyedContainer.MapWithKey<ReadonlyArrayContainer>["mapWithKey"] =

    <
      TA,
      TB,
      TKey extends KeyedContainer.KeyOf<ReadonlyArrayContainer> = KeyedContainer.KeyOf<ReadonlyArrayContainer>,
    >(
      selector: Function2<TA, TKey, TB>,
    ) =>
    (arr: readonly TA[]): readonly TB[] =>
      arr.map(selector as Function2<TA, number, TB>);

export default ReadonlyArray_mapWithKey;
