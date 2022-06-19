[Reactive-JS](../README.md) / sink

# Module: sink

## Table of contents

### Interfaces

- [DelegatingSinkLike](../interfaces/sink.DelegatingSinkLike.md)
- [SinkLike](../interfaces/sink.SinkLike.md)

### Functions

- [notifyDecodeWithCharset](sink.md#notifydecodewithcharset)
- [notifyDistinctUntilChanged](sink.md#notifydistinctuntilchanged)
- [notifyKeep](sink.md#notifykeep)
- [notifyMap](sink.md#notifymap)
- [notifyOnNotify](sink.md#notifyonnotify)
- [notifyPairwise](sink.md#notifypairwise)
- [notifyReduce](sink.md#notifyreduce)
- [notifyScan](sink.md#notifyscan)
- [notifySkipFirst](sink.md#notifyskipfirst)
- [notifyTakeFirst](sink.md#notifytakefirst)
- [notifyTakeLast](sink.md#notifytakelast)
- [notifyTakeWhile](sink.md#notifytakewhile)
- [onDisposeWithoutErrorDecodeWithCharset](sink.md#ondisposewithouterrordecodewithcharset)

## Functions

### notifyDecodeWithCharset

▸ **notifyDecodeWithCharset**(`this`, `next`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`DelegatingSinkLike`](../interfaces/sink.DelegatingSinkLike.md)<`ArrayBuffer`, `string`\> & { `textDecoder`: `TextDecoder`  } |
| `next` | `ArrayBuffer` |

#### Returns

`void`

___

### notifyDistinctUntilChanged

▸ **notifyDistinctUntilChanged**<`T`\>(`this`, `next`): `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`DelegatingSinkLike`](../interfaces/sink.DelegatingSinkLike.md)<`T`, `T`\> & { `equality`: [`Equality`](functions.md#equality)<`T`\> ; `hasValue`: `boolean` ; `prev`: [`Option`](option.md#option)<`T`\>  } |
| `next` | `T` |

#### Returns

`void`

___

### notifyKeep

▸ **notifyKeep**<`T`\>(`this`, `next`): `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`DelegatingSinkLike`](../interfaces/sink.DelegatingSinkLike.md)<`T`, `T`\> & { `predicate`: [`Predicate`](functions.md#predicate)<`T`\>  } |
| `next` | `T` |

#### Returns

`void`

___

### notifyMap

▸ **notifyMap**<`TA`, `TB`\>(`this`, `next`): `void`

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`DelegatingSinkLike`](../interfaces/sink.DelegatingSinkLike.md)<`TA`, `TB`\> & { `mapper`: [`Function1`](functions.md#function1)<`TA`, `TB`\>  } |
| `next` | `TA` |

#### Returns

`void`

___

### notifyOnNotify

▸ **notifyOnNotify**<`T`\>(`this`, `next`): `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`DelegatingSinkLike`](../interfaces/sink.DelegatingSinkLike.md)<`T`, `T`\> & { `onNotify`: [`SideEffect1`](functions.md#sideeffect1)<`T`\>  } |
| `next` | `T` |

#### Returns

`void`

___

### notifyPairwise

▸ **notifyPairwise**<`T`\>(`this`, `value`): `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`DelegatingSinkLike`](../interfaces/sink.DelegatingSinkLike.md)<`T`, [[`Option`](option.md#option)<`T`\>, `T`]\> & { `hasPrev`: `boolean` ; `prev`: [`Option`](option.md#option)<`T`\>  } |
| `value` | `T` |

#### Returns

`void`

___

### notifyReduce

▸ **notifyReduce**<`T`, `TAcc`\>(`this`, `next`): `void`

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`SinkLike`](../interfaces/sink.SinkLike.md)<`T`\> & { `acc`: `TAcc` ; `reducer`: [`Reducer`](functions.md#reducer)<`T`, `TAcc`\>  } |
| `next` | `T` |

#### Returns

`void`

___

### notifyScan

▸ **notifyScan**<`T`, `TAcc`\>(`this`, `next`): `void`

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`DelegatingSinkLike`](../interfaces/sink.DelegatingSinkLike.md)<`T`, `TAcc`\> & { `acc`: `TAcc` ; `reducer`: [`Reducer`](functions.md#reducer)<`T`, `TAcc`\>  } |
| `next` | `T` |

#### Returns

`void`

___

### notifySkipFirst

▸ **notifySkipFirst**<`T`\>(`this`, `next`): `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`DelegatingSinkLike`](../interfaces/sink.DelegatingSinkLike.md)<`T`, `T`\> & { `count`: `number` ; `skipCount`: `number`  } |
| `next` | `T` |

#### Returns

`void`

___

### notifyTakeFirst

▸ **notifyTakeFirst**<`T`\>(`this`, `next`): `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`DelegatingSinkLike`](../interfaces/sink.DelegatingSinkLike.md)<`T`, `T`\> & { `count`: `number` ; `maxCount`: `number`  } |
| `next` | `T` |

#### Returns

`void`

___

### notifyTakeLast

▸ **notifyTakeLast**<`T`\>(`this`, `next`): `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`SinkLike`](../interfaces/sink.SinkLike.md)<`T`\> & { `last`: `T`[] ; `maxCount`: `number`  } |
| `next` | `T` |

#### Returns

`void`

___

### notifyTakeWhile

▸ **notifyTakeWhile**<`T`\>(`this`, `next`): `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`DelegatingSinkLike`](../interfaces/sink.DelegatingSinkLike.md)<`T`, `T`\> & { `inclusive`: `boolean` ; `predicate`: [`Predicate`](functions.md#predicate)<`T`\>  } |
| `next` | `T` |

#### Returns

`void`

___

### onDisposeWithoutErrorDecodeWithCharset

▸ **onDisposeWithoutErrorDecodeWithCharset**(`this`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`DelegatingSinkLike`](../interfaces/sink.DelegatingSinkLike.md)<`ArrayBuffer`, `string`\> & { `textDecoder`: `TextDecoder`  } |

#### Returns

`void`
