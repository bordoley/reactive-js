/// <reference types="./MulticastObservable.isMulticastObservable.d.ts" />

import * as Obj from "../../../__internal__/Object.js";
import { MulticastObservableLike_buffer, } from "../../../core.js";
import { isObject } from "../../../functions.js";
const MulticastObservable_isMulticastObservable = (o) => isObject(o) && Obj.hasOwn(o, MulticastObservableLike_buffer);
export default MulticastObservable_isMulticastObservable;
