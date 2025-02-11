/// <reference types="./Streamable.animation.d.ts" />

import { include, init, mixInstanceFactory, props, } from "../../../__internal__/mixins.js";
import { AnimationStreamLike_animation, StreamableLike_stream, } from "../../../concurrent.js";
import * as Publisher from "../../../events/Publisher.js";
import { compose, isFunction, none, pipe, } from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as Observable from "../../Observable.js";
import { SingleUseObservableLike_observer } from "../../__internal__/SingleUseObservable.js";
import * as SingleUseObservable from "../../__internal__/SingleUseObservable.js";
import DelegatingDispatcherMixin from "../../__mixins__/DelegatingDispatcherMixin.js";
import DelegatingMulticastObservableMixin from "../../__mixins__/DelegatingMulticastObservableMixin.js";
const AnimationStream_create = /*@__PURE__*/ (() => {
    return mixInstanceFactory(include(DelegatingDispatcherMixin(), DelegatingMulticastObservableMixin()), function AnimationStream(instance, animation, scheduler, animationScheduler, options) {
        const singleUseObservable = SingleUseObservable.create();
        const publisher = (instance[AnimationStreamLike_animation] =
            Publisher.create());
        const delegate = pipe(singleUseObservable, Observable.switchMap(compose((event) => isFunction(animation) ? animation(event) : animation, Observable.notify(publisher), Observable.ignoreElements(), Observable.subscribeOn(animationScheduler), Observable.startWith(true), Observable.endWith(false)), {
            innerType: Observable.DeferredObservableWithSideEffectsType,
        }), Observable.multicast(scheduler, options));
        init(DelegatingDispatcherMixin(), instance, singleUseObservable[SingleUseObservableLike_observer]);
        init(DelegatingMulticastObservableMixin(), instance, delegate);
        pipe(instance, Disposable.add(publisher), Disposable.add(delegate));
        return instance;
    }, props({
        [AnimationStreamLike_animation]: none,
    }));
})();
const Streamable_animation = ((animationGroup, creationOptions) => ({
    [StreamableLike_stream]: (scheduler, options) => AnimationStream_create(animationGroup, scheduler, creationOptions?.animationScheduler ?? scheduler, options),
}));
export default Streamable_animation;
