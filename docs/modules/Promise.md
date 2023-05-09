[Reactive-JS](../README.md) / Promise

# Module: Promise

## Table of contents

### Operator Functions

- [identity](Promise.md#identity)

### Transform Functions

- [toObservable](Promise.md#toobservable)

## Operator Functions

### identity

▸ **identity**<`T`\>(): [`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.PromiseContainer.Type.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](containers.Container.md#operator)<[`Type`](../interfaces/containers.PromiseContainer.Type.md), `T`, `T`\>

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
