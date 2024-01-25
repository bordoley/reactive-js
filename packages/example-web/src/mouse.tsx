import React, { useMemo } from "react";
import ReactDOMClient from "react-dom/client";
import * as Observable from "@reactive-js/core/concurrent/Observable";
import { useDisposable } from "@reactive-js/core/integrations/react";
import { useAnimate } from "@reactive-js/core/integrations/react/web";
import {
  pipe,
  pipeLazy,
  pipeSomeLazy,
  returns,
} from "@reactive-js/core/functions";
import {
  __await,
  __bindMethod,
  __constant,
  __currentScheduler,
  __memo,
  __observe,
  __stream,
  __using,
} from "@reactive-js/core/concurrent/Observable/effects";
import { __animate } from "@reactive-js/core/integrations/web/effects";
import * as EventSource from "@reactive-js/core/events/EventSource";
import * as WebElement from "@reactive-js/core/integrations/web/Element";
import * as AnimationFrameScheduler from "@reactive-js/core/integrations/web/AnimationFrameScheduler";
import * as ReactScheduler from "@reactive-js/core/integrations/react/Scheduler";

type Point = { x: number; y: number };

const Root = () => {
  const animationScheduler = useDisposable(
    pipeLazy(ReactScheduler.get(), AnimationFrameScheduler.create),
    [],
  );

  const spring = useMemo(
    pipeSomeLazy(animationScheduler, animationScheduler =>
      pipe(
        window,
        WebElement.eventSource<Window, "mousemove">("mousemove"),
        EventSource.map(ev => ({ x: ev.clientX, y: ev.clientY })),
        Observable.fromEventSource(),
        Observable.throttle(300, { mode: "interval" }),
        Observable.scanMany((prev: Point, next: Point) => {
          const diffX = next.x - prev.x;
          const diffY = next.y - prev.y;

          return Observable.animate({
            type: "spring",
            stiffness: 0.01,
            damping: 0.1,
            precision: 0.001,
            from: 0,
            to: 1,
            selector: (v: number) => ({
              x: prev.x + diffX * v,
              y: prev.y + diffY * v,
            }),
          });
        }, returns({ x: 0, y: 0 })),
        Observable.toEventSource(animationScheduler),
      ),
    ),
    [animationScheduler],
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
