import { map as mapObs } from "../../observable.ts";
import { lift } from "./lift.ts";

export const map = <TA, TB>(mapper: (v: TA) => TB) => lift(mapObs(mapper));
