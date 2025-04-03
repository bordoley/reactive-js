/// <reference types="./Streamable.animationGroup.d.ts" />

import { include, init, mixInstanceFactory, props, proto, unsafeCast, } from "../../../__internal__/mixins.js";
import * as ReadonlyArray from "../../../collections/ReadonlyArray.js";
import * as ReadonlyObjectMap from "../../../collections/ReadonlyObjectMap.js";
import { DictionaryLike_get, DictionaryLike_keys, } from "../../../collections.js";
import * as Iterable from "../../../computations/Iterable.js";
import * as Publisher from "../../../computations/Publisher.js";
import { ComputationLike_isPure, StoreLike_value, StreamableLike_stream, } from "../../../computations.js";
import { bindMethod, compose, isFunction, none, pipe, } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import { EventListenerLike_notify, } from "../../../utils.js";
import * as Observable from "../../Observable.js";
import * as WritableStore from "../../WritableStore.js";
import StreamMixin from "../../__mixins__/StreamMixin.js";
import { AnimationLike_isRunning } from "./Streamable.animation.js";
const Streamable_animationGroup = 
/*@__PURE__*/ (() => {
    const AnimationGroup_animations = Symbol("AnimationGroup_animations");
    const createAnimationGroupStream = mixInstanceFactory(include(StreamMixin()), function AnimationGroupStream(animationGroup, scheduler, options) {
        const animationIsRunning = WritableStore.create(false);
        this[AnimationLike_isRunning] = animationIsRunning;
        const operator = compose(Observable.map((event) => {
            const observables = pipe(animationGroup, ReadonlyObjectMap.entries(), Iterable.map(([key, factory]) => {
                const publisher = publishers[key];
                return pipe(isFunction(factory) ? factory(event) : factory, Observable.forEach(bindMethod(publisher, EventListenerLike_notify)));
            }), ReadonlyArray.fromIterable());
            return pipe(Observable.merge(...observables), Observable.withCurrentTime(t => t), Observable.withEffect(() => {
                animationIsRunning[StoreLike_value] = true;
                return () => {
                    animationIsRunning[StoreLike_value] = false;
                };
            }));
        }), Observable.switchAll({
            [ComputationLike_isPure]: false,
        }));
        init(StreamMixin(), this, operator, scheduler, options);
        const publishers = (this[AnimationGroup_animations] = pipe(animationGroup, ReadonlyObjectMap.map(_ => pipe(Publisher.create(), Disposable.addTo(this)))));
        pipe(animationIsRunning, Disposable.addTo(this));
        return this;
    }, props({
        [AnimationLike_isRunning]: none,
        [AnimationGroup_animations]: none,
    }), proto({
        get [DictionaryLike_keys]() {
            unsafeCast(this);
            return pipe(this[AnimationGroup_animations], ReadonlyObjectMap.keys());
        },
        [DictionaryLike_get](index) {
            return this[AnimationGroup_animations][index];
        },
    }));
    return (animationGroup) => ({
        [StreamableLike_stream]: (scheduler, options) => createAnimationGroupStream(animationGroup, scheduler, options),
    });
})();
export default Streamable_animationGroup;
