/// <reference types="./DeferredEventSource.d.ts" />

import { Array_length } from "../../__internal__/constants.js";
import { include, init, mixInstanceFactory, props, proto, } from "../../__internal__/mixins.js";
import * as ReadonlyArray from "../../collections/ReadonlyArray.js";
import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, EventSourceLike_subscribe, } from "../../computations.js";
import { alwaysTrue, bind, bindMethod, error, invoke, isFunction, isNone, isSome, newInstance, none, pipe, pipeUnsafe, } from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import * as DisposableContainer from "../../utils/DisposableContainer.js";
import * as Sink from "../../utils/__internal__/Sink.js";
import { DisposableContainerLike_add, DisposableLike_dispose, SinkLike_complete, SinkLike_isCompleted, } from "../../utils.js";
import Computation_areAllPure from "../Computation/__private__/Computation.areAllPure.js";
import Computation_areAllSynchronous from "../Computation/__private__/Computation.areAllSynchronous.js";
import Computation_isPure from "../Computation/__private__/Computation.isPure.js";
import Computation_isSynchronous from "../Computation/__private__/Computation.isSynchronous.js";
import LatestSourceMixin from "../__mixins__/LatestSourceMixin.js";
import { LiftedEventSourceLike_sink, LiftedEventSourceLike_source, } from "./LiftedSource.js";
const CreateSource_effect = Symbol("CreateSource_effect");
export const catchError = (createDelegatingCatchErrorConsumer, errorHandler, options) => (source) => create(consumer => {
    const onErrorSink = pipe(createDelegatingCatchErrorConsumer(consumer), DisposableContainer.onError(err => {
        let action = none;
        try {
            action = errorHandler(err);
        }
        catch (e) {
            consumer[DisposableLike_dispose](error([error(e), err]));
        }
        if (isSome(action)) {
            action[EventSourceLike_subscribe](consumer);
        }
        else {
            consumer[SinkLike_complete]();
        }
    }));
    source[EventSourceLike_subscribe](onErrorSink);
}, {
    [ComputationLike_isPure]: options?.[ComputationLike_isPure],
});
export const concat = (createDelegatingNonCompletingConsumer) => {
    const ConcatSinkCtx_delegate = Symbol("ConcatSinkCtx_delegate");
    const ConcatSinkCtx_sources = Symbol("ConcatSinkCtx_sources");
    const ConcatSinkCtx_nextIndex = Symbol("ConcatSinkCtx_nextIndex");
    function onConcatSinkComplete() {
        const delegate = this[ConcatSinkCtx_delegate];
        const sources = this[ConcatSinkCtx_sources];
        const next = this[ConcatSinkCtx_nextIndex];
        if (next < sources[Array_length]) {
            this[ConcatSinkCtx_nextIndex]++;
            const concatSink = createConcatSink(this);
            sources[next][EventSourceLike_subscribe](concatSink);
        }
        else {
            delegate[SinkLike_complete]();
        }
    }
    const createConcatSink = (ctx) => {
        const delegate = ctx[ConcatSinkCtx_delegate];
        return pipe(createDelegatingNonCompletingConsumer(delegate), DisposableContainer.onComplete(bind(onConcatSinkComplete, ctx)));
    };
    const ConcatSource_sources = Symbol("ConcatSource_sources");
    const isConcatSource = (observable) => isSome(observable[ConcatSource_sources]);
    const flattenSources = (sources) => sources.some(isConcatSource)
        ? sources.flatMap(observable => isConcatSource(observable)
            ? flattenSources(observable[ConcatSource_sources])
            : observable)
        : sources;
    const createConcatSource = mixInstanceFactory(function ConcatSource(sources) {
        this[ComputationLike_isPure] = Computation_areAllPure(sources);
        this[ComputationLike_isSynchronous] =
            Computation_areAllSynchronous(sources);
        this[ConcatSource_sources] = flattenSources(sources);
        return this;
    }, props({
        [ComputationLike_isPure]: false,
        [ComputationLike_isSynchronous]: false,
        [ConcatSource_sources]: none,
    }), {
        [ComputationLike_isDeferred]: true,
        [EventSourceLike_subscribe](consumer) {
            const { [ConcatSource_sources]: sources } = this;
            if (sources.length === 0) {
                consumer[DisposableLike_dispose]();
            }
            const concatSink = createConcatSink({
                [ConcatSinkCtx_delegate]: consumer,
                [ConcatSinkCtx_sources]: sources,
                [ConcatSinkCtx_nextIndex]: 1,
            });
            sources[0][EventSourceLike_subscribe](concatSink);
        },
    });
    return (...sources) => {
        const length = sources[Array_length];
        return length === 1 ? sources[0] : createConcatSource(sources);
    };
};
class CreateSource {
    [ComputationLike_isDeferred] = true;
    [ComputationLike_isPure];
    [ComputationLike_isSynchronous];
    [CreateSource_effect];
    constructor(effect, config) {
        this[CreateSource_effect] = effect;
        this[ComputationLike_isPure] = config?.[ComputationLike_isPure];
        this[ComputationLike_isSynchronous] =
            config?.[ComputationLike_isSynchronous];
    }
    [EventSourceLike_subscribe](listener) {
        try {
            this[CreateSource_effect](listener);
        }
        catch (e) {
            listener[DisposableLike_dispose](error(e));
        }
    }
}
export const create = ((effect, options) => newInstance((CreateSource), effect, options));
export const createLifted = /*@__PURE__*/ (() => {
    const LiftedSource_liftedSinkToConsumer = Symbol("LiftedSource_liftedSinkToConsumer");
    return mixInstanceFactory(function LiftedObservable(source, op, liftedSinkToConsumer, config) {
        const liftedSource = source[LiftedEventSourceLike_source] ?? source;
        const ops = [op, ...(source[LiftedEventSourceLike_sink] ?? [])];
        this[LiftedEventSourceLike_source] = liftedSource;
        this[LiftedEventSourceLike_sink] = ops;
        this[LiftedSource_liftedSinkToConsumer] = liftedSinkToConsumer;
        this[ComputationLike_isSynchronous] =
            Computation_isSynchronous(source) &&
                Computation_isSynchronous(config ?? {});
        this[ComputationLike_isPure] =
            Computation_isPure(source) && Computation_isPure(config ?? {});
        return this;
    }, props({
        [LiftedSource_liftedSinkToConsumer]: none,
        [LiftedEventSourceLike_source]: none,
        [LiftedEventSourceLike_sink]: none,
        [ComputationLike_isPure]: false,
        [ComputationLike_isSynchronous]: false,
    }), proto({
        [ComputationLike_isDeferred]: true,
        [EventSourceLike_subscribe](observer) {
            const source = this[LiftedEventSourceLike_source];
            const destinationOp = pipeUnsafe(observer, Sink.toLiftedSink(), ...this[LiftedEventSourceLike_sink], this[LiftedSource_liftedSinkToConsumer]);
            source[EventSourceLike_subscribe](destinationOp);
        },
    }));
})();
export const forkMerge = ((toBroadcaster, fromBroadcaster, merge, args) => (source) => {
    const argsLength = args[Array_length];
    const lastArg = args[argsLength - 1];
    const maybeConfig = isSome(lastArg) && !isFunction(lastArg) ? lastArg : none;
    const ops = (isSome(maybeConfig) ? args.slice(0, argsLength - 1) : args);
    const innerType = maybeConfig ?? {};
    const isPure = Computation_isPure(innerType) && Computation_isPure(source);
    return create((consumer) => {
        const broadcastedDeferredSource = pipe(source, toBroadcaster(consumer), fromBroadcaster());
        const merged = pipe(ops, ReadonlyArray.map(op => op(broadcastedDeferredSource)), broadcasters => merge(...broadcasters));
        merged[EventSourceLike_subscribe](consumer);
    }, {
        [ComputationLike_isSynchronous]: false,
        [ComputationLike_isPure]: isPure,
    });
});
export const latest = /*@__PURE__*/ (() => {
    return mixInstanceFactory(include(LatestSourceMixin()), function DeferredLatestSource(sources, mode, createLatestEventListener) {
        init(LatestSourceMixin(), this, sources, mode, createLatestEventListener);
        this[ComputationLike_isPure] = Computation_areAllPure(sources);
        this[ComputationLike_isSynchronous] =
            Computation_areAllSynchronous(sources);
        return this;
    }, props({
        [ComputationLike_isPure]: false,
        [ComputationLike_isSynchronous]: false,
    }), proto({
        [ComputationLike_isDeferred]: true,
    }));
})();
export const merge = (createDelegatingNonCompletingConsumer) => {
    const MergeSource_sources = Symbol("MergeSource_sources");
    const isMergeSource = (observable) => isSome(observable[MergeSource_sources]);
    const flattenSources = (sources) => sources.some(isMergeSource)
        ? sources.flatMap(observable => isMergeSource(observable)
            ? flattenSources(observable[MergeSource_sources])
            : observable)
        : sources;
    const createMergeSource = mixInstanceFactory(function ConcatSource(sources) {
        this[ComputationLike_isPure] = Computation_areAllPure(sources);
        this[ComputationLike_isSynchronous] =
            Computation_areAllSynchronous(sources);
        this[MergeSource_sources] = flattenSources(sources);
        return this;
    }, props({
        [ComputationLike_isPure]: false,
        [ComputationLike_isSynchronous]: false,
        [MergeSource_sources]: none,
    }), {
        [ComputationLike_isDeferred]: true,
        [EventSourceLike_subscribe](consumer) {
            const { [MergeSource_sources]: sources } = this;
            const count = sources[Array_length];
            let completed = 0;
            for (const source of sources) {
                pipe(createDelegatingNonCompletingConsumer(consumer), DisposableContainer.onComplete(() => {
                    completed++;
                    if (completed >= count) {
                        consumer[SinkLike_complete]();
                    }
                }), bindMethod(source, EventSourceLike_subscribe));
            }
        },
    });
    return (...sources) => {
        const length = sources[Array_length];
        return length === 1 ? sources[0] : createMergeSource(sources);
    };
};
export const repeat = ((createDelegatingNonCompletingConsumer, shouldRepeat) => (src) => create((consumer) => {
    const repeatPredicate = isFunction(shouldRepeat)
        ? shouldRepeat
        : isNone(shouldRepeat)
            ? alwaysTrue
            : (count) => count < shouldRepeat;
    let count = 0;
    const onDelegateConsumerCompleted = () => {
        const consumerIsCompleted = consumer[SinkLike_isCompleted];
        if (consumerIsCompleted) {
            return;
        }
        count++;
        try {
            const shouldRepeat = repeatPredicate(count);
            if (shouldRepeat) {
                src[EventSourceLike_subscribe](createDelegateConsumer());
            }
            else {
                consumer[SinkLike_complete]();
            }
        }
        catch (e) {
            consumer[DisposableLike_dispose](error(e));
        }
    };
    const createDelegateConsumer = () => pipe(consumer, createDelegatingNonCompletingConsumer, DisposableContainer.onComplete(onDelegateConsumerCompleted));
    src[EventSourceLike_subscribe](createDelegateConsumer());
}, src));
export const takeLast = (genPure, takeLast, options) => (obs) => create(consumer => {
    const count = options?.count ?? 1;
    const takeLastSink = pipe(takeLast(count, consumer), Disposable.addTo(consumer), DisposableContainer.onComplete(() => genPure(bindMethod(takeLastSink, Symbol.iterator))[EventSourceLike_subscribe](consumer)));
    pipe(obs, invoke(EventSourceLike_subscribe, takeLastSink));
}, obs);
export const withEffect = (effect => source => create(consumer => {
    const cleanup = effect();
    if (isSome(cleanup) && isFunction(cleanup)) {
        consumer[DisposableContainerLike_add](cleanup);
    }
    else if (isSome(cleanup)) {
        pipe(consumer, Disposable.add(cleanup));
    }
    source[EventSourceLike_subscribe](consumer);
}, {
    [ComputationLike_isPure]: false,
    [ComputationLike_isSynchronous]: source[ComputationLike_isSynchronous],
}));
