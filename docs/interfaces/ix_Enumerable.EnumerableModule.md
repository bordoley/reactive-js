[Reactive-JS](../README.md) / [ix/Enumerable](../modules/ix_Enumerable.md) / EnumerableModule

# Interface: EnumerableModule

[ix/Enumerable](../modules/ix_Enumerable.md).EnumerableModule

## Table of contents

### Methods

- [buffer](ix_Enumerable.EnumerableModule.md#buffer)
- [concat](ix_Enumerable.EnumerableModule.md#concat)
- [concatMany](ix_Enumerable.EnumerableModule.md#concatmany)
- [concatWith](ix_Enumerable.EnumerableModule.md#concatwith)
- [decodeWithCharset](ix_Enumerable.EnumerableModule.md#decodewithcharset)
- [distinctUntilChanged](ix_Enumerable.EnumerableModule.md#distinctuntilchanged)
- [keep](ix_Enumerable.EnumerableModule.md#keep)
- [map](ix_Enumerable.EnumerableModule.md#map)
- [pairwise](ix_Enumerable.EnumerableModule.md#pairwise)
- [scan](ix_Enumerable.EnumerableModule.md#scan)
- [skipFirst](ix_Enumerable.EnumerableModule.md#skipfirst)
- [takeFirst](ix_Enumerable.EnumerableModule.md#takefirst)
- [takeWhile](ix_Enumerable.EnumerableModule.md#takewhile)

## Methods

### buffer

▸ **buffer**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](ix.EnumerableLike.md)<`T`\>, [`EnumerableLike`](ix.EnumerableLike.md)<readonly `T`[]\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](ix.EnumerableLike.md)<`T`\>, [`EnumerableLike`](ix.EnumerableLike.md)<readonly `T`[]\>\>

___

### concat

▸ **concat**<`T`\>(`fst`, `snd`, `...tail`): [`EnumerableLike`](ix.EnumerableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fst` | [`EnumerableLike`](ix.EnumerableLike.md)<`T`\> |
| `snd` | [`EnumerableLike`](ix.EnumerableLike.md)<`T`\> |
| `...tail` | readonly [`EnumerableLike`](ix.EnumerableLike.md)<`T`\>[] |

#### Returns

[`EnumerableLike`](ix.EnumerableLike.md)<`T`\>

___

### concatMany

▸ **concatMany**<`T`\>(`enumerables`): [`EnumerableLike`](ix.EnumerableLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `enumerables` | readonly [`EnumerableLike`](ix.EnumerableLike.md)<`T`\>[] |

#### Returns

[`EnumerableLike`](ix.EnumerableLike.md)<`T`\>

___

### concatWith

▸ **concatWith**<`T`\>(`snd`, `...tail`): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](ix.EnumerableLike.md)<`T`\>, [`EnumerableLike`](ix.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `snd` | [`EnumerableLike`](ix.EnumerableLike.md)<`T`\> |
| `...tail` | readonly [`EnumerableLike`](ix.EnumerableLike.md)<`T`\>[] |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](ix.EnumerableLike.md)<`T`\>, [`EnumerableLike`](ix.EnumerableLike.md)<`T`\>\>

___

### decodeWithCharset

▸ **decodeWithCharset**(`options?`): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](ix.EnumerableLike.md)<`ArrayBuffer`\>, [`EnumerableLike`](ix.EnumerableLike.md)<`string`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.charset?` | `string` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](ix.EnumerableLike.md)<`ArrayBuffer`\>, [`EnumerableLike`](ix.EnumerableLike.md)<`string`\>\>

___

### distinctUntilChanged

▸ **distinctUntilChanged**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](ix.EnumerableLike.md)<`T`\>, [`EnumerableLike`](ix.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.equality?` | [`Equality`](../modules/functions.md#equality)<`T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](ix.EnumerableLike.md)<`T`\>, [`EnumerableLike`](ix.EnumerableLike.md)<`T`\>\>

___

### keep

▸ **keep**<`T`\>(`predicate`): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](ix.EnumerableLike.md)<`T`\>, [`EnumerableLike`](ix.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](ix.EnumerableLike.md)<`T`\>, [`EnumerableLike`](ix.EnumerableLike.md)<`T`\>\>

___

### map

▸ **map**<`TA`, `TB`\>(`selector`): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](ix.EnumerableLike.md)<`TA`\>, [`EnumerableLike`](ix.EnumerableLike.md)<`TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | [`Function1`](../modules/functions.md#function1)<`TA`, `TB`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](ix.EnumerableLike.md)<`TA`\>, [`EnumerableLike`](ix.EnumerableLike.md)<`TB`\>\>

___

### pairwise

▸ **pairwise**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](ix.EnumerableLike.md)<`T`\>, [`EnumerableLike`](ix.EnumerableLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`T`, `T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](ix.EnumerableLike.md)<`T`\>, [`EnumerableLike`](ix.EnumerableLike.md)<[`Tuple2`](../modules/functions.md#tuple2)<`T`, `T`\>\>\>

___

### scan

▸ **scan**<`T`, `TAcc`\>(`scanner`, `initialValue`): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](ix.EnumerableLike.md)<`T`\>, [`EnumerableLike`](ix.EnumerableLike.md)<`TAcc`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Reducer`](../modules/functions.md#reducer)<`T`, `TAcc`\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](ix.EnumerableLike.md)<`T`\>, [`EnumerableLike`](ix.EnumerableLike.md)<`TAcc`\>\>

___

### skipFirst

▸ **skipFirst**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](ix.EnumerableLike.md)<`T`\>, [`EnumerableLike`](ix.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](ix.EnumerableLike.md)<`T`\>, [`EnumerableLike`](ix.EnumerableLike.md)<`T`\>\>

___

### takeFirst

▸ **takeFirst**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](ix.EnumerableLike.md)<`T`\>, [`EnumerableLike`](ix.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](ix.EnumerableLike.md)<`T`\>, [`EnumerableLike`](ix.EnumerableLike.md)<`T`\>\>

___

### takeWhile

▸ **takeWhile**<`T`\>(`predicate`, `options?`): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](ix.EnumerableLike.md)<`T`\>, [`EnumerableLike`](ix.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |
| `options?` | `Object` |
| `options.inclusive?` | `boolean` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](ix.EnumerableLike.md)<`T`\>, [`EnumerableLike`](ix.EnumerableLike.md)<`T`\>\>
