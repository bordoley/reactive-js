import React, { useMemo } from "react";
import ReactDOMClient from "react-dom/client";
import { useAnimate, useScroll, useSpring } from "@reactive-js/core/react/web";
import { useDisposable, useEventSource } from "@reactive-js/core/react";
import { ScrollValue } from "@reactive-js/core/web";
import { Optional, pipe, pipeSomeLazy } from "@reactive-js/core/functions";
import * as Broadcaster from "@reactive-js/core/computations/Broadcaster";
import * as Observable from "@reactive-js/core/computations/Observable";
import { BroadcasterLike } from "@reactive-js/core/computations";
import * as Publisher from "@reactive-js/core/computations/Publisher";
import { EventListenerLike_notify } from "@reactive-js/core/utils";

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

  const publishedScrollValues = useDisposable(
    Publisher.create<ScrollValue>,
    [],
  );

  const containerRef = useScroll<HTMLDivElement>(
    (v: ScrollValue) => {
      publishedScrollValues?.[EventListenerLike_notify](v);
    },
    [publishedScrollValues],
  );

  useEventSource(
    pipeSomeLazy(
      publishedScrollValues,
      Observable.fromBroadcaster(),
      Observable.debounce<ScrollValue>(50),
      Observable.forEach(({ y, done }) => {
        const pos = y.progress;
        const { velocity } = y;

        if (!done && velocity > 0) {
          spring?.[EventListenerLike_notify]({
            from: pos,
            to: [pos + 0.05, pos],
          });
        } else if (!done && velocity < 0) {
          spring?.[EventListenerLike_notify]({
            from: pos,
            to: [pos - 0.025, pos],
          });
        }
      }),
    ),
    [publishedScrollValues],
  );

  const circleAnimtation = useMemo(
    () =>
      spring &&
      publishedScrollValues &&
      Broadcaster.merge<number>(
        spring,
        pipe(
          publishedScrollValues,
          Broadcaster.map(({ y }: ScrollValue) => y.progress),
        ),
      ),
    [spring],
  );

  return (
    <div
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
        <AnimatedCircle animation={circleAnimtation} />
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
