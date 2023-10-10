/// <reference types="./ReadonlyMap.values.d.ts" />

import { pipe } from "../../../functions.js";
import Enumerable_create from "../../Enumerable/__internal__/Enumerable.create.js";
import Enumerator_fromIterator from "../../Enumerator/__internal__/Enumerator.fromIterator.js";
const ReadonlyMap_values = () => map => Enumerable_create(() => pipe(map.values(), Enumerator_fromIterator()));
export default ReadonlyMap_values;
