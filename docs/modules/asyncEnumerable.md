[Reactive-JS](../README.md) / asyncEnumerable

# Module: asyncEnumerable

## Table of contents

### Interfaces

- [AsyncEnumerableLike](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)
- [AsyncEnumeratorLike](../interfaces/asyncEnumerable.AsyncEnumeratorLike.md)

### Type Aliases

- [ConsumeContinue](asyncEnumerable.md#consumecontinue)
- [ConsumeDone](asyncEnumerable.md#consumedone)

### Variables

- [fromArrayT](asyncEnumerable.md#fromarrayt)

### Functions

- [consume](asyncEnumerable.md#consume)
- [consumeAsync](asyncEnumerable.md#consumeasync)
- [consumeContinue](asyncEnumerable.md#consumecontinue-1)
- [consumeDone](asyncEnumerable.md#consumedone-1)
- [fromArray](asyncEnumerable.md#fromarray)
- [fromEnumerable](asyncEnumerable.md#fromenumerable)
- [fromIterable](asyncEnumerable.md#fromiterable)
- [generate](asyncEnumerable.md#generate)

## Type Aliases

### ConsumeContinue

Ƭ **ConsumeContinue**<`T`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | `T` |
| `type` | ``"continue"`` |

___

### ConsumeDone

Ƭ **ConsumeDone**<`T`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | `T` |
| `type` | ``"done"`` |

## Variables

### fromArrayT

• `Const` **fromArrayT**: [`FromArray`](../interfaces/container.FromArray.md)<[`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`unknown`\>\>

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
| `consumer` | [`Function2`](functions.md#function2)<`TAcc`, `T`, [`ConsumeContinue`](asyncEnumerable.md#consumecontinue)<`TAcc`\> \| [`ConsumeDone`](asyncEnumerable.md#consumedone)<`TAcc`\>\> |
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
| `consumer` | [`Function2`](functions.md#function2)<`TAcc`, `T`, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<[`ConsumeContinue`](asyncEnumerable.md#consumecontinue)<`TAcc`\> \| [`ConsumeDone`](asyncEnumerable.md#consumedone)<`TAcc`\>\>\> |
| `initial` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`Function1`](functions.md#function1)<[`AsyncEnumerableLike`](../interfaces/asyncEnumerable.AsyncEnumerableLike.md)<`T`\>, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TAcc`\>\>

___

### consumeContinue

▸ **consumeContinue**<`T`\>(`data`): [`ConsumeContinue`](asyncEnumerable.md#consumecontinue)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `T` |

#### Returns

[`ConsumeContinue`](asyncEnumerable.md#consumecontinue)<`T`\>

___

### consumeDone

▸ **consumeDone**<`T`\>(`data`): [`ConsumeDone`](asyncEnumerable.md#consumedone)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `T` |

#### Returns

[`ConsumeDone`](asyncEnumerable.md#consumedone)<`T`\>

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
| `options?` | `Partial`<{ `delay`: `number` ; `endIndex`: `number` ; `startIndex`: `number`  }\> |

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
