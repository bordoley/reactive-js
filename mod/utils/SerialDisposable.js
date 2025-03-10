/// <reference types="./SerialDisposable.d.ts" />

import { include, init, mixInstanceFactory } from "../__internal__/mixins.js";
import * as Disposable from "./Disposable.js";
import DisposableMixin from "./__mixins__/DisposableMixin.js";
import SerialDisposableMixin from "./__mixins__/SerialDisposableMixin.js";
export const create = /*@__PURE__*/ (() => mixInstanceFactory(include(DisposableMixin, SerialDisposableMixin()), function SerialDisposable(initialValue = Disposable.disposed) {
    init(DisposableMixin, this);
    init(SerialDisposableMixin(), this, initialValue);
    return this;
}))();
