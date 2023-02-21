import { StatefulContainerLike } from "../../../containers.js";
import {
  Lift,
  TInteractive,
  TReactive,
} from "../../__internal__/containers.internal.js";

const StatefulContainer_lift = <
  C extends StatefulContainerLike,
  TVar extends TInteractive | TReactive,
>({
  lift,
}: Lift<C, TVar>): Lift<C, TVar>["lift"] => lift;

export default StatefulContainer_lift;
