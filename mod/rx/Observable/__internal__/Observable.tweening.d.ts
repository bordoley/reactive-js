import { ContainerOperator } from "../../../containers.js";
import { Factory, Function1 } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
declare const Observable_tweening: (duration: number, initialValue: Factory<number>, options?: {
    easing?: Function1<number, number>;
}) => ContainerOperator<ObservableLike, number, number>;
export default Observable_tweening;
