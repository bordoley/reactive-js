[Reactive-JS](../README.md) / containers/Promise

# Module: containers/Promise

## Table of contents

### Operator Functions

- [identity](containers_Promise.md#identity)

### Transform Functions

- [toObservable](containers_Promise.md#toobservable)

## Operator Functions

### identity

▸ **identity**<`T`\>(): [`ContainerOperator`](containers.md#containeroperator)<[`PromiseContainer`](../interfaces/containers.PromiseContainer.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`PromiseContainer`](../interfaces/containers.PromiseContainer.md), `T`, `T`\>

___

## Transform Functions

### toObservable

▸ **toObservable**<`T`\>(): [`Function1`](functions.md#function1)<`PromiseLike`<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<`PromiseLike`<`T`\>, [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`T`\>\>
