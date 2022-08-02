/// <reference types="./streaming.d.ts" />
import { delegatingDisposableMixin } from './__internal__/util/DisposableLikeMixins.mjs';
import { clazz, init, mixWith, createObjectFactory } from './__internal__/util/Object.mjs';
import { pipe, none, newInstance, getLength, composeUnsafe } from './functions.mjs';
import { createSubject, MulticastObservableLike_observerCount, MulticastObservableLike_replay, ReactiveContainerLike_sinkInto } from './rx.mjs';
import { getObserverCount, getReplay } from './rx/MulticastObservableLike.mjs';
import { multicast } from './rx/ObservableLike.mjs';
import { sinkInto } from './rx/ReactiveContainerLike.mjs';
import { publish } from './rx/SubjectLike.mjs';
import { DispatcherLike_scheduler, DispatcherLike_dispatch } from './scheduling.mjs';
import './util/DisposableLike.mjs';
import { addTo } from './__internal__/util/DisposableLikeInternal.mjs';

/** @ignore */
const StreamableLike_stream = Symbol("StreamableLike_stream");
const createStream = /*@__PURE__*/ (() => {
    const createStreamInternal = (() => {
        return pipe(clazz(function StreamImpl(op, scheduler, replay) {
            const subject = createSubject({ replay });
            this.subject = subject;
            init(delegatingDisposableMixin, this, subject);
            const observable = pipe(subject, op, multicast(scheduler, { replay }));
            this.observable = observable;
            pipe(this, addTo(this.observable));
        }, {
            subject: none,
            observable: none,
            [DispatcherLike_scheduler]: none,
        }, {
            get [MulticastObservableLike_observerCount]() {
                const self = this;
                return getObserverCount(self.observable);
            },
            get [MulticastObservableLike_replay]() {
                const self = this;
                return getReplay(self.observable);
            },
            [DispatcherLike_dispatch](req) {
                const self = this;
                pipe(self.subject, publish(req));
            },
            [ReactiveContainerLike_sinkInto](observer) {
                const self = this;
                pipe(self.observable, sinkInto(observer));
            },
        }), mixWith(delegatingDisposableMixin), createObjectFactory());
    })();
    return (op, scheduler, options) => {
        const { replay = 0 } = options !== null && options !== void 0 ? options : {};
        return createStreamInternal(op, scheduler, replay);
    };
})();
const createStreamble = /*@__PURE__*/ (() => {
    class CreateStreamable {
        constructor(stream) {
            this.stream = stream;
        }
        [StreamableLike_stream](scheduler, options) {
            return this.stream(scheduler, options);
        }
    }
    return (stream) => newInstance(CreateStreamable, stream);
})();
const createLiftedFlowable = (...ops) => {
    const op = getLength(ops) > 1
        ? composeUnsafe(...ops)
        : ops[0];
    return createStreamble((scheduler, options) => createStream(op, scheduler, options));
};
const createLiftedStreamable = (...ops) => {
    const op = getLength(ops) > 1
        ? composeUnsafe(...ops)
        : ops[0];
    return createStreamble((scheduler, options) => createStream(op, scheduler, options));
};

export { StreamableLike_stream, createLiftedFlowable, createLiftedStreamable, createStream, createStreamble };
