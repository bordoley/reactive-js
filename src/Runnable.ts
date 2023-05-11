import {
  Container,
  Container_T,
  Container_type,
  RunnableLike,
} from "./types.js";

export interface Type extends Container {
  readonly [Container_type]?: RunnableLike<this[typeof Container_T]>;
}
