[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [utils/DisposableContainer](../README.md) / DisposableContainerModule

# Interface: DisposableContainerModule

## Methods

### onComplete()

> **onComplete**\<`TDisposable`\>(`teardown`): [`Updater`](../../../functions/type-aliases/Updater.md)\<`TDisposable`\>

#### Type Parameters

• **TDisposable** *extends* [`DisposableContainerLike`](../../interfaces/DisposableContainerLike.md)

#### Parameters

##### teardown

[`SideEffect`](../../../functions/type-aliases/SideEffect.md)

#### Returns

[`Updater`](../../../functions/type-aliases/Updater.md)\<`TDisposable`\>

***

### onDisposed()

> **onDisposed**\<`TDisposable`\>(`teardown`): [`Updater`](../../../functions/type-aliases/Updater.md)\<`TDisposable`\>

#### Type Parameters

• **TDisposable** *extends* [`DisposableContainerLike`](../../interfaces/DisposableContainerLike.md)

#### Parameters

##### teardown

[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<[`Optional`](../../../functions/type-aliases/Optional.md)\<`Error`\>\>

#### Returns

[`Updater`](../../../functions/type-aliases/Updater.md)\<`TDisposable`\>

***

### onError()

> **onError**\<`TDisposable`\>(`teardown`): [`Updater`](../../../functions/type-aliases/Updater.md)\<`TDisposable`\>

#### Type Parameters

• **TDisposable** *extends* [`DisposableContainerLike`](../../interfaces/DisposableContainerLike.md)

#### Parameters

##### teardown

[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<`Error`\>

#### Returns

[`Updater`](../../../functions/type-aliases/Updater.md)\<`TDisposable`\>

***

### toAbortSignal()

> **toAbortSignal**(`disposable`): `AbortSignal`

#### Parameters

##### disposable

[`DisposableContainerLike`](../../interfaces/DisposableContainerLike.md)

#### Returns

`AbortSignal`
