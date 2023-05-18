/// <reference types="./EnumeratorFactory.distinctUntilChanged.d.ts" />

import Enumerator_distinctUntilChanged from "../../Enumerator/__internal__/Enumerator.distinctUntilChanged.js";
import { composeLazy } from "../../functions.js";
import EnumeratorFactory_enumerate from "./EnumeratorFactory.enumerate.js";
const EnumeratorFactory_distinctUntilChanged = (options) => composeLazy(EnumeratorFactory_enumerate(), Enumerator_distinctUntilChanged(options));
export default EnumeratorFactory_distinctUntilChanged;
