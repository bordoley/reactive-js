[Reactive-JS](../README.md) / [type-classes](../modules/type_classes.md) / BlockingContainerBaseTypeClass

# Interface: BlockingContainerBaseTypeClass<C\>

[type-classes](../modules/type_classes.md).BlockingContainerBaseTypeClass

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](types.Container.md) |

## Hierarchy

- **`BlockingContainerBaseTypeClass`**

  ↳ [`EnumeratorModule`](Enumerator.EnumeratorModule.md)

  ↳ [`IterableModule`](Iterable.IterableModule.md)

  ↳ [`RunnableContainerTypeClass`](type_classes.RunnableContainerTypeClass.md)

## Table of contents

### Transform Methods

- [toReadonlyArray](type_classes.BlockingContainerBaseTypeClass.md#toreadonlyarray)

## Transform Methods

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>, readonly `T`[]\>

Converts the Container to a `ReadonlyArrayContainer`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>, readonly `T`[]\>
