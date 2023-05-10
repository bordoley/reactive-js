[Reactive-JS](../README.md) / [type-classes](../modules/type_classes.md) / EnumerableTypeClass

# Interface: EnumerableTypeClass<C, CEnumerator\>

[type-classes](../modules/type_classes.md).EnumerableTypeClass

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](types.Container.md) |
| `CEnumerator` | extends [`Type`](Enumerator.Type.md) = [`Type`](Enumerator.Type.md) |

## Hierarchy

- **`EnumerableTypeClass`**

  ↳ [`Signature`](Iterable.Signature.md)

## Table of contents

### Transform Methods

- [enumerate](type_classes.EnumerableTypeClass.md#enumerate)
- [toIterable](type_classes.EnumerableTypeClass.md#toiterable)

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
