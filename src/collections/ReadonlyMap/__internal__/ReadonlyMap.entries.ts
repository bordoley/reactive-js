import { pipe } from "../../../functions.js";
import Enumerable_create from "../../Enumerable/__internal__/Enumerable.create.js";
import Enumerator_fromIterator from "../../Enumerator/__internal__/Enumerator.fromIterator.js";
import type * as ReadonlyMap from "../../ReadonlyMap.js";

const ReadonlyMap_entries: ReadonlyMap.Signature["entries"] = () => map =>
  Enumerable_create(() => pipe(map.entries(), Enumerator_fromIterator()));

export default ReadonlyMap_entries;
