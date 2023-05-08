[Reactive-JS](../README.md) / core/Promise

# Module: core/Promise

## Table of contents

### Operator Functions

- [identity](core_Promise.md#identity)

### Transform Functions

- [toObservable](core_Promise.md#toobservable)

## Operator Functions

### identity

▸ **identity**<`T`\>(): [`Operator`](core.Container.md#operator)<[`PromiseContainer`](../interfaces/core.PromiseContainer.md), `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Operator`](core.Container.md#operator)<[`PromiseContainer`](../interfaces/core.PromiseContainer.md), `T`, `T`\>

___

## Transform Functions

### toObservable

▸ **toObservable**<`T`\>(): [`Function1`](functions.md#function1)<`PromiseLike`<`T`\>, [`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<`PromiseLike`<`T`\>, [`ObservableLike`](../interfaces/core.ObservableLike.md)<`T`\>\>
