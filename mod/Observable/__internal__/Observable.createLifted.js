/// <reference types="./Observable.createLifted.d.ts" />

import { createInstanceFactory } from "../../__internal__/mixins.js";
import { ObservableLike_isDeferred, ObservableLike_isEnumerable, ObservableLike_isRunnable, } from "../../types.js";
import Observable_liftMixin from "./Observable.liftMixin.js";
const Observable_createLifted = /*@__PURE__*/ (() => createInstanceFactory(Observable_liftMixin()))();
export default Observable_createLifted;
