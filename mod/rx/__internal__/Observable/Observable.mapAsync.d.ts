import { ContainerOperator } from "../../../containers.js";
import { Function1 } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
declare const Observable$mapAsync: <TA, TB>(f: Function1<TA, Promise<TB>>) => ContainerOperator<ObservableLike<unknown>, TA, TB>;
export { Observable$mapAsync as default };
