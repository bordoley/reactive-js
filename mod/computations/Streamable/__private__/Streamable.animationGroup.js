/// <reference types="./Streamable.animationGroup.d.ts" />

import { include, init, mixInstanceFactory, props, proto, unsafeCast, } from "../../../__internal__/mixins.js";
import * as ReadonlyArray from "../../../collections/ReadonlyArray.js";
import * as ReadonlyObjectMap from "../../../collections/ReadonlyObjectMap.js";
import { DictionaryLike_get, DictionaryLike_keys, } from "../../../collections.js";
import * as Iterable from "../../../computations/Iterable.js";
import * as Publisher from "../../../computations/Publisher.js";
import { StreamableLike_stream, } from "../../../computations.js";
import { bindMethod, isFunction, none, pipe, } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import { EventListenerLike_notify, } from "../../../utils.js";
import * as Computation from "../../Computation.js";
import * as Observable from "../../Observable.js";
import AnimationStreamMixin from "../../__mixins__/AnimationStreamMixin.js";
const Streamable_animationGroup = 
/*@__PURE__*/ (() => {
    const m = Computation.makeModule({
        keep: Observable.keep,
    });
    const AnimationGroup_animations = Symbol("AnimationGroup_animations");
    const createAnimationGroupStream = mixInstanceFactory(include(AnimationStreamMixin()), function AnimationGroupStream(animationGroup, scheduler, options) {
        const f = (event) => {
            const observables = pipe(animationGroup, ReadonlyObjectMap.entries(), Iterable.map(([key, factory]) => {
                const publisher = publishers[key];
                return pipe(isFunction(factory) ? factory(event) : factory, Observable.forEach(bindMethod(publisher, EventListenerLike_notify)), Computation.ignoreElements(m));
            }), ReadonlyArray.fromIterable());
            return Observable.merge(...observables);
        };
        init(AnimationStreamMixin(), this, f, scheduler, options);
        const publishers = (this[AnimationGroup_animations] = pipe(animationGroup, ReadonlyObjectMap.map(_ => pipe(Publisher.create(), Disposable.addTo(this)))));
        return this;
    }, props({
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
