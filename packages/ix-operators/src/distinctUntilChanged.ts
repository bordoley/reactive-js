import { distinctUntilChanged as observableDistinctUntilChanged } from "@reactive-js/rx-operators";
import { Operator } from "@reactive-js/ix-core";
import { lift } from "./lift";

const referenceEquality = <T>(a: T, b: T): boolean => a === b;

export const distinctUntilChanged = <TReq, T>(
  equals: (a: T, b: T) => boolean = referenceEquality,
): Operator<TReq, T, TReq, T> => lift(observableDistinctUntilChanged(equals));
