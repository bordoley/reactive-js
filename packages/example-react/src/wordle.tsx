import React, { useEffect, useMemo, useState } from "react";
import { useAnimation } from "@reactive-js/core/integrations/react";
import { EventSourceLike } from "@reactive-js/core/util";
import { useAnimate } from "@reactive-js/core/integrations/react/web";
import { pipeLazy } from "@reactive-js/core/functions";
import * as EventSource from "@reactive-js/core/util/EventSource";
import { Property } from "csstype";

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

export const clamp = (min: number, v: number, max: number): number =>
  v > max ? max : v < min ? min : v;

const AnimatedBox = ({
  label,
  value,
  index,
}: {
  label: string;
  value: EventSourceLike<{ event: boolean; value: number }>;
  index: number;
}) => {
  const frontBoxValue = useMemo(
    pipeLazy(
      value,
      EventSource.map(({ event: state, value }) => {
        const v = !state
          ? clamp(0, value / (index + 1), 180)
          : 180 - clamp(0, value / (index + 1), 180);

        return {
          transform: `perspective(600px) rotateX(${v}deg)`,
          transformStyle: "preserve-3d",
        };
      }),
    ),
    [index, value],
  );

  const backBoxValue = useMemo(
    pipeLazy(
      value ?? EventSource.empty<{ event: boolean; value: number }>(),
      EventSource.map(({ event: state, value }) => {
        const v = state
          ? clamp(0, value / (index + 1), 180)
          : 180 - clamp(0, value / (index + 1), 180);

        return {
          transform: `perspective(600px) rotateX(${v}deg)`,
          transformStyle: "preserve-3d",
        };
      }),
    ),
    [index, value],
  );

  const frontBoxRef = useAnimate<HTMLDivElement>(frontBoxValue);
  const backBoxRef = useAnimate<HTMLDivElement>(backBoxValue);

  return (
    <Box>
      <div
        ref={frontBoxRef}
        style={{
          ...SharedStyles,
          backgroundColor: "#fafafa",
          border: "solid 2px #1a1a1a",
          transform: `perspective(600px) rotateX(180deg)`,
        }}
      >
        {"?"}
      </div>

      <div
        ref={backBoxRef}
        style={{
          ...SharedStyles,
          backgroundColor: "#6cab64",
          border: "solid 2px #6cab64",
          color: "#fafafa",
          transform: `perspective(600px) rotateX(0deg)`,
        }}
      >
        {label}
      </div>
    </Box>
  );
};

export const Wordle = () => {
  const [state, updateState] = useState(false);

  const [animatedValue, dispatch, isAnimationRunning] = useAnimation<boolean>(
    () => ({
      type: "spring",
      stiffness: 0.0005,
      damping: 0.0026,
      precision: 0.1,
      from: 0,
      to: 1080,
    }),
    [],
    { mode: "blocking" },
  );

  useEffect(() => {
    dispatch(state);
  }, [state]);

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
        <AnimatedBox key={x} label={x} value={animatedValue} index={i} />
      ))}
    </div>
  );
};
