import {
  Container,
  ContainerOperator,
  ContainerTypeClass,
} from "../../types.js";

const Container_pick =
  <C extends Container>(
    map: ContainerTypeClass<C>["map"],
  ): ContainerTypeClass<C>["pick"] =>
  (...keys: any[]): ContainerOperator<C, any, unknown> =>
    map<any, unknown>((value: any) => {
      let result: any = value;
      for (const key of keys) {
        result = result[key];
      }
      return result;
    });

export default Container_pick;
