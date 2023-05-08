import { Container } from "../../../core.js";

const Container_pick =
  <C extends Container>(
    map: Container.TypeClass<C>["map"],
  ): Container.TypeClass<C>["pick"] =>
  (...keys: any[]): Container.Operator<C, any, unknown> =>
    map<any, unknown>((value: any) => {
      let result: any = value;
      for (const key of keys) {
        result = result[key];
      }
      return result;
    });

export default Container_pick;
