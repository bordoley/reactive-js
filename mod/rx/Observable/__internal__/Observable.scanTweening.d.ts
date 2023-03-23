import { ContainerOperator } from "../../../containers.js";
import { Function1 } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
declare const Observable_scanTweening: (initialValue: number, options?: {
    duration?: number;
    easing?: Function1<number, number>;
}) => ContainerOperator<ObservableLike, number, number>;
export default Observable_scanTweening;
