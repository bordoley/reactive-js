[Reactive-JS](../README.md) / containers/IterableLike

# Module: containers/IterableLike

## Table of contents

### Variables

- [toEnumerableT](containers_IterableLike.md#toenumerablet)
- [toIterableT](containers_IterableLike.md#toiterablet)

### Functions

- [toEnumerable](containers_IterableLike.md#toenumerable)
- [toIterable](containers_IterableLike.md#toiterable)

## Variables

### toEnumerableT

• `Const` **toEnumerableT**: [`ToEnumerable`](ix.md#toenumerable)<[`IterableLike`](../interfaces/containers.IterableLike.md)\>

___

### toIterableT

• `Const` **toIterableT**: [`ToIterable`](containers.md#toiterable)<[`IterableLike`](../interfaces/containers.IterableLike.md)\>

## Functions

### toEnumerable

▸ **toEnumerable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`IterableLike`](../interfaces/containers.IterableLike.md)<`T`\>, [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`IterableLike`](../interfaces/containers.IterableLike.md)<`T`\>, [`EnumerableLike`](../interfaces/ix.EnumerableLike.md)<`T`\>\>

___

### toIterable

▸ **toIterable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`IterableLike`](../interfaces/containers.IterableLike.md)<`T`\>, `Iterable`<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`IterableLike`](../interfaces/containers.IterableLike.md)<`T`\>, `Iterable`<`T`\>\>
