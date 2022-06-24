import { createNever } from "../source";
import { createT } from "./createObservable";

export const never = createNever(createT);
