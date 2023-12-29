[Reactive-JS](../README.md) / [concurrent/Stream](../modules/concurrent_Stream.md) / StreamModule

# Interface: StreamModule

[concurrent/Stream](../modules/concurrent_Stream.md).StreamModule

## Table of contents

### Methods

- [syncState](concurrent_Stream.StreamModule.md#syncstate)

## Methods

### syncState

▸ **syncState**<`T`\>(`onInit`, `onChange`, `options?`): [`Function1`](../modules/functions.md#function1)<[`StreamLike`](concurrent.StreamLike.md)<[`Updater`](../modules/functions.md#updater)<`T`\>, `T`\>, [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`unknown`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `onInit` | [`Function1`](../modules/functions.md#function1)<`T`, [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<[`Updater`](../modules/functions.md#updater)<`T`\>\>\> |
| `onChange` | [`Function2`](../modules/functions.md#function2)<`T`, `T`, [`DeferredObservableLike`](concurrent.DeferredObservableLike.md)<[`Updater`](../modules/functions.md#updater)<`T`\>\>\> |
| `options?` | `Object` |
| `options.throttleDuration?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`StreamLike`](concurrent.StreamLike.md)<[`Updater`](../modules/functions.md#updater)<`T`\>, `T`\>, [`DeferredObservableWithSideEffectsLike`](concurrent.DeferredObservableWithSideEffectsLike.md)<`unknown`\>\>
