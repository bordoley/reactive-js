/// <reference types="./MulticastObservable.isMulticastObservable.d.ts" />

import * as Obj from "../../../__internal__/Object.js";
import { isObject } from "../../../functions.js";
import { MulticastObservableLike_buffer, } from "../../../rx.js";
const MulticastObservable_isMulticastObservable = (o) => isObject(o) && Obj.hasOwn(o, MulticastObservableLike_buffer);
export default MulticastObservable_isMulticastObservable;
