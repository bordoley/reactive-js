import { Container, ContainerModule, ContainerOperator } from "../../types.js";

const Container_pick =
  <C extends Container>(
    map: ContainerModule<C>["map"],
  ): ContainerModule<C>["pick"] =>
  (...keys: any[]): ContainerOperator<C, any, unknown> =>
    map<any, unknown>((value: any) => {
      let result: any = value;
      for (const key of keys) {
        result = result[key];
      }
      return result;
    });

export default Container_pick;
