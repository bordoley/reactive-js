[Reactive-JS](../README.md) / [rx/ObservableLike](../modules/rx_ObservableLike.md) / takeUntil

# Interface: takeUntil

[rx/ObservableLike](../modules/rx_ObservableLike.md).takeUntil

## Callable

### takeUntil

▸ **takeUntil**<`C`, `T`\>(`notifier`): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, [`RunnableObservableLike`](rx.RunnableObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`RunnableObservableLike`](rx.RunnableObservableLike.md)<`T`, `C`\> |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `notifier` | [`RunnableObservableLike`](rx.RunnableObservableLike.md)<`unknown`\> \| [`EnumerableObservableLike`](rx.EnumerableObservableLike.md)<`unknown`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, [`RunnableObservableLike`](rx.RunnableObservableLike.md)<`T`\>\>

### takeUntil

▸ **takeUntil**<`C`, `T`\>(`notifier`): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, [`RunnableObservableLike`](rx.RunnableObservableLike.md)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`EnumerableObservableLike`](rx.EnumerableObservableLike.md)<`T`, `C`\> |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `notifier` | [`RunnableObservableLike`](rx.RunnableObservableLike.md)<`unknown`\> \| [`EnumerableObservableLike`](rx.EnumerableObservableLike.md)<`unknown`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/containers.md#containerof)<`C`, `T`\>, [`RunnableObservableLike`](rx.RunnableObservableLike.md)<`T`\>\>

### takeUntil

▸ **takeUntil**<`T`\>(`notifier`): [`Function1`](../modules/functions.md#function1)<[`ObservableLike`](rx.ObservableLike.md)<`T`\>, [`ObservableLike`](rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `notifier` | [`ObservableLike`](rx.ObservableLike.md)<`unknown`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ObservableLike`](rx.ObservableLike.md)<`T`\>, [`ObservableLike`](rx.ObservableLike.md)<`T`\>\>
