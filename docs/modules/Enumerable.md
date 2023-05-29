[Reactive-JS](../README.md) / Enumerable

# Module: Enumerable

## Table of contents

### Module Interfaces

- [EnumerableModule](../interfaces/Enumerable.EnumerableModule.md)

### Type Aliases

- [Signature](Enumerable.md#signature)
- [Type](Enumerable.md#type)

### Operator Functions

- [concatAll](Enumerable.md#concatall)
- [concatMap](Enumerable.md#concatmap)

## Type Aliases

### Signature

Ƭ **Signature**: [`EnumerableModule`](../interfaces/Enumerable.EnumerableModule.md)

___

### Type

Ƭ **Type**: [`EnumerableContainer`](../interfaces/Observable.EnumerableContainer.md)

## Operator Functions

### concatAll

▸ **concatAll**<`T`\>(): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

Converts a higher-order Container into a first-order
Container by concatenating the inner sources in order.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`T`\>\>

___

### concatMap

▸ **concatMap**<`TA`, `TB`\>(`selector`): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TA`\>, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](functions.md#function1)<`TA`, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\>\> |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TA`\>, [`EnumerableLike`](../interfaces/types.EnumerableLike.md)<`TB`\>\>
