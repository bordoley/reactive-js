import {
  ConcatAll,
  ContainerLike,
  ContainerOf,
  ContainerOperator,
  FromIterable,
  Map,
} from "../containers";
import { Function1 } from "../functions";
import Container_compute from "./__internal__/Container/Container.compute";
import Container_concatMap from "./__internal__/Container/Container.concatMap";
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

export const compute = Container_compute;
export const concatMap: <C extends ContainerLike, TA, TB>(
  m: Map<C> & ConcatAll<C>,
  mapper: Function1<TA, ContainerOf<C, TB>>,
) => ContainerOperator<C, TA, TB> = Container_concatMap;
export const concatWith = Container_concatWith;
export const contains = Container_contains;
export const encodeUtf8 = Container_encodeUtf8;
export const endWith = Container_endWith;
export const fromOption = Container_fromOption;
export const genMap: <C extends ContainerLike, TA, TB, OFromIterable = never>(
  m: ConcatAll<C, never> & Map<C> & FromIterable<C, OFromIterable>,
  mapper: Function1<TA, Generator<TB, any, any>>,
  options?: OFromIterable,
) => ContainerOperator<C, TA, TB> = Container_genMap;
export const ignoreElements = Container_ignoreElements;
export const keepType = Container_keepType;
export const mapTo = Container_mapTo;
export const noneSatisfy = Container_noneSatisfy;
export const startWith = Container_startWith;
export const throws = Container_throws;
export const zipWith = Container_zipWith;

/** @ignore */
const Container = {
  compute,
  concatMap,
  concatWith,
  contains,
  encodeUtf8,
  endWith,
  fromOption,
  genMap,
  ignoreElements,
  keepType,
  mapTo,
  noneSatisfy,
  startWith,
  throws,
  zipWith,
};

export default Container;
