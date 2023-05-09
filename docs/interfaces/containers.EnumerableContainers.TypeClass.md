[Reactive-JS](../README.md) / [containers](../modules/containers.md) / [EnumerableContainers](../modules/containers.EnumerableContainers.md) / TypeClass

# Interface: TypeClass<C, CEnumerator\>

[containers](../modules/containers.md).[EnumerableContainers](../modules/containers.EnumerableContainers.md).TypeClass

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](containers.Container.md) |
| `CEnumerator` | extends [`EnumeratorContainer`](containers.EnumeratorContainer-1.md) = [`EnumeratorContainer`](containers.EnumeratorContainer-1.md) |

## Hierarchy

- **`TypeClass`**

  ↳ [`TypeClass`](containers.IterableContainer.TypeClass.md)

  ↳ [`TypeClass`](containers.EnumerableContainer.TypeClass.md)

## Table of contents

### Transform Methods

- [enumerate](containers.EnumerableContainers.TypeClass.md#enumerate)
- [toEnumerable](containers.EnumerableContainers.TypeClass.md#toenumerable)
- [toIterable](containers.EnumerableContainers.TypeClass.md#toiterable)

## Transform Methods

### enumerate

▸ **enumerate**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, [`Of`](../modules/containers.Containers.md#of)<`CEnumerator`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, [`Of`](../modules/containers.Containers.md#of)<`CEnumerator`, `T`\>\>

___

### toEnumerable

▸ **toEnumerable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

___

### toIterable

▸ **toIterable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, `Iterable`<`T`\>\>

Converts the Container to a `IterableLike`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, `Iterable`<`T`\>\>
