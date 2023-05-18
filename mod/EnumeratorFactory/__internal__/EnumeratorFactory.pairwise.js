/// <reference types="./EnumeratorFactory.pairwise.d.ts" />

import Enumerator_pairwise from "../../Enumerator/__internal__/Enumerator.pairwise.js";
import { composeLazy } from "../../functions.js";
import EnumeratorFactory_enumerate from "./EnumeratorFactory.enumerate.js";
const EnumeratorFactory_pairwise = () => composeLazy(EnumeratorFactory_enumerate(), Enumerator_pairwise());
export default EnumeratorFactory_pairwise;
