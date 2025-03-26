/// <reference types="./DeferredSource.d.ts" />

import { Array_length } from "../../__internal__/constants.js";
import { mixInstanceFactory, props } from "../../__internal__/mixins.js";
import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, SourceLike_subscribe, } from "../../computations.js";
import { bind, bindMethod, error, isSome, newInstance, none, pipe, } from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import * as DisposableContainer from "../../utils/DisposableContainer.js";
import { DisposableLike_dispose, SinkLike_complete, } from "../../utils.js";
import * as Computation from "../Computation.js";
const CreateSource_effect = Symbol("CreateSource_effect");
class CreateSource {
    static [ComputationLike_isDeferred] = true;
    [ComputationLike_isPure];
    [ComputationLike_isSynchronous];
    [CreateSource_effect];
    constructor(effect, config) {
        this[CreateSource_effect] = effect;
        this[ComputationLike_isPure] = config?.[ComputationLike_isPure];
        this[ComputationLike_isSynchronous] =
            config?.[ComputationLike_isSynchronous];
    }
    [SourceLike_subscribe](listener) {
        try {
            this[CreateSource_effect](listener);
        }
        catch (e) {
            listener[DisposableLike_dispose](error(e));
        }
    }
}
export const create = ((effect, options) => newInstance((CreateSource), effect, options));
export const catchError = (createDelegatingNotifyOnlyNonCompletingNonDisposing, errorHandler, options) => (source) => create(observer => {
    const onErrorSink = pipe(createDelegatingNotifyOnlyNonCompletingNonDisposing(observer), Disposable.addToContainer(observer), DisposableContainer.onError(err => {
        let action = none;
        try {
            action = errorHandler(err);
        }
        catch (e) {
            observer[DisposableLike_dispose](error([error(e), err]));
        }
        if (isSome(action)) {
            action[SourceLike_subscribe](observer);
        }
        else {
            observer[SinkLike_complete]();
        }
    }));
    source[SourceLike_subscribe](onErrorSink);
}, {
    [ComputationLike_isPure]: Computation.isPure(options?.innerType ?? {}),
    [ComputationLike_isSynchronous]: Computation.isSynchronous(options?.innerType ?? {}),
});
export const creatConcat = (m) => {
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
            sources[next][SourceLike_subscribe](concatSink);
        }
        else {
            delegate[SinkLike_complete]();
        }
    }
    const createConcatSink = (ctx) => {
        const delegate = ctx[ConcatSinkCtx_delegate];
        return pipe(m.createDelegatingNotifyOnlyNonCompletingNonDisposing(delegate), Disposable.addTo(delegate), DisposableContainer.onComplete(bind(onConcatSinkComplete, ctx)));
    };
    const ConcatSource_sources = Symbol("ConcatSource_sources");
    const isConcatSource = (observable) => isSome(observable[ConcatSource_sources]);
    const flattenSources = (sources) => sources.some(isConcatSource)
        ? sources.flatMap(observable => isConcatSource(observable)
            ? flattenSources(observable[ConcatSource_sources])
            : observable)
        : sources;
    const createConcatSource = mixInstanceFactory(function ConcatSource(sources) {
        this[ComputationLike_isPure] = Computation.areAllPure(sources);
        this[ComputationLike_isSynchronous] =
            Computation.areAllSynchronous(sources);
        this[ConcatSource_sources] = flattenSources(sources);
        return this;
    }, props({
        [ComputationLike_isPure]: false,
        [ComputationLike_isSynchronous]: false,
        [ConcatSource_sources]: none,
    }), {
        [ComputationLike_isDeferred]: true,
        [SourceLike_subscribe](observer) {
            const { [ConcatSource_sources]: sources } = this;
            pipe(createConcatSink({
                [ConcatSinkCtx_delegate]: observer,
                [ConcatSinkCtx_sources]: sources,
                [ConcatSinkCtx_nextIndex]: 1,
            }), bindMethod(sources[0], SourceLike_subscribe));
        },
    });
    return (...sources) => {
        const length = sources[Array_length];
        return length === 0
            ? Computation.empty(m)()
            : length === 1
                ? sources[0]
                : createConcatSource(sources);
    };
};
