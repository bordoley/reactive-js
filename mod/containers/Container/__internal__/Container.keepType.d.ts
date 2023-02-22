import { ContainerLike, ContainerOperator, Keep } from "../../../containers.js";
import { TypePredicate } from "../../../functions.js";
declare const Container_keepType: <C extends ContainerLike>(keep: <T>(predicate: import("../../../functions.js").Predicate<T>, options?: undefined) => ContainerOperator<C, T, T>) => <TA, TB extends TA>(predicate: TypePredicate<TA, TB>) => ContainerOperator<C, TA, TB>;
export default Container_keepType;
