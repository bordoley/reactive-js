[Reactive-JS](../README.md) / [rx/RunnableObservableLike](../modules/rx_RunnableObservableLike.md) / toReadonlyArray

# Interface: toReadonlyArray

[rx/RunnableObservableLike](../modules/rx_RunnableObservableLike.md).toReadonlyArray

## Callable

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`RunnableObservableLike`](rx.RunnableObservableLike.md)<`T`\>, [`ReadonlyArrayLike`](containers.ReadonlyArrayLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<{ `schedulerFactory`: [`Factory`](../modules/functions.md#factory)<[`VirtualTimeSchedulerLike`](scheduling.VirtualTimeSchedulerLike.md)\>  }\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`RunnableObservableLike`](rx.RunnableObservableLike.md)<`T`\>, [`ReadonlyArrayLike`](containers.ReadonlyArrayLike.md)<`T`\>\>

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`EnumerableObservableLike`](rx.EnumerableObservableLike.md)<`T`\>, [`ReadonlyArrayLike`](containers.ReadonlyArrayLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`<{ `schedulerFactory`: [`Factory`](../modules/functions.md#factory)<[`VirtualTimeSchedulerLike`](scheduling.VirtualTimeSchedulerLike.md)\>  }\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumerableObservableLike`](rx.EnumerableObservableLike.md)<`T`\>, [`ReadonlyArrayLike`](containers.ReadonlyArrayLike.md)<`T`\>\>
