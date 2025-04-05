import React, { useMemo } from "react";
import ReactDOMClient from "react-dom/client";
import {
  useAnimate,
  useEvents,
  useScroll,
  useSpring,
} from "@reactive-js/core/react/web";
import { useEventSource } from "@reactive-js/core/react";
import { ScrollValue } from "@reactive-js/core/web";
import {
  alwaysFalse,
  alwaysTrue,
  compose,
  identity,
  Optional,
  pipe,
  pipeSome,
  pipeSomeLazy,
  Tuple2,
} from "@reactive-js/core/functions";
import * as Broadcaster from "@reactive-js/core/computations/Broadcaster";
import * as Observable from "@reactive-js/core/computations/Observable";
import { BroadcasterLike } from "@reactive-js/core/computations";
import { EventListenerLike_notify } from "@reactive-js/core/utils";
import * as Computation from "@reactive-js/core/computations/Computation";

const m = Computation.makeModule<
  Broadcaster.BroadcasterModule,
  "genPure" | "merge"
>({
  genPure: Broadcaster.genPure,
  merge: Broadcaster.merge,
});

const AnimatedCircle = ({
  animation,
}: {
  animation: Optional<BroadcasterLike<number>>;
}) => {
  const circleRef: React.Ref<HTMLDivElement> = useAnimate(
    animation,
    progress => ({
      clipPath: `circle(${progress * 25 + 5}%)`,
    }),
    [],
  );

  return (
    <div
      ref={circleRef}
      style={{
        backgroundColor: "orange",
        clipPath: `circle(5%)`,
        top: "50%",
        left: "50%",
        width: "100%",
        height: "100%",
        position: "fixed",
        inset: "0",
      }}
    />
  );
};

const ScrollApp = () => {
  const spring = useSpring({ precision: 0.1 });
  const [containerRef, scrollValues] = useScroll<HTMLDivElement>();
  const [props, events] = useEvents("onWheel");

  useEventSource(
    pipeSomeLazy(
      scrollValues,
      Broadcaster.keep<ScrollValue>(({ done }) => !done),
      Broadcaster.toObservable(),
      Observable.forEach(
        // Cancel any running springs
        () => spring?.[EventListenerLike_notify](identity),
      ),
      Observable.withLatestFrom(
        pipe(
          events ?? Computation.empty(m),
          Broadcaster.toObservable(),
          Observable.forkMerge<React.WheelEvent<any>, boolean>(
            Observable.map(alwaysTrue),
            compose(Observable.debounce(20), Observable.map(alwaysFalse)),
          ),
        ),
      ),
      Observable.debounce<Tuple2<ScrollValue, boolean>>(50),
      Observable.forEach(([{ y }, isWheeling]) => {
        const pos = y.progress;
        const { velocity } = y;

        if (velocity > 0 && !isWheeling) {
          spring?.[EventListenerLike_notify]({
            from: pos,
            to: [pos + 0.05, pos],
          });
        } else if (velocity < 0 && !isWheeling) {
          spring?.[EventListenerLike_notify]({
            from: pos,
            to: [pos - 0.025, pos],
          });
        }
      }),
    ),
    [scrollValues, events],
  );

  const circleAnimatation = useMemo(
    () =>
      spring &&
      pipeSome(
        scrollValues,
        Broadcaster.map(({ y }: ScrollValue) => y.progress),
        Computation.mergeWith(m, spring),
      ),
    [spring],
  );

  return (
    <div
      {...props}
      ref={containerRef}
      style={{
        height: "100%",
        width: "100%",
        overflowY: "scroll",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          boxSizing: "border-box",
          height: "100%",
          width: "100%",
          position: "fixed",
          inset: "0",
          pointerEvents: "none",
          zIndex: "0",
        }}
      >
        <AnimatedCircle animation={circleAnimatation} />
      </div>

      <div
        style={{
          width: "100vw",
          height: "200vh",
        }}
      />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOMClient.createRoot(rootElement as any).render(<ScrollApp />);
