import { StatefulContainerLike } from "../../../containers";
import { Lift, TInteractive, TReactive } from "../containers.internal";

const StatefulContainer$lift = <
  C extends StatefulContainerLike,
  TVar extends TInteractive | TReactive,
>({
  lift,
}: Lift<C, TVar>): Lift<C, TVar>["lift"] => lift;

export default StatefulContainer$lift;
