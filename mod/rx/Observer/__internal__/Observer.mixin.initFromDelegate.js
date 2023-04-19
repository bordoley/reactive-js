/// <reference types="./Observer.mixin.initFromDelegate.d.ts" />

import { init } from "../../../__internal__/mixins.js";
import { pipe } from "../../../functions.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Observer_mixin from "./Observer.mixin.js";
const Observer_mixin_initFromDelegate = (instance, delegate) => {
    init(Observer_mixin(), instance, delegate, delegate);
    pipe(instance, Disposable_addTo(delegate));
};
export default Observer_mixin_initFromDelegate;
