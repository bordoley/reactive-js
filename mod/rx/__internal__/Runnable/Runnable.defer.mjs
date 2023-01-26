/// <reference types="./Runnable.defer.d.ts" />
import { ReactiveContainerLike_sinkInto } from '../../../rx.mjs';
import Runnable$create from './Runnable.create.mjs';

const Runnable$defer = f => Runnable$create(sink => {
    f()[ReactiveContainerLike_sinkInto](sink);
});

export { Runnable$defer as default };
