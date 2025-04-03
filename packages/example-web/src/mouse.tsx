import React from "react";
import ReactDOMClient from "react-dom/client";
import * as Observable from "@reactive-js/core/computations/Observable";
import * as SynchronousObservable from "@reactive-js/core/computations/SynchronousObservable";
import { useAnimate } from "@reactive-js/core/react/web";
import { pipe, pipeLazy, returns } from "@reactive-js/core/functions";
import * as Broadcaster from "@reactive-js/core/computations/Broadcaster";
import * as WebElement from "@reactive-js/core/web/Element";
import * as AnimationFrameScheduler from "@reactive-js/core/web/AnimationFrameScheduler";
import * as Producer from "@reactive-js/core/computations/Producer";
import * as DefaultScheduler from "@reactive-js/core/utils/DefaultScheduler";
import { useDisposable } from "@reactive-js/core/react";

type Point = { x: number; y: number };

const Root = () => {
  const spring = useDisposable(
    pipeLazy(
      window,
      WebElement.eventSource<Window, "mousemove">("mousemove"),
      Broadcaster.map((ev: MouseEvent) => ({ x: ev.clientX, y: ev.clientY })),
      Observable.fromBroadcaster(),
      Observable.throttle(300, { mode: "interval" }),
      Observable.subscribeOn(DefaultScheduler.get()),
      Observable.scanMany(
        (prev: Point, next: Point) =>
          pipe(
            SynchronousObservable.spring({
              stiffness: 0.01,
              damping: 0.1,
              precision: 0.001,
            }),
            Observable.map((v: number) => ({
              x: prev.x + (next.x - prev.x) * v,
              y: prev.y + (next.y - prev.y) * v,
            })),
          ),
        returns({ x: 0, y: 0 }),
      ),
      Observable.toProducer({ scheduler: AnimationFrameScheduler.get() }),
      Producer.broadcast(),
    ),
    [],
  );
  const ref = useAnimate<HTMLDivElement, Point>(
    spring,
    (p: Point) => ({
      top: `${p.y - 33}px`,
      left: `${p.x - 33}px`,
    }),
    [],
  );

  return (
    <div
      ref={ref}
      style={{
        backgroundColor: "blue",
        position: "absolute",
        width: "66px",
        height: "66px",
      }}
    />
  );
};

const rootElement = document.getElementById("root");
ReactDOMClient.createRoot(rootElement as any).render(<Root />);
