import { map as mapObs } from "../../observable";
import { lift } from "./lift";

export const map = <TA, TB>(mapper: (v: TA) => TB) => lift(mapObs(mapper));
