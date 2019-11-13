import { distinctUntilChanged as observableDistinctUntilChanged } from "@rx-min/rx-operators";
import { Operator } from "@rx-min/ix-core";
import { lift } from "./lift";

const referenceEquality = <T>(a: T, b: T): boolean => a === b;

export const distinctUntilChanged = <TReq, T>(
  equals: (a: T, b: T) => boolean = referenceEquality,
): Operator<TReq, T, TReq, T> => lift(observableDistinctUntilChanged(equals));
