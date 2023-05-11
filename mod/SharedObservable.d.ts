import { Container, Container_T, Container_type, SharedObservableLike } from "./types.js";
export interface Type extends Container {
    readonly [Container_type]?: SharedObservableLike<this[typeof Container_T]>;
}
export interface Signature {
}
