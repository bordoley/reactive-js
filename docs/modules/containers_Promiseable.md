[Reactive-JS](../README.md) / containers/Promiseable

# Module: containers/Promiseable

## Table of contents

### Functions

- [fromObservable](containers_Promiseable.md#fromobservable)
- [toObservable](containers_Promiseable.md#toobservable)

## Functions

### fromObservable

▸ **fromObservable**<`T`\>(`scheduler`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`PromiseableLike`](../interfaces/containers.PromiseableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/scheduling.SchedulerLike.md) |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>, [`PromiseableLike`](../interfaces/containers.PromiseableLike.md)<`T`\>\>

___

### toObservable

▸ **toObservable**<`T`\>(`options?`): [`Function1`](functions.md#function1)<[`PromiseableLike`](../interfaces/containers.PromiseableLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `undefined` |

#### Returns

[`Function1`](functions.md#function1)<[`PromiseableLike`](../interfaces/containers.PromiseableLike.md)<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>
