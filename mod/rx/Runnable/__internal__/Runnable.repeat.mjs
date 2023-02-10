/// <reference types="./Runnable.repeat.d.ts" />
import Container_repeat from '../../../containers/Container/__internal__/Container.repeat.mjs';
import { pipe } from '../../../functions.mjs';
import Disposable_addTo from '../../../util/Disposable/__internal__/Disposable.addTo.mjs';
import Disposable_dispose from '../../../util/Disposable/__internal__/Disposable.dispose.mjs';
import Disposable_isDisposed from '../../../util/Disposable/__internal__/Disposable.isDisposed.mjs';
import Sink_createWithDelegate from '../../Sink/__internal__/Sink.createWithDelegate.mjs';
import Sink_sourceFrom from '../../Sink/__internal__/Sink.sourceFrom.mjs';
import Runnable_create from './Runnable.create.mjs';

const Runnable_repeat = /*@__PURE__*/ (() => {
    return Container_repeat((delegate, predicate) => Runnable_create(sink => {
        let count = 0;
        do {
            pipe(sink, Sink_createWithDelegate, Disposable_addTo(sink), Sink_sourceFrom(delegate), Disposable_dispose());
            count++;
        } while (!Disposable_isDisposed(sink) && predicate(count));
    }));
})();

export { Runnable_repeat as default };
