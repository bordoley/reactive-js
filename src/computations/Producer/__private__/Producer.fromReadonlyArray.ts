import parseArrayBounds from "../../../__internal__/parseArrayBounds.js";
import type * as Producer from "../../Producer.js";
import { Producer_genPure } from "./Producer.gen.js";

const Producer_fromReadonlyArray: Producer.Signature["fromReadonlyArray"] =
  <T>(options?: { count?: number; start?: number; autoDispose?: boolean }) =>
  (arr: readonly T[]) =>
    Producer_genPure(function* ProducerFromReadonlyArray() {
      let [start, count] = parseArrayBounds(arr, options);

      while (count !== 0) {
        yield arr[start];
        count > 0 ? (start++, count--) : (start--, count++);
      }
    }, options);

export default Producer_fromReadonlyArray;
