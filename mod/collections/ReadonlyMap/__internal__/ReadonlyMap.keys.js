/// <reference types="./ReadonlyMap.keys.d.ts" />

import { pipe } from "../../../functions.js";
import Enumerable_create from "../../Enumerable/__internal__/Enumerable.create.js";
import Enumerator_fromIterator from "../../Enumerator/__internal__/Enumerator.fromIterator.js";
const ReadonlyMap_keys = () => map => Enumerable_create(() => pipe(map.keys(), Enumerator_fromIterator()));
export default ReadonlyMap_keys;
