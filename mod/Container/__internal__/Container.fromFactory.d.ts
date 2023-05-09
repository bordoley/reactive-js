import { Container, Containers } from "../../containers.js";
import { Factory, Function1, Optional } from "../../functions.js";
declare const Container_fromFactory: <C extends Container, O = never>(fromOptional: <T>(options?: O | undefined) => Function1<Optional<T>, Containers.Of<C, T>>, map: <TA, TB>(selector: Function1<TA, TB>) => Containers.Operator<C, TA, TB>) => <T_1>(factory: Factory<T_1>, options?: O | undefined) => Containers.Of<C, T_1>;
export default Container_fromFactory;
