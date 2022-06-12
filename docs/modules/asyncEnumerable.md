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
- [fromArray](asyncEnumerable.md#fromarray)
- [fromEnumerable](asyncEnumerable.md#fromenumerable)
- [fromIterable](asyncEnumerable.md#fromiterable)
- [generate](asyncEnumerable.md#generate)
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

### fromArray

▸ **fromArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], [`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`T`\>\>

Returns an `AsyncEnumerableLike` from the provided array.

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

[`Function1`](functions.md#function1)<readonly `T`[], [`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`T`\>\>

___

### fromEnumerable

▸ **fromEnumerable**<`T`\>(): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`T`\>, [`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`T`\>\>

Returns an `AsyncEnumerableLike` from the provided iterable.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`T`\>, [`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`T`\>\>

___

### fromIterable

▸ **fromIterable**<`T`\>(): [`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`T`\>\>

Returns an `AsyncEnumerableLike` from the provided iterable.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`T`\>\>

___

### generate

▸ **generate**<`T`\>(`generator`, `initialValue`, `options?`): [`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`T`\>

Generates an `AsyncEnumerableLike` sequence from a generator function
that is applied to an accumulator value.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `generator` | [`Updater`](functions.md#updater)<`T`\> | The generator function. |
| `initialValue` | [`Factory`](functions.md#factory)<`T`\> | Factory function to generate the initial accumulator. |
| `options?` | `Object` | - |
| `options.delay?` | `number` | - |

#### Returns

[`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`T`\>

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
