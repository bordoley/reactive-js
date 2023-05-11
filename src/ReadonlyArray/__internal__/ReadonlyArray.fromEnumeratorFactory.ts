import { Factory } from "../../functions.js";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_move,
} from "../../types.js";
import type * as ReadonlyArray from "./../../ReadonlyArray.js";

const ReadonlyArray_fromEnumeratorFactory: ReadonlyArray.Signature["fromEnumeratorFactory"] =

    <T>() =>
    (factory: Factory<EnumeratorLike<T>>) => {
      const result: T[] = [];

      const enumerator = factory();
      while (enumerator[EnumeratorLike_move]()) {
        result.push(enumerator[EnumeratorLike_current]);
      }

      return result;
    };

export default ReadonlyArray_fromEnumeratorFactory;
