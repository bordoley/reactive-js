[Reactive-JS](../README.md) / [core](../modules/core.md) / [EnumerableContainers](../modules/core.EnumerableContainers.md) / TypeClass

# Interface: TypeClass<C, CEnumerator\>

[core](../modules/core.md).[EnumerableContainers](../modules/core.EnumerableContainers.md).TypeClass

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](core.Container.md) |
| `CEnumerator` | extends [`EnumeratorContainer`](core.EnumeratorContainer.md) = [`EnumeratorContainer`](core.EnumeratorContainer.md) |

## Hierarchy

- [`TypeClass`](core.Containers.TypeClass.md)<`C`\>

  ↳ **`TypeClass`**

## Table of contents

### Transform Methods

- [enumerate](core.EnumerableContainers.TypeClass.md#enumerate)
- [toEnumerable](core.EnumerableContainers.TypeClass.md#toenumerable)
- [toIterable](core.EnumerableContainers.TypeClass.md#toiterable)

## Transform Methods

### enumerate

▸ **enumerate**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>, [`Of`](../modules/core.Containers.md#of)<`CEnumerator`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>, [`Of`](../modules/core.Containers.md#of)<`CEnumerator`, `T`\>\>

___

### toEnumerable

▸ **toEnumerable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>, [`EnumerableLike`](core.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>, [`EnumerableLike`](core.EnumerableLike.md)<`T`\>\>

___

### toIterable

▸ **toIterable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>, `Iterable`<`T`\>\>

Converts the Container to a `IterableLike`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>, `Iterable`<`T`\>\>
