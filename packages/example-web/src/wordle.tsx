import React, { useEffect, useState } from "react";
import { useAnimate } from "@reactive-js/core/integrations/react/web";
import { Property } from "csstype";
import * as Streamable from "@reactive-js/core/concurrent/Streamable";
import {
  useDispatcher,
  useDisposable,
  useStream,
  useObserve,
} from "@reactive-js/core/integrations/react";
import { Optional, clamp, pipe, pipeLazy } from "@reactive-js/core/functions";
import * as ReactScheduler from "@reactive-js/core/integrations/react/Scheduler";
import * as AnimationFrameScheduler from "@reactive-js/core/integrations/web/AnimationFrameScheduler";
import { EventSourceLike } from "@reactive-js/core/events";
import { DictionaryLike_get } from "@reactive-js/core/collections";
import * as Observable from "@reactive-js/core/concurrent/Observable";

const items = ["W", "O", "R", "D", "L", "E"];

const SharedStyles = {
  width: "100%",
  height: "100%",
  position: "absolute" as Property.Position,
  inset: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "Helvetica",
  fontWeight: 800,
  backfaceVisibility: "hidden" as Property.BackfaceVisibility,
  transformStyle: "preserve-3d" as Property.TransformStyle,
};

const Box = (props: any) => (
  <div
    {...{ ...props }}
    style={{
      position: "relative",
      height: 50,
      width: 50,
    }}
  />
);

const clampPositive180deg = clamp(0, 180);

const calcXRotation = (direction: boolean, value: number, i: number) => {
  const clamped = clampPositive180deg(value / (i + 1));
  return direction ? clamped : 180 - clamped;
};

const AnimatedBox = ({
  label,
  animation,
  index,
}: {
  label: string;
  animation: Optional<EventSourceLike<{ direction: boolean; value: number }>>;
  index: number;
}) => {
  const frontBox: React.Ref<HTMLDivElement> = useAnimate(
    animation,
    ({ direction, value }) => ({
      transform: `perspective(600px) rotateX(${
        180 - calcXRotation(direction, value, index)
      }deg)`,
    }),
    [index],
  );

  const backBox: React.Ref<HTMLDivElement> = useAnimate(
    animation,
    ({ direction, value }) => ({
      transform: `perspective(600px) rotateX(${calcXRotation(
        direction,
        value,
        index,
      )}deg)`,
    }),
    [index],
  );

  return (
    <Box>
      <div
        ref={frontBox}
        style={{
          ...SharedStyles,
          backgroundColor: "#fafafa",
          border: "solid 2px #1a1a1a",
        }}
      >
        {"?"}
      </div>

      <div
        ref={backBox}
        style={{
          ...SharedStyles,
          backgroundColor: "#6cab64",
          border: "solid 2px #6cab64",
          color: "#fafafa",
        }}
      >
        {label}
      </div>
    </Box>
  );
};

const scale = (start: number, end: number) => (v: number) => {
  const diff = end - start;
  return start + v * diff;
};

export const Wordle = () => {
  const [state, updateState] = useState(false);

  const animationScheduler = useDisposable(
    pipeLazy(ReactScheduler.get(), AnimationFrameScheduler.create),
    [],
  );

  const animationGroup = useStream(
    () =>
      Streamable.animationGroupEventHandler<
        { direction: boolean; value: number },
        boolean
      >(
        {
          a: (direction: boolean) =>
            pipe(
              Observable.spring({
                stiffness: 0.0005,
                damping: 0.0026,
                precision: 0.1,
              }),
              Observable.map(scale(0, 180 * items.length)),
              Observable.map(value => ({ direction, value })),
            ),
        },
        { mode: "blocking", scheduler: animationScheduler },
      ),
    [animationScheduler],
  );

  const animation = animationGroup?.[DictionaryLike_get]("a");
  const { enqueue } = useDispatcher(animationGroup);
  const isAnimationRunning = useObserve(animationGroup) ?? false;

  useEffect(() => {
    enqueue(state);
  }, [enqueue, state]);

  return (
    <div
      style={{
        display: "flex",
        gap: 10,
        marginBottom: 80,
      }}
      onClick={() => {
        if (!isAnimationRunning) {
          updateState(x => !x);
        }
      }}
    >
      {items.map((x, i) => (
        <AnimatedBox key={x} label={x} animation={animation} index={i} />
      ))}
    </div>
  );
};
