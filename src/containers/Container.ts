import {
  ConcatAll,
  ContainerLike,
  ContainerOf,
  ContainerOperator,
  FromIterable,
  Map,
} from "../containers";
import { Function1 } from "../functions";
import Container_compute from "./Container/__internal__/Container.compute";
import Container_concatMap from "./Container/__internal__/Container.concatMap";
import Container_concatWith from "./Container/__internal__/Container.concatWith";
import Container_contains from "./Container/__internal__/Container.contains";
import Container_encodeUtf8 from "./Container/__internal__/Container.encodeUtf8";
import Container_endWith from "./Container/__internal__/Container.endWith";
import Container_fromOption from "./Container/__internal__/Container.fromOption";
import Container_genMap from "./Container/__internal__/Container.genMap";
import Container_ignoreElements from "./Container/__internal__/Container.ignoreElements";
import Container_keepType from "./Container/__internal__/Container.keepType";
import Container_mapTo from "./Container/__internal__/Container.mapTo";
import Container_noneSatisfy from "./Container/__internal__/Container.noneSatisfy";
import Container_startWith from "./Container/__internal__/Container.startWith";
import Container_throws from "./Container/__internal__/Container.throws";
import Container_zipWith from "./Container/__internal__/Container.zipWith";

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
