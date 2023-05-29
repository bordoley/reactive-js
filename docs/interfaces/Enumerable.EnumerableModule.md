[Reactive-JS](../README.md) / [Enumerable](../modules/Enumerable.md) / EnumerableModule

# Interface: EnumerableModule

[Enumerable](../modules/Enumerable.md).EnumerableModule

## Table of contents

### Operator Methods

- [concatAll](Enumerable.EnumerableModule.md#concatall)
- [concatMap](Enumerable.EnumerableModule.md#concatmap)

## Operator Methods

### concatAll

▸ **concatAll**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

Converts a higher-order Container into a first-order
Container by concatenating the inner sources in order.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<[`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

___

### concatMap

▸ **concatMap**<`TA`, `TB`\>(`selector`): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`TA`\>, [`EnumerableLike`](types.EnumerableLike.md)<`TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, [`EnumerableLike`](types.EnumerableLike.md)<`TB`\>\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](types.EnumerableLike.md)<`TA`\>, [`EnumerableLike`](types.EnumerableLike.md)<`TB`\>\>
