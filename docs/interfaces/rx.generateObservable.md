[Reactive-JS](../README.md) / [rx](../modules/rx.md) / generateObservable

# Interface: generateObservable

[rx](../modules/rx.md).generateObservable

## Callable

### generateObservable

▸ **generateObservable**<`T`\>(`generator`, `initialValue`): [`EnumerableObservableLike`](rx.EnumerableObservableLike.md)<`T`\>

Generates an `ObservableLike` sequence from a generator function
that is applied to an accumulator value with a specified `delay`
between emitted items.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `generator` | [`Updater`](../modules/functions.md#updater)<`T`\> | the generator function. |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`T`\> | Factory function used to generate the initial accumulator. |

#### Returns

[`EnumerableObservableLike`](rx.EnumerableObservableLike.md)<`T`\>

### generateObservable

▸ **generateObservable**<`T`\>(`generator`, `initialValue`, `options`): [`RunnableObservableLike`](rx.RunnableObservableLike.md)<`T`\>

Generates an `ObservableLike` sequence from a generator function
that is applied to an accumulator value with a specified `delay`
between emitted items.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `generator` | [`Updater`](../modules/functions.md#updater)<`T`\> | the generator function. |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`T`\> | Factory function used to generate the initial accumulator. |
| `options` | `Object` | - |
| `options.delay` | `number` | - |
| `options.delayStart?` | `boolean` | - |

#### Returns

[`RunnableObservableLike`](rx.RunnableObservableLike.md)<`T`\>
