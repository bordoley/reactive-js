[Reactive-JS](../README.md) / [containers/ReadonlyArrayLike](../modules/containers_ReadonlyArrayLike.md) / toObservable

# Interface: toObservable

[containers/ReadonlyArrayLike](../modules/containers_ReadonlyArrayLike.md).toObservable

## Callable

### toObservable

▸ **toObservable**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`ReadonlyArrayLike`](containers.ReadonlyArrayLike.md)<`T`\>, [`EnumerableObservableLike`](rx.EnumerableObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |
| `options.start?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ReadonlyArrayLike`](containers.ReadonlyArrayLike.md)<`T`\>, [`EnumerableObservableLike`](rx.EnumerableObservableLike.md)<`T`\>\>

### toObservable

▸ **toObservable**<`T`\>(`options`): [`Function1`](../modules/functions.md#function1)<[`ReadonlyArrayLike`](containers.ReadonlyArrayLike.md)<`T`\>, [`RunnableObservableLike`](rx.RunnableObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.count?` | `number` |
| `options.delay` | `number` |
| `options.delayStart?` | `boolean` |
| `options.start?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ReadonlyArrayLike`](containers.ReadonlyArrayLike.md)<`T`\>, [`RunnableObservableLike`](rx.RunnableObservableLike.md)<`T`\>\>
