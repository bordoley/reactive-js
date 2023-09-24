import { Container, Container_T, Container_type } from "../collections.js";
/**
 * @noInheritDoc
 * @category Container
 */
export interface IteratorContainer extends Container<number> {
    readonly [Container_type]?: Iterator<this[typeof Container_T]>;
}
export type Type = IteratorContainer;
