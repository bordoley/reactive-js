import { hasOwn } from "../../__internal__/Object.js";
import {
  KeyedContainers,
  ReadonlyObjectMapContainer,
} from "../../containers.js";
import { Factory, Function3 } from "../../functions.js";
import { ReadonlyObjectMapLike } from "../../types.js";

const ReadonlyObjectMap_reduceWithKey: KeyedContainers.TypeClass<ReadonlyObjectMapContainer>["reduceWithKey"] =

    <
      T,
      TAcc,
      TKey extends KeyedContainers.KeyOf<ReadonlyObjectMapContainer> = KeyedContainers.KeyOf<ReadonlyObjectMapContainer>,
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
