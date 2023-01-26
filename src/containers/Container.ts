import {
  Concat,
  ContainerLike,
  ContainerOf,
  ContainerOperator,
  FromArray,
  Zip,
} from "../containers";

import Container_compute from "./__internal__/Container/Container.compute";
import Container_concatWith from "./__internal__/Container/Container.concatWith";
import Container_contains from "./__internal__/Container/Container.contains";
import Container_encodeUtf8 from "./__internal__/Container/Container.encodeUtf8";
import Container_endWith from "./__internal__/Container/Container.endWith";
import Container_fromOption from "./__internal__/Container/Container.fromOption";
import Container_genMap from "./__internal__/Container/Container.genMap";
import Container_ignoreElements from "./__internal__/Container/Container.ignoreElements";
import Container_keepType from "./__internal__/Container/Container.keepType";
import Container_mapTo from "./__internal__/Container/Container.mapTo";
import Container_noneSatisfy from "./__internal__/Container/Container.noneSatisfy";
import Container_startWith from "./__internal__/Container/Container.startWith";
import Container_throws from "./__internal__/Container/Container.throws";
import Container_zipWith from "./__internal__/Container/Container.zipWith";
import Container_concatMap from "./__internal__/Container/ContainerLIke.concatMap";

export const compute = Container_compute;
export const concatMap = Container_concatMap;
export const concatWith = Container_concatWith;
export const contains = Container_contains;
export const encodeUtf8 = Container_encodeUtf8;

export const endWith: <C extends ContainerLike, T>(
  m: Concat<C> & FromArray<C, never>,
  value: T,
  ...values: readonly T[]
) => ContainerOperator<C, T, T> = Container_endWith;

export const fromOption = Container_fromOption;
export const genMap = Container_genMap;
export const ignoreElements = Container_ignoreElements;
export const keepType = Container_keepType;
export const mapTo = Container_mapTo;
export const noneSatisfy = Container_noneSatisfy;

export const startWith: <C extends ContainerLike, T>(
  m: Concat<C> & FromArray<C, never>,
  value: T,
  ...values: readonly T[]
) => ContainerOperator<C, T, T> = Container_startWith;

export const throws = Container_throws;

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
export const zipWith: ZipWith = Container_zipWith;
