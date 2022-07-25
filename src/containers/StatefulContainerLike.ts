import {
  ConcatAll,
  ContainerOperator,
  Defer,
  FromIterator,
  Map,
  StatefulContainerLike,
} from "../containers";
import { Function1, compose, newInstance, pipe, pipeLazy } from "../functions";

export const encodeUtf8 =
  <C extends StatefulContainerLike>(
    m: Defer<C> & Map<C>,
  ): ContainerOperator<C, string, Uint8Array> =>
  obs =>
    m.defer(() => {
      const textEncoder = newInstance(TextEncoder);
      return pipe(
        obs,
        m.map(s => textEncoder.encode(s)),
      );
    });

export const genMap = <
  C extends StatefulContainerLike,
  TA,
  TB,
  OConcatAll extends Record<string, never> = Record<string, never>,
  OFromIterator extends Record<string, never> = Record<string, never>,
  TReturn = any,
  TNext = unknown,
>(
  m: Map<C> & ConcatAll<C, OConcatAll> & FromIterator<C, OFromIterator>,
  mapper: Function1<TA, Generator<TB, TReturn, TNext>>,
  options?: Partial<OConcatAll & OFromIterator>,
): ContainerOperator<C, TA, TB> =>
  compose(
    m.map(x => pipe(pipeLazy(x, mapper), m.fromIterator<TB>(options))),
    m.concatAll(options),
  );
