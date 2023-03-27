[Reactive-JS](../README.md) / containers/Promiseable

# Module: containers/Promiseable

## Table of contents

### Operator Functions

- [identity](containers_Promiseable.md#identity)

### Transform Functions

- [toObservable](containers_Promiseable.md#toobservable)

## Operator Functions

### identity

▸ **identity**<`T`\>(): [`ContainerOperator`](containers.md#containeroperator)<[`PromiseableLike`](../interfaces/containers.PromiseableLike.md)<`unknown`\>, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`ContainerOperator`](containers.md#containeroperator)<[`PromiseableLike`](../interfaces/containers.PromiseableLike.md)<`unknown`\>, `T`, `T`\>

___

## Transform Functions

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
