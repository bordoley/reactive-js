[Reactive-JS](../README.md) / containers/Promiseable

# Module: containers/Promiseable

## Table of contents

### Constructor Functions

- [fromObservable](containers_Promiseable.md#fromobservable)

### Converter Functions

- [toObservable](containers_Promiseable.md#toobservable)

## Constructor Functions

### fromObservable

▸ **fromObservable**<`T`\>(`scheduler`): (`observable`: [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>) => `PromiseLike`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/scheduling.SchedulerLike.md) |

#### Returns

`fn`

▸ (`observable`): `PromiseLike`<`T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `observable` | [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\> |

##### Returns

`PromiseLike`<`T`\>

___

## Converter Functions

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
