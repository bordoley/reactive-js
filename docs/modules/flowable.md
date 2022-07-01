[Reactive-JS](../README.md) / flowable

# Module: flowable

## Table of contents

### Interfaces

- [FlowableLike](../interfaces/flowable.FlowableLike.md)
- [FlowableSinkLike](../interfaces/flowable.FlowableSinkLike.md)
- [FlowableSinkStreamLike](../interfaces/flowable.FlowableSinkStreamLike.md)
- [FlowableStreamLike](../interfaces/flowable.FlowableStreamLike.md)

### Type Aliases

- [FlowMode](flowable.md#flowmode)

### Functions

- [flow](flowable.md#flow)
- [toObservable](flowable.md#toobservable)

## Type Aliases

### FlowMode

Ƭ **FlowMode**: ``"resume"`` \| ``"pause"``

## Functions

### flow

▸ **flow**<`T`\>(): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>, [`FlowableLike`](../interfaces/flowable.FlowableLike.md)<`T`, [`FlowableStreamLike`](../interfaces/flowable.FlowableStreamLike.md)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>, [`FlowableLike`](../interfaces/flowable.FlowableLike.md)<`T`, [`FlowableStreamLike`](../interfaces/flowable.FlowableStreamLike.md)<`T`\>\>\>

___

### toObservable

▸ **toObservable**<`T`\>(): [`Function1`](functions.md#function1)<[`FlowableLike`](../interfaces/flowable.FlowableLike.md)<`T`, [`FlowableStreamLike`](../interfaces/flowable.FlowableStreamLike.md)<`T`\>\>, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`FlowableLike`](../interfaces/flowable.FlowableLike.md)<`T`, [`FlowableStreamLike`](../interfaces/flowable.FlowableStreamLike.md)<`T`\>\>, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>\>
