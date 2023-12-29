[Reactive-JS](../README.md) / concurrent/Stream

# Module: concurrent/Stream

## Table of contents

### Interfaces

- [StreamModule](../interfaces/concurrent_Stream.StreamModule.md)

### Type Aliases

- [Signature](concurrent_Stream.md#signature)

### Functions

- [syncState](concurrent_Stream.md#syncstate)

## Type Aliases

### Signature

Ƭ **Signature**: [`StreamModule`](../interfaces/concurrent_Stream.StreamModule.md)

## Functions

### syncState

▸ **syncState**<`T`\>(`onInit`, `onChange`, `options?`): [`Function1`](functions.md#function1)<[`StreamLike`](../interfaces/concurrent.StreamLike.md)<[`Updater`](functions.md#updater)<`T`\>, `T`\>, [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)<`unknown`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `onInit` | [`Function1`](functions.md#function1)<`T`, [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<[`Updater`](functions.md#updater)<`T`\>\>\> |
| `onChange` | [`Function2`](functions.md#function2)<`T`, `T`, [`DeferredObservableLike`](../interfaces/concurrent.DeferredObservableLike.md)<[`Updater`](functions.md#updater)<`T`\>\>\> |
| `options?` | `Object` |
| `options.throttleDuration?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`StreamLike`](../interfaces/concurrent.StreamLike.md)<[`Updater`](functions.md#updater)<`T`\>, `T`\>, [`DeferredObservableWithSideEffectsLike`](../interfaces/concurrent.DeferredObservableWithSideEffectsLike.md)<`unknown`\>\>
