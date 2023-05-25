/// <reference types="./ReadonlyMap.values.d.ts" />

import Enumerable_create from "../../Enumerable/__internal__/Enumerable.create.js";
import Iterator_enumerate from "../../Iterator/__internal__/Iterator.enumerate.js";
import { pipe } from "../../functions.js";
const ReadonlyMap_values = () => map => Enumerable_create(() => pipe(map.values(), Iterator_enumerate()));
export default ReadonlyMap_values;
