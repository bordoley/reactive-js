/// <reference types="./Disposable.create.d.ts" />

import { include, init, mixInstanceFactory, } from "../../../__internal__/mixins.js";
import DisposableMixin from "../../__mixins__/DisposableMixin.js";
const Disposable_create = /*@__PURE__*/ (() => mixInstanceFactory(include(DisposableMixin), function CreateDisposable(instance) {
    init(DisposableMixin, instance);
    return instance;
}))();
export default Disposable_create;
