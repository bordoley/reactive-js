import Enumerable_create from "../../EnumerableBase/__internal__/EnumerableBase.create.js";
import Iterator_enumerate from "../../Iterator/__internal__/Iterator.enumerate.js";
import type * as ReadonlyMap from "../../ReadonlyMap.js";
import { pipe } from "../../functions.js";

const ReadonlyMap_values: ReadonlyMap.Signature["values"] = () => map =>
  Enumerable_create(() => pipe(map.values(), Iterator_enumerate()), true);

export default ReadonlyMap_values;
