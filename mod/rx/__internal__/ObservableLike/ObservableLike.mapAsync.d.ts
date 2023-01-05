import { ContainerOperator } from "../../../containers.mjs";
import { Function1 } from "../../../functions.mjs";
import { ObservableLike } from "../../../rx.mjs";
declare const ObservableLike__mapAsync: <TA, TB>(f: Function1<TA, Promise<TB>>) => ContainerOperator<ObservableLike<unknown>, TA, TB>;
export { ObservableLike__mapAsync as default };
