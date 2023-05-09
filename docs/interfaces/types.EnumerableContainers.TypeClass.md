[Reactive-JS](../README.md) / [types](../modules/types.md) / [EnumerableContainers](../modules/types.EnumerableContainers.md) / TypeClass

# Interface: TypeClass<C, CEnumerator\>

[types](../modules/types.md).[EnumerableContainers](../modules/types.EnumerableContainers.md).TypeClass

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](types.Container.md) |
| `CEnumerator` | extends [`EnumeratorContainer`](types.EnumeratorContainer-1.md) = [`EnumeratorContainer`](types.EnumeratorContainer-1.md) |

## Hierarchy

- **`TypeClass`**

  ↳ [`TypeClass`](types.IterableContainer.TypeClass.md)

  ↳ [`TypeClass`](types.EnumerableContainer.TypeClass.md)

## Table of contents

### Transform Methods

- [enumerate](types.EnumerableContainers.TypeClass.md#enumerate)
- [toEnumerable](types.EnumerableContainers.TypeClass.md#toenumerable)
- [toIterable](types.EnumerableContainers.TypeClass.md#toiterable)

## Transform Methods

### enumerate

▸ **enumerate**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/types.Containers.md#of)<`C`, `T`\>, [`Of`](../modules/types.Containers.md#of)<`CEnumerator`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/types.Containers.md#of)<`C`, `T`\>, [`Of`](../modules/types.Containers.md#of)<`CEnumerator`, `T`\>\>

___

### toEnumerable

▸ **toEnumerable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/types.Containers.md#of)<`C`, `T`\>, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/types.Containers.md#of)<`C`, `T`\>, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

___

### toIterable

▸ **toIterable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/types.Containers.md#of)<`C`, `T`\>, `Iterable`<`T`\>\>

Converts the Container to a `IterableLike`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/types.Containers.md#of)<`C`, `T`\>, `Iterable`<`T`\>\>
