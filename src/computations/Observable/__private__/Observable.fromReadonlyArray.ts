import parseArrayBounds from "../../../__internal__/parseArrayBounds.js";
import type * as Observable from "../../Observable.js";
import { Observable_genPure } from "./Observable.gen.js";

const Observable_fromReadonlyArray: Observable.Signature["fromReadonlyArray"] =
  <T>(options?: {
    count?: number;
    start?: number;
    delay: number;
    delayStart: boolean;
  }) =>
  (arr: readonly T[]) =>
    Observable_genPure<T>(function* ObservableFromReadonlyArray() {
      let [start, count] = parseArrayBounds(arr, options);

      while (count !== 0) {
        yield arr[start];
        count > 0 ? (start++, count--) : (start--, count++);
      }
    }, options);

export default Observable_fromReadonlyArray;
