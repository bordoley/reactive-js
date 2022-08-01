/// <reference types="./FlowableLike.d.ts" />
"use strict";
/*
import { onSubscribe } from "../../old_src/observable";
import { compose, Function1 } from "../functions";
import { createObservable, ObservableLike } from "../rx";
import { forEach } from "../rx/ObservableLike";
import { dispatchTo } from "../scheduling/DispatcherLike";
import { FlowableLike } from "../streaming";

export const toObservable =
<T>(): Function1<FlowableLike<T>, ObservableLike<T>> =>
src =>
  createObservable(observer => {
    const { dispatcher, scheduler } = observer;

    const op = compose(
      forEach<T>(dispatchTo(dispatcher)),
      ignoreElements(keepT),
      startWith({ ...concatT, ...fromArrayT }, "pause", "resume"),
      onSubscribe(() => dispatcher),
    );

    pipe(createStream(op, scheduler), sourceFrom(src), addTo(observer));
  });

export const toObservableT: ToObservable<FlowableLike<unknown>> = {
toObservable,
};*/
