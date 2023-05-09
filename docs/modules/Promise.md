[Reactive-JS](../README.md) / Promise

# Module: Promise

## Table of contents

### Operator Functions

- [identity](Promise.md#identity)

### Transform Functions

- [toObservable](Promise.md#toobservable)

## Operator Functions

### identity

▸ **identity**<`T`\>(): [`Operator`](containers.Containers.md#operator)<[`PromiseContainer`](../interfaces/containers.PromiseContainer.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](containers.Containers.md#operator)<[`PromiseContainer`](../interfaces/containers.PromiseContainer.md), `T`, `T`\>

___

## Transform Functions

### toObservable

▸ **toObservable**<`T`\>(): [`Function1`](functions.md#function1)<`PromiseLike`<`T`\>, [`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<`PromiseLike`<`T`\>, [`ObservableLike`](../interfaces/types.ObservableLike.md)<`T`\>\>
