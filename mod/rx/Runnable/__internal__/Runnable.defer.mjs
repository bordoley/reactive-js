/// <reference types="./Runnable.defer.d.ts" />
import { ReactiveContainerLike_sinkInto } from '../../../rx.mjs';
import Runnable_create from './Runnable.create.mjs';

const Runnable_defer = f => Runnable_create(sink => {
    f()[ReactiveContainerLike_sinkInto](sink);
});

export { Runnable_defer as default };
