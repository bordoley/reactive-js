import { hasOwn } from "../../../__internal__/Object.js";
import {
  KeyOf,
  KeyedContainer,
  ReadonlyObjectMapContainer,
  ReadonlyObjectMapLike,
} from "../../../containers.js";
import { Factory, Function3 } from "../../../functions.js";

const ReadonlyObjectMap_reduceWithKey: KeyedContainer.ReduceWithKey<ReadonlyObjectMapContainer>["reduceWithKey"] =

    <
      T,
      TAcc,
      TKey extends KeyOf<ReadonlyObjectMapContainer> = KeyOf<ReadonlyObjectMapContainer>,
    >(
      reducer: Function3<TAcc, T, TKey, TAcc>,
      initialValue: Factory<TAcc>,
    ) =>
    (obj: ReadonlyObjectMapLike<TKey, T>): TAcc => {
      let result = initialValue();

      for (const key in obj) {
        if (hasOwn(obj, key)) {
          result = reducer(result, obj[key as TKey] as T, key as TKey);
        }
      }
      return result;
    };

export default ReadonlyObjectMap_reduceWithKey;
