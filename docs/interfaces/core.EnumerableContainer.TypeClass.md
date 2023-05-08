[Reactive-JS](../README.md) / [core](../modules/core.md) / [EnumerableContainer](../modules/core.EnumerableContainer.md) / TypeClass

# Interface: TypeClass<C, CEnumerator\>

[core](../modules/core.md).[EnumerableContainer](../modules/core.EnumerableContainer.md).TypeClass

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](core.Container-1.md) |
| `CEnumerator` | extends [`EnumeratorContainer`](core.EnumeratorContainer.md) = [`EnumeratorContainer`](core.EnumeratorContainer.md) |

## Table of contents

### Transform Methods

- [enumerate](core.EnumerableContainer.TypeClass.md#enumerate)

## Transform Methods

### enumerate

▸ **enumerate**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Container.md#of)<`C`, `T`\>, [`Of`](../modules/core.Container.md#of)<`CEnumerator`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Container.md#of)<`C`, `T`\>, [`Of`](../modules/core.Container.md#of)<`CEnumerator`, `T`\>\>
