import { Container, DeferredTypeClass } from "../../containers.js";
declare const Container_concatWith: <C extends Container.Type>(concat: <T>(fst: Container.Of<C, T>, snd: Container.Of<C, T>, ...tail: readonly Container.Of<C, T>[]) => Container.Of<C, T>) => <T_1>(snd: Container.Of<C, T_1>, ...tail: readonly Container.Of<C, T_1>[]) => Container.Operator<C, T_1, T_1>;
export default Container_concatWith;
