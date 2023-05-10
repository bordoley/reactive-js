import { Equality, Function1 } from "../../functions.js";
import { RunnableTypeClass } from "../../type-classes.js";
import { Container, ContainerOf } from "../../types.js";
declare const Container_contains: <C extends Container>(someSatisfy: <T>(predicate: import("../../functions.js").Predicate<T>) => Function1<ContainerOf<C, T>, boolean>) => <T_1>(value: T_1, options?: {
    readonly equality?: Equality<T_1> | undefined;
}) => Function1<ContainerOf<C, T_1>, boolean>;
export default Container_contains;
