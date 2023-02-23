import { Lift, StatefulContainerLike } from "../../../containers.js";

const StatefulContainer_lift = <C extends StatefulContainerLike>({
  lift,
}: Lift<C>): Lift<C>["lift"] => lift;

export default StatefulContainer_lift;
