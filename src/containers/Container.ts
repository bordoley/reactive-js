import {
  Concat,
  ContainerLike,
  ContainerOf,
  ContainerOperator,
  FromArray,
  Zip,
} from "../containers";

import Container$compute from "./__internal__/Container/Container.compute";
import Container$concatWith from "./__internal__/Container/Container.concatWith";
import Container$contains from "./__internal__/Container/Container.contains";
import Container$encodeUtf8 from "./__internal__/Container/Container.encodeUtf8";
import Container$endWith from "./__internal__/Container/Container.endWith";
import Container$fromOption from "./__internal__/Container/Container.fromOption";
import Container$genMap from "./__internal__/Container/Container.genMap";
import Container$ignoreElements from "./__internal__/Container/Container.ignoreElements";
import Container$keepType from "./__internal__/Container/Container.keepType";
import Container$mapTo from "./__internal__/Container/Container.mapTo";
import Container$noneSatisfy from "./__internal__/Container/Container.noneSatisfy";
import Container$startWith from "./__internal__/Container/Container.startWith";
import Container$throws from "./__internal__/Container/Container.throws";
import Container$zipWith from "./__internal__/Container/Container.zipWith";
import Container$concatMap from "./__internal__/Container/ContainerLIke.concatMap";

export const compute = Container$compute;
export const concatMap = Container$concatMap;
export const concatWith = Container$concatWith;
export const contains = Container$contains;
export const encodeUtf8 = Container$encodeUtf8;

export const endWith: <C extends ContainerLike, T>(
  m: Concat<C> & FromArray<C, never>,
  value: T,
  ...values: readonly T[]
) => ContainerOperator<C, T, T> = Container$endWith;

export const fromOption = Container$fromOption;
export const genMap = Container$genMap;
export const ignoreElements = Container$ignoreElements;
export const keepType = Container$keepType;
export const mapTo = Container$mapTo;
export const noneSatisfy = Container$noneSatisfy;

export const startWith: <C extends ContainerLike, T>(
  m: Concat<C> & FromArray<C, never>,
  value: T,
  ...values: readonly T[]
) => ContainerOperator<C, T, T> = Container$startWith;

export const throws = Container$throws;

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
export const zipWith: ZipWith = Container$zipWith;
