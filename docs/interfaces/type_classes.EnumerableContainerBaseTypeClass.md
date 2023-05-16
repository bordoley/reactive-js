[Reactive-JS](../README.md) / [type-classes](../modules/type_classes.md) / EnumerableContainerBaseTypeClass

# Interface: EnumerableContainerBaseTypeClass<C, CEnumerator\>

[type-classes](../modules/type_classes.md).EnumerableContainerBaseTypeClass

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](types.Container.md) |
| `CEnumerator` | extends [`Type`](../modules/Enumerator.md#type) = [`Type`](../modules/Enumerator.md#type) |

## Hierarchy

- **`EnumerableContainerBaseTypeClass`**

  ↳ [`IterableModule`](Iterable.IterableModule.md)

  ↳ [`EnumerableContainerTypeClass`](type_classes.EnumerableContainerTypeClass.md)

## Table of contents

### Transform Methods

- [enumerate](type_classes.EnumerableContainerBaseTypeClass.md#enumerate)
- [toIterable](type_classes.EnumerableContainerBaseTypeClass.md#toiterable)

## Transform Methods

### enumerate

▸ **enumerate**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>, [`ContainerOf`](../modules/types.md#containerof)<`CEnumerator`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>, [`ContainerOf`](../modules/types.md#containerof)<`CEnumerator`, `T`\>\>

___

### toIterable

▸ **toIterable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>, `Iterable`<`T`\>\>

Converts the Container to a `IterableLike`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>, `Iterable`<`T`\>\>
