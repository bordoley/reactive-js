/// <reference types="./Runnable.generate.d.ts" />

import { SinkLike_notify } from "../../../rx.js";
import Disposable_isDisposed from "../../../util/Disposable/__internal__/Disposable.isDisposed.js";
import Runnable_create from "./Runnable.create.js";
const Runnable_generate = (generator, initialValue) => Runnable_create((sink) => {
    let acc = initialValue();
    while (!Disposable_isDisposed(sink)) {
        acc = generator(acc);
        sink[SinkLike_notify](acc);
    }
});
export default Runnable_generate;
