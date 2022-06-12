[Reactive-JS](../README.md) / io

# Module: io

## Table of contents

### Interfaces

- [IOSinkAccumulatorLike](../interfaces/io.IOSinkAccumulatorLike.md)
- [IOSinkLike](../interfaces/io.IOSinkLike.md)
- [IOSourceLike](../interfaces/io.IOSourceLike.md)

### Type Aliases

- [IOEvent](io.md#ioevent)
- [IOEventType](io.md#ioeventtype)
- [IOSourceOperator](io.md#iosourceoperator)

### Functions

- [createIOSinkAccumulator](io.md#createiosinkaccumulator)
- [decodeWithCharset](io.md#decodewithcharset)
- [done](io.md#done)
- [empty](io.md#empty)
- [encodeUtf8](io.md#encodeutf8)
- [fromArray](io.md#fromarray)
- [fromObservable](io.md#fromobservable)
- [fromValue](io.md#fromvalue)
- [map](io.md#map)
- [notify](io.md#notify)

## Type Aliases

### IOEvent

Ƭ **IOEvent**<`T`\>: { `data`: `T` ; `type`: ``"notify"``  } \| { `type`: ``"done"``  }

#### Type parameters

| Name |
| :------ |
| `T` |

___

### IOEventType

Ƭ **IOEventType**: ``"notify"`` \| ``"done"``

___

### IOSourceOperator

Ƭ **IOSourceOperator**<`TA`, `TB`\>: [`Function1`](functions.md#function1)<[`IOSourceLike`](../interfaces/io.IOSourceLike.md)<`TA`\>, [`IOSourceLike`](../interfaces/io.IOSourceLike.md)<`TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

## Functions

### createIOSinkAccumulator

▸ **createIOSinkAccumulator**<`T`, `TAcc`\>(`reducer`, `initialValue`, `options?`): [`IOSinkAccumulatorLike`](../interfaces/io.IOSinkAccumulatorLike.md)<`T`, `TAcc`\>

**`experimental`**

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Reducer`](functions.md#reducer)<`T`, `TAcc`\> |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> |
| `options?` | `Object` |
| `options.replay?` | `number` |

#### Returns

[`IOSinkAccumulatorLike`](../interfaces/io.IOSinkAccumulatorLike.md)<`T`, `TAcc`\>

___

### decodeWithCharset

▸ **decodeWithCharset**(`charset?`, `options?`): [`IOSourceOperator`](io.md#iosourceoperator)<`ArrayBuffer`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `charset?` | `string` |
| `options?` | `TextDecoderOptions` |

#### Returns

[`IOSourceOperator`](io.md#iosourceoperator)<`ArrayBuffer`, `string`\>

___

### done

▸ **done**<`T`\>(): [`IOEvent`](io.md#ioevent)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`IOEvent`](io.md#ioevent)<`T`\>

___

### empty

▸ **empty**<`T`\>(): [`IOSourceLike`](../interfaces/io.IOSourceLike.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`IOSourceLike`](../interfaces/io.IOSourceLike.md)<`T`\>

___

### encodeUtf8

▸ **encodeUtf8**(`a`): [`IOSourceLike`](../interfaces/io.IOSourceLike.md)<`Uint8Array`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`IOSourceLike`](../interfaces/io.IOSourceLike.md)<`string`\> |

#### Returns

[`IOSourceLike`](../interfaces/io.IOSourceLike.md)<`Uint8Array`\>

___

### fromArray

▸ **fromArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], [`IOSourceLike`](../interfaces/io.IOSourceLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.delay?` | `number` |
| `options.endIndex?` | `number` |
| `options.startIndex?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], [`IOSourceLike`](../interfaces/io.IOSourceLike.md)<`T`\>\>

___

### fromObservable

▸ **fromObservable**<`T`\>(): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>, [`IOSourceLike`](../interfaces/io.IOSourceLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>, [`IOSourceLike`](../interfaces/io.IOSourceLike.md)<`T`\>\>

___

### fromValue

▸ **fromValue**<`T`\>(`options?`): [`Function1`](functions.md#function1)<`T`, [`IOSourceLike`](../interfaces/io.IOSourceLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.delay?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<`T`, [`IOSourceLike`](../interfaces/io.IOSourceLike.md)<`T`\>\>

___

### map

▸ **map**<`TA`, `TB`\>(`mapper`): [`Function1`](functions.md#function1)<[`IOSourceLike`](../interfaces/io.IOSourceLike.md)<`TA`\>, [`IOSourceLike`](../interfaces/io.IOSourceLike.md)<`TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapper` | [`Function1`](functions.md#function1)<`TA`, `TB`\> |

#### Returns

[`Function1`](functions.md#function1)<[`IOSourceLike`](../interfaces/io.IOSourceLike.md)<`TA`\>, [`IOSourceLike`](../interfaces/io.IOSourceLike.md)<`TB`\>\>

___

### notify

▸ **notify**<`T`\>(`data`): [`IOEvent`](io.md#ioevent)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `T` |

#### Returns

[`IOEvent`](io.md#ioevent)<`T`\>
