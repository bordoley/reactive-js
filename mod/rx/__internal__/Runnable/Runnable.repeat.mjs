/// <reference types="./Runnable.repeat.d.ts" />
import Container$repeat from '../../../containers/__internal__/Container/Container.repeat.mjs';
import { pipe } from '../../../functions.mjs';
import Disposable$addTo from '../../../util/__internal__/Disposable/Disposable.addTo.mjs';
import Disposable$dispose from '../../../util/__internal__/Disposable/Disposable.dispose.mjs';
import Disposable$isDisposed from '../../../util/__internal__/Disposable/Disposable.isDisposed.mjs';
import DelegateSink$create from '../DelegatingSink/DelegatingSink.create.mjs';
import Sink$sourceFrom from '../Sink/Sink.sourceFrom.mjs';
import Runnable$create from './Runnable.create.mjs';

const Runnable$repeat = /*@__PURE__*/ (() => {
    return Container$repeat((delegate, predicate) => Runnable$create(sink => {
        let count = 0;
        do {
            pipe(DelegateSink$create(sink), Disposable$addTo(sink), Sink$sourceFrom(delegate), Disposable$dispose());
            count++;
        } while (!Disposable$isDisposed(sink) && predicate(count));
    }));
})();

export { Runnable$repeat as default };
