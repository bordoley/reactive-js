import React, { useMemo } from "react";
import ReactDOMClient from "react-dom/client";
import * as Observable from "@reactive-js/core/computations/Observable";
import { useAnimate } from "@reactive-js/core/react/web";
import { pipe, pipeLazy, returns } from "@reactive-js/core/functions";
import { __animate } from "@reactive-js/core/web/effects";
import * as EventSource from "@reactive-js/core/computations/EventSource";
import * as WebElement from "@reactive-js/core/web/Element";
import * as AnimationFrameScheduler from "@reactive-js/core/web/AnimationFrameScheduler";

type Point = { x: number; y: number };

const Root = () => {
  const spring = useMemo(
    pipeLazy(
      window,
      WebElement.eventSource<Window, "mousemove">("mousemove"),
      EventSource.map((ev: MouseEvent) => ({ x: ev.clientX, y: ev.clientY })),
      Observable.fromEventSource(),
      Observable.throttle(300, { mode: "interval" }),
      Observable.scanMany(
        (prev: Point, next: Point) =>
          pipe(
            Observable.spring({
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
      Observable.toEventSource(AnimationFrameScheduler.get()),
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
