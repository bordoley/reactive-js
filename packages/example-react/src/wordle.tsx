import React from "react";
import { useAnimatedState } from "@reactive-js/core/integrations/react";
import { AnimationConfig } from "@reactive-js/core/rx";
import { EventSourceLike } from "@reactive-js/core/util";
import { useAnimate } from "@reactive-js/core/integrations/react/web";

const items = ["W", "O", "R", "D", "L", "E"];

const SharedStyles = {
  width: "100%",
  height: "100%",
  position: "absolute",
  inset: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "Helvetica",
  fontWeight: 800,
  backfaceVisibility: "hidden",
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
  value?: EventSourceLike<[boolean, number]>;
  index: number;
}) => {
  const frontBoxRef = useAnimate<HTMLDivElement, [boolean, number]>(
    value,
    ([state, val]) => {
      const v = !state
        ? clamp(0, val / (index + 1), 180)
        : 180 - clamp(0, val / (index + 1), 180);

      return {
        transform: `perspective(600px) rotateX(${v}deg)`,
        transformStyle: "preserve-3d",
      };
    },
    [index],
  );

  const backBoxRef = useAnimate<HTMLDivElement, [boolean, number]>(
    value,
    ([state, val]) => {
      const v = state
        ? clamp(0, val / (index + 1), 180)
        : 180 - clamp(0, val / (index + 1), 180);

      return {
        transform: `perspective(600px) rotateX(${v}deg)`,
        transformStyle: "preserve-3d",
      };
    },
    [index],
  );

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
  const [animatedValues, dispatch] = useAnimatedState<
    boolean,
    [boolean, number]
  >(
    () => false,
    () => ({
      value: (
        _: boolean,
        next: boolean,
      ): readonly AnimationConfig<[boolean, number]>[] => [
        {
          type: "spring",
          stiffness: 0.0005,
          damping: 0.0026,
          precision: 0.1,
          from: 0,
          to: 1080,
          selector: (v: number) => [next, v],
        },
      ],
    }),
    [],
    { mode: "switching" },
  );
  return (
    <div
      style={{
        display: "flex",
        gap: 10,
        marginBottom: 80,
      }}
      onClick={() => {
        dispatch(x => !x);
      }}
    >
      {items.map((x, i) => (
        <AnimatedBox key={x} label={x} value={animatedValues.value} index={i} />
      ))}
    </div>
  );
};
