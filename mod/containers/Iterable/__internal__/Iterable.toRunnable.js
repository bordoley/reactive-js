/// <reference types="./Iterable.toRunnable.d.ts" />

import { compose } from "../../../functions.js";
import Enumerable_toRunnable from "../../../ix/Enumerable/__internal__/Enumerable.toRunnable.js";
import Iterable_toEnumerable from "./Iterable.toEnumerable.js";
const Iterable_toRunnable = options => compose(Iterable_toEnumerable(), Enumerable_toRunnable(options));
export default Iterable_toRunnable;
