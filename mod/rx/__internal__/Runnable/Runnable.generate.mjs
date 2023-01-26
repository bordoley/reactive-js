/// <reference types="./Runnable.generate.d.ts" />
import { SinkLike_notify } from '../../../rx.mjs';
import Disposable_isDisposed from '../../../util/__internal__/Disposable/Disposable.isDisposed.mjs';
import Runnable_create from './Runnable.create.mjs';

const Runnable_generate = (generator, initialValue) => Runnable_create((sink) => {
    let acc = initialValue();
    while (!Disposable_isDisposed(sink)) {
        acc = generator(acc);
        sink[SinkLike_notify](acc);
    }
});

export { Runnable_generate as default };
