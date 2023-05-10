import { describe, expectEquals, test } from "../../__internal__/testing.js";
import { pipe } from "../../functions.js";
import { KeyedContainerTypeClass } from "../../type-classes.js";
import { Container } from "../../types.js";

const KeyedContainerTypeClassTests = <C extends Container>(
  m: KeyedContainerTypeClass<C>,
) =>
  describe(
    "KeyedContainerTypeClass",
    describe(
      "empty",
      test("has identity semantics", () => {
        const empty1 = m.empty();
        const empty2 = m.empty();

        pipe(empty2, expectEquals(empty1));
      }),
    ),
  );

export default KeyedContainerTypeClassTests;
