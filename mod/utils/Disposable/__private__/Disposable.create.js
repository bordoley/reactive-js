/// <reference types="./Disposable.create.d.ts" />

import { include, init, mixInstanceFactory, } from "../../../__internal__/mixins.js";
import DisposableMixin from "../../__mixins__/DisposableMixin.js";
const Disposable_create = /*@__PURE__*/ (() => mixInstanceFactory(include(DisposableMixin), function CreateDisposable() {
    init(DisposableMixin, this);
    return this;
}))();
export default Disposable_create;
