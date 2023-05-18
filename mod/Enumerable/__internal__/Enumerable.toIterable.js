/// <reference types="./Enumerable.toIterable.d.ts" />

import EnumeratorFactory_toIterable from "../../EnumeratorFactory/__internal__/EnumeratorFactory.toIterable.js";
import { compose } from "../../functions.js";
import Enumerable_toEnumeratorFactory from "./Enumerable.toEnumeratorFactory.js";
const Enumerable_toIterable = () => compose(Enumerable_toEnumeratorFactory(), EnumeratorFactory_toIterable());
export default Enumerable_toIterable;
