/// <reference types="./Iterable.toRunnableObservable.d.ts" />

import { compose } from "../../../functions.js";
import Enumerable_toRunnableObservable from "../../../ix/Enumerable/__internal__/Enumerable.toRunnableObservable.js";
import Iterable_toEnumerable from "./Iterable.toEnumerable.js";
const Iterable_toRunnableObservable = options => compose(Iterable_toEnumerable(), Enumerable_toRunnableObservable(options));
export default Iterable_toRunnableObservable;
