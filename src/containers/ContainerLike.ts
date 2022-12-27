import {
  Concat,
  ContainerLike,
  ContainerOf,
  ContainerOperator,
  FromArray,
  Zip,
} from "../containers";

import ContainerLike__concatMap from "./__internal__/ContainerLike/ContainerLIke.concatMap";
import ContainerLike__compute from "./__internal__/ContainerLike/ContainerLike.compute";
import Container__concatWith from "./__internal__/ContainerLike/ContainerLike.concatWith";
import ContainerLike__contains from "./__internal__/ContainerLike/ContainerLike.contains";
import ContainerLike__encodeUtf8 from "./__internal__/ContainerLike/ContainerLike.encodeUtf8";
import ContainerLike__endWith from "./__internal__/ContainerLike/ContainerLike.endWith";
import ContainerLike__fromOption from "./__internal__/ContainerLike/ContainerLike.fromOption";
import ContainerLike__genMap from "./__internal__/ContainerLike/ContainerLike.genMap";
import ContainerLike__ignoreElements from "./__internal__/ContainerLike/ContainerLike.ignoreElements";
import ContainerLike__keepType from "./__internal__/ContainerLike/ContainerLike.keepType";
import ContainerLike__mapTo from "./__internal__/ContainerLike/ContainerLike.mapTo";
import ContainerLike__noneSatisfy from "./__internal__/ContainerLike/ContainerLike.noneSatisfy";
import ContainerLike__startWith from "./__internal__/ContainerLike/ContainerLike.startWith";
import ContainerLike__throws from "./__internal__/ContainerLike/ContainerLike.throws";
import ContainerLike__zipWith from "./__internal__/ContainerLike/ContainerLike.zipWith";

export const compute = ContainerLike__compute;
export const concatMap = ContainerLike__concatMap;
export const concatWith = Container__concatWith;
export const contains = ContainerLike__contains;
export const encodeUtf8 = ContainerLike__encodeUtf8;

export const endWith: <C extends ContainerLike, T>(
  m: Concat<C> & FromArray<C, never>,
  value: T,
  ...values: readonly T[]
) => ContainerOperator<C, T, T> = ContainerLike__endWith;

export const fromOption = ContainerLike__fromOption;
export const genMap = ContainerLike__genMap;
export const ignoreElements = ContainerLike__ignoreElements;
export const keepType = ContainerLike__keepType;
export const mapTo = ContainerLike__mapTo;
export const noneSatisfy = ContainerLike__noneSatisfy;

export const startWith: <C extends ContainerLike, T>(
  m: Concat<C> & FromArray<C, never>,
  value: T,
  ...values: readonly T[]
) => ContainerOperator<C, T, T> = ContainerLike__startWith;

export const throws = ContainerLike__throws;

interface ZipWith {
  <C extends ContainerLike, TA, TB>(
    { zip }: Zip<C>,
    b: ContainerOf<C, TB>,
  ): ContainerOperator<C, TA, readonly [TA, TB]>;
  <C extends ContainerLike, TA, TB, TC>(
    { zip }: Zip<C>,
    b: ContainerOf<C, TB>,
    c: ContainerOf<C, TC>,
  ): ContainerOperator<C, TA, readonly [TA, TB, TC]>;
  <C extends ContainerLike, TA, TB, TC, TD>(
    { zip }: Zip<C>,
    b: ContainerOf<C, TB>,
    c: ContainerOf<C, TC>,
    d: ContainerOf<C, TD>,
  ): ContainerOperator<C, TA, readonly [TA, TB, TC, TD]>;
  <C extends ContainerLike, TA, TB, TC, TD, TE>(
    { zip }: Zip<C>,
    b: ContainerOf<C, TB>,
    c: ContainerOf<C, TC>,
    d: ContainerOf<C, TD>,
    e: ContainerOf<C, TE>,
  ): ContainerOperator<C, TA, readonly [TA, TB, TC, TD, TE]>;
  <C extends ContainerLike, TA, TB, TC, TD, TE, TF>(
    { zip }: Zip<C>,
    b: ContainerOf<C, TB>,
    c: ContainerOf<C, TC>,
    d: ContainerOf<C, TD>,
    e: ContainerOf<C, TE>,
    f: ContainerOf<C, TF>,
  ): ContainerOperator<C, TA, readonly [TA, TB, TC, TD, TE, TF]>;
  <C extends ContainerLike, TA, TB, TC, TD, TE, TF, TG>(
    { zip }: Zip<C>,
    b: ContainerOf<C, TB>,
    c: ContainerOf<C, TC>,
    d: ContainerOf<C, TD>,
    e: ContainerOf<C, TE>,
    f: ContainerOf<C, TF>,
    g: ContainerOf<C, TG>,
  ): ContainerOperator<C, TA, readonly [TA, TB, TC, TD, TE, TF, TG]>;
  <C extends ContainerLike, TA, TB, TC, TD, TE, TF, TG, TH>(
    { zip }: Zip<C>,
    b: ContainerOf<C, TB>,
    c: ContainerOf<C, TC>,
    d: ContainerOf<C, TD>,
    e: ContainerOf<C, TE>,
    f: ContainerOf<C, TF>,
    g: ContainerOf<C, TG>,
    h: ContainerOf<C, TH>,
  ): ContainerOperator<C, TA, readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
  <C extends ContainerLike, TA, TB, TC, TD, TE, TF, TG, TH, TI>(
    { zip }: Zip<C>,
    b: ContainerOf<C, TB>,
    c: ContainerOf<C, TC>,
    d: ContainerOf<C, TD>,
    e: ContainerOf<C, TE>,
    f: ContainerOf<C, TF>,
    g: ContainerOf<C, TG>,
    h: ContainerOf<C, TH>,
    i: ContainerOf<C, TI>,
  ): ContainerOperator<C, TA, readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
}
export const zipWith: ZipWith = ContainerLike__zipWith;
