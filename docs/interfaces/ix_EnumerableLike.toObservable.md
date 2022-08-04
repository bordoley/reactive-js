[Reactive-JS](../README.md) / [ix/EnumerableLike](../modules/ix_EnumerableLike.md) / toObservable

# Interface: toObservable

[ix/EnumerableLike](../modules/ix_EnumerableLike.md).toObservable

## Callable

### toObservable

▸ **toObservable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](ix.EnumerableLike.md)<`T`\>, [`EnumerableObservableLike`](rx.EnumerableObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](ix.EnumerableLike.md)<`T`\>, [`EnumerableObservableLike`](rx.EnumerableObservableLike.md)<`T`\>\>

### toObservable

▸ **toObservable**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](ix.EnumerableLike.md)<`T`\>, [`RunnableObservableLike`](rx.RunnableObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.delay` | `number` |
| `options.delayStart?` | `boolean` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableLike`](ix.EnumerableLike.md)<`T`\>, [`RunnableObservableLike`](rx.RunnableObservableLike.md)<`T`\>\>
