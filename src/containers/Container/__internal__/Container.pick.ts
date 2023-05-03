import { Container, ContainerOperator } from "../../../containers.js";

const Container_pick =
  <C extends Container>(
    map: Container.Map<C>["map"],
  ): Container.Pick<C>["pick"] =>
  (...keys: any[]): ContainerOperator<C, any, unknown> =>
    map<any, unknown>((value: any) => {
      let result: any = value;
      for (const key of keys) {
        result = result[key];
      }
      return result;
    });

export default Container_pick;
