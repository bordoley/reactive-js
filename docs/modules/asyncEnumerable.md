[Reactive-JS](../README.md) / asyncEnumerable

# Module: asyncEnumerable

## Table of contents

### Interfaces

- [AsyncEnumerableLike](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)

### Type Aliases

- [AsyncConsumer](asyncEnumerable.md#asyncconsumer)
- [ConsumeRequest](asyncEnumerable.md#consumerequest)
- [Consumer](asyncEnumerable.md#consumer)

### Functions

- [consume](asyncEnumerable.md#consume)
- [consumeAsync](asyncEnumerable.md#consumeasync)
- [done](asyncEnumerable.md#done)
- [notify](asyncEnumerable.md#notify)

## Type Aliases

### AsyncConsumer

Ƭ **AsyncConsumer**<`T`, `TAcc`\>: [`Function2`](functions.md#function2)<`TAcc`, `T`, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<[`ConsumeRequest`](asyncEnumerable.md#consumerequest)<`TAcc`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

___

### ConsumeRequest

Ƭ **ConsumeRequest**<`TAcc`\>: { `acc`: `TAcc` ; `type`: ``"notify"``  } \| { `acc`: `TAcc` ; `type`: ``"done"``  }

#### Type parameters

| Name |
| :------ |
| `TAcc` |

___

### Consumer

Ƭ **Consumer**<`T`, `TAcc`\>: [`Function2`](functions.md#function2)<`TAcc`, `T`, [`ConsumeRequest`](asyncEnumerable.md#consumerequest)<`TAcc`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

## Functions

### consume

▸ **consume**<`T`, `TAcc`\>(`consumer`, `initial`): [`Function1`](functions.md#function1)<[`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`T`\>, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TAcc`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `consumer` | [`Consumer`](asyncEnumerable.md#consumer)<`T`, `TAcc`\> |
| `initial` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`Function1`](functions.md#function1)<[`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`T`\>, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TAcc`\>\>

___

### consumeAsync

▸ **consumeAsync**<`T`, `TAcc`\>(`consumer`, `initial`): [`Function1`](functions.md#function1)<[`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`T`\>, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TAcc`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `consumer` | [`AsyncConsumer`](asyncEnumerable.md#asyncconsumer)<`T`, `TAcc`\> |
| `initial` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`Function1`](functions.md#function1)<[`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`T`\>, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TAcc`\>\>

___

### done

▸ **done**<`TAcc`\>(`acc`): [`ConsumeRequest`](asyncEnumerable.md#consumerequest)<`TAcc`\>

#### Type parameters

| Name |
| :------ |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `acc` | `TAcc` |

#### Returns

[`ConsumeRequest`](asyncEnumerable.md#consumerequest)<`TAcc`\>

___

### notify

▸ **notify**<`TAcc`\>(`acc`): [`ConsumeRequest`](asyncEnumerable.md#consumerequest)<`TAcc`\>

#### Type parameters

| Name |
| :------ |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `acc` | `TAcc` |

#### Returns

[`ConsumeRequest`](asyncEnumerable.md#consumerequest)<`TAcc`\>
