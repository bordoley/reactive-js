import { ContainerOperator } from "../../../containers.js";
import { Function1 } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
declare const Observable_mapAsync: <TA, TB>(f: Function1<TA, Promise<TB>>) => ContainerOperator<ObservableLike<unknown>, TA, TB>;
export { Observable_mapAsync as default };
