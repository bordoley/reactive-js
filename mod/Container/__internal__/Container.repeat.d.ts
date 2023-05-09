import { Container, Containers } from "../../containers.js";
import { Predicate } from "../../functions.js";
declare const Container_repeat: <C extends Container, T>(repeat: (c: Containers.Of<C, T>, predicate: Predicate<number>) => Containers.Of<C, T>) => (predicate?: Predicate<number> | number) => (c: Containers.Of<C, T>) => Containers.Of<C, T>;
export default Container_repeat;
