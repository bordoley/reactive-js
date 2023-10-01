/// <reference types="./Observer.mixin.initFromDelegate.d.ts" />

import { init } from "../../../__internal__/mixins.js";
import { pipe } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";
const Observer_mixin_initFromDelegate = (instance, delegate) => {
    init(ObserverMixin(), instance, delegate, delegate);
    pipe(instance, Disposable.addTo(delegate));
};
export default Observer_mixin_initFromDelegate;
