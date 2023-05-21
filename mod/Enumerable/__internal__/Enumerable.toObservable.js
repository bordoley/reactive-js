/// <reference types="./Enumerable.toObservable.d.ts" />

import EnumeratorFactory_toObservable from "../../EnumeratorFactory/__internal__/EnumeratorFactory.toObservable.js";
import { compose, identity } from "../../functions.js";
import Enumerable_toEnumeratorFactory from "./Enumerable.toEnumeratorFactory.js";
const Enumerable_toObservable = ((options) => (options?.delay ?? 0 > 0)
    ? compose(Enumerable_toEnumeratorFactory(), EnumeratorFactory_toObservable(options))
    : identity);
export default Enumerable_toObservable;
