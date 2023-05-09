import { Container } from "../../containers.js";
import { Predicate } from "../../functions.js";
declare const Container_repeat: <C extends Container.Type, T>(repeat: (c: Container.Of<C, T>, predicate: Predicate<number>) => Container.Of<C, T>) => (predicate?: Predicate<number> | number) => (c: Container.Of<C, T>) => Container.Of<C, T>;
export default Container_repeat;
