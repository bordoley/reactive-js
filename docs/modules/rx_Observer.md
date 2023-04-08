[Reactive-JS](../README.md) / rx/Observer

# Module: rx/Observer

## Table of contents

### Functions

- [sourceFrom](rx_Observer.md#sourcefrom)

## Functions

### sourceFrom

▸ **sourceFrom**<`C`, `TObserver`, `T`\>(`source`): [`Function1`](functions.md#function1)<`TObserver`, `TObserver`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`, `C`\> |
| `TObserver` | extends [`ObserverLike`](../interfaces/rx.ObserverLike.md)<`T`, `TObserver`\> |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `C` |

#### Returns

[`Function1`](functions.md#function1)<`TObserver`, `TObserver`\>
