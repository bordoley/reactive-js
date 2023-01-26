/// <reference types="./Runnable.generate.d.ts" />
import { SinkLike_notify } from '../../../rx.mjs';
import Disposable$isDisposed from '../../../util/__internal__/Disposable/Disposable.isDisposed.mjs';
import Runnable$create from './Runnable.create.mjs';

const Runnable$generate = (generator, initialValue) => Runnable$create((sink) => {
    let acc = initialValue();
    while (!Disposable$isDisposed(sink)) {
        acc = generator(acc);
        sink[SinkLike_notify](acc);
    }
});

export { Runnable$generate as default };
