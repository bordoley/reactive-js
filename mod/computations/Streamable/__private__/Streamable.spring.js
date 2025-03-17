/// <reference types="./Streamable.spring.d.ts" />

import { Array_length, Array_push } from "../../../__internal__/constants.js";
import { include, init, mixInstanceFactory, } from "../../../__internal__/mixins.js";
import * as Computation from "../../../computations/Computation.js";
import * as Iterable from "../../../computations/Iterable.js";
import * as Publisher from "../../../computations/Publisher.js";
import { StreamableLike_stream, } from "../../../computations.js";
import { compose, isFunction, isNumber, isReadonlyArray, pipe, returns, tuple, } from "../../../functions.js";
import { scale } from "../../../math.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as PauseableScheduler from "../../../utils/PauseableScheduler.js";
import DelegatingPauseableMixin from "../../../utils/__mixins__/DelegatingPauseableMixin.js";
import { EventListenerLike_notify, PauseableLike_resume, } from "../../../utils.js";
import * as Broadcaster from "../../Broadcaster.js";
import * as Observable from "../../Observable.js";
import * as Subject from "../../Subject.js";
import DelegatingEventSourceMixin from "../../__mixins__/DelegatingEventSourceMixin.js";
import StreamMixin from "../../__mixins__/StreamMixin.js";
const Streamable_spring = /*@__PURE__*/ (() => {
    const ObservableModule = {
        concat: Observable.concat,
        concatAll: Observable.concatAll,
        forEach: Observable.forEach,
        fromReadonlyArray: Observable.fromReadonlyArray,
        keep: Observable.keep,
        map: Observable.map,
    };
    const SpringStream_create = mixInstanceFactory(include(StreamMixin(), DelegatingPauseableMixin, DelegatingEventSourceMixin()), function SpringStream(scheduler, animationScheduler, springOptions, options) {
        const pauseableScheduler = PauseableScheduler.create(animationScheduler);
        const publisher = Publisher.create();
        const accFeedbackStream = Subject.create({ replay: 1 });
        const otherObs = pipe(accFeedbackStream, Broadcaster.toObservable());
        const operator = compose(Observable.withLatestFrom(otherObs, (updater, acc) => {
            const command = isFunction(updater) ? updater(acc) : updater;
            const springCommandOptions = isNumber(command) || isReadonlyArray(command)
                ? springOptions
                : {
                    stiffness: command.stiffness ?? springOptions?.stiffness,
                    damping: command.damping ?? springOptions?.damping,
                    precision: command.precision ?? springOptions?.precision,
                };
            const startValue = isNumber(command) || isReadonlyArray(command) ? acc : command.from;
            const destinations = isNumber(command)
                ? [command]
                : isReadonlyArray(command)
                    ? command
                    : isNumber(command.to)
                        ? [command.to]
                        : command.to;
            const sources = pipe(destinations, Iterable.scan(([, prev], v) => tuple(prev, v), returns(tuple(startValue, startValue))), Iterable.reduce((animations, [prev, next]) => {
                if (prev !== next) {
                    animations[Array_push](pipe(Observable.spring(springCommandOptions), Observable.map(scale(prev, next))));
                }
                return animations;
            }, () => []));
            return sources[Array_length] > 0
                ? pipe(sources, Computation.concatMany(ObservableModule), Computation.notify(ObservableModule)(publisher), Computation.notify(ObservableModule)(accFeedbackStream), Computation.ignoreElements(ObservableModule)(), Observable.subscribeOn(pauseableScheduler), Computation.startWith(ObservableModule)(true), Computation.endWith(ObservableModule)(false))
                : Observable.empty();
        }), Observable.switchAll());
        init(StreamMixin(), this, operator, scheduler, options);
        init(DelegatingPauseableMixin, this, pauseableScheduler);
        init(DelegatingEventSourceMixin(), this, publisher);
        pipe(this, Disposable.add(publisher), Disposable.add(accFeedbackStream), Disposable.add(pauseableScheduler));
        this[PauseableLike_resume]();
        accFeedbackStream[EventListenerLike_notify](0);
        return this;
    });
    return (creationOptions) => ({
        [StreamableLike_stream]: (scheduler, options) => SpringStream_create(scheduler, creationOptions?.animationScheduler ?? scheduler, creationOptions, options),
    });
})();
export default Streamable_spring;
