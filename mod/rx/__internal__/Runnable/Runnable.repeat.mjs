/// <reference types="./Runnable.repeat.d.ts" />
import Container_repeat from '../../../containers/__internal__/Container/Container.repeat.mjs';
import { pipe } from '../../../functions.mjs';
import Disposable_addTo from '../../../util/__internal__/Disposable/Disposable.addTo.mjs';
import Disposable_dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Disposable_isDisposed from '../../../util/__internal__/Disposable/Disposable.isDisposed.mjs';
import DelegateSink_create from '../DelegatingSink/DelegatingSink.create.mjs';
import Sink_sourceFrom from '../Sink/Sink.sourceFrom.mjs';
import Runnable_create from './Runnable.create.mjs';

const Runnable_repeat = /*@__PURE__*/ (() => {
    return Container_repeat((delegate, predicate) => Runnable_create(sink => {
        let count = 0;
        do {
            pipe(DelegateSink_create(sink), Disposable_addTo(sink), Sink_sourceFrom(delegate), Disposable_dispose());
            count++;
        } while (!Disposable_isDisposed(sink) && predicate(count));
    }));
})();

export { Runnable_repeat as default };
