[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [utils/DisposableContainer](../README.md) / DisposableContainerModule

# Interface: DisposableContainerModule

## Methods

### onComplete()

#### Call Signature

> **onComplete**\<`TDisposable`\>(`teardown`): [`Updater`](../../../functions/type-aliases/Updater.md)\<`TDisposable`\>

##### Type Parameters

• **TDisposable** *extends* [`DisposableContainerLike`](../../interfaces/DisposableContainerLike.md)

##### Parameters

###### teardown

[`SideEffect`](../../../functions/type-aliases/SideEffect.md)

##### Returns

[`Updater`](../../../functions/type-aliases/Updater.md)\<`TDisposable`\>

#### Call Signature

> **onComplete**\<`TDisposable`\>(`teardown`): [`Updater`](../../../functions/type-aliases/Updater.md)\<`TDisposable`\>

##### Type Parameters

• **TDisposable** *extends* [`DisposableContainerLike`](../../interfaces/DisposableContainerLike.md)

##### Parameters

###### teardown

[`Method`](../../../functions/type-aliases/Method.md)\<`TDisposable`, `void`\>

##### Returns

[`Updater`](../../../functions/type-aliases/Updater.md)\<`TDisposable`\>

***

### onDisposed()

#### Call Signature

> **onDisposed**\<`TDisposable`\>(`teardown`): [`Updater`](../../../functions/type-aliases/Updater.md)\<`TDisposable`\>

##### Type Parameters

• **TDisposable** *extends* [`DisposableContainerLike`](../../interfaces/DisposableContainerLike.md)

##### Parameters

###### teardown

[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<[`Optional`](../../../functions/type-aliases/Optional.md)\<`Error`\>\>

##### Returns

[`Updater`](../../../functions/type-aliases/Updater.md)\<`TDisposable`\>

#### Call Signature

> **onDisposed**\<`TDisposable`\>(`teardown`): [`Updater`](../../../functions/type-aliases/Updater.md)\<`TDisposable`\>

##### Type Parameters

• **TDisposable** *extends* [`DisposableContainerLike`](../../interfaces/DisposableContainerLike.md)

##### Parameters

###### teardown

[`Method1`](../../../functions/type-aliases/Method1.md)\<`TDisposable`, [`Optional`](../../../functions/type-aliases/Optional.md)\<`Error`\>\>

##### Returns

[`Updater`](../../../functions/type-aliases/Updater.md)\<`TDisposable`\>

***

### onError()

#### Call Signature

> **onError**\<`TDisposable`\>(`teardown`): [`Updater`](../../../functions/type-aliases/Updater.md)\<`TDisposable`\>

##### Type Parameters

• **TDisposable** *extends* [`DisposableContainerLike`](../../interfaces/DisposableContainerLike.md)

##### Parameters

###### teardown

[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<`Error`\>

##### Returns

[`Updater`](../../../functions/type-aliases/Updater.md)\<`TDisposable`\>

#### Call Signature

> **onError**\<`TDisposable`\>(`teardown`): [`Updater`](../../../functions/type-aliases/Updater.md)\<`TDisposable`\>

##### Type Parameters

• **TDisposable** *extends* [`DisposableContainerLike`](../../interfaces/DisposableContainerLike.md)

##### Parameters

###### teardown

[`Method1`](../../../functions/type-aliases/Method1.md)\<`TDisposable`, `Error`\>

##### Returns

[`Updater`](../../../functions/type-aliases/Updater.md)\<`TDisposable`\>

***

### toAbortSignal()

> **toAbortSignal**(`disposable`): `AbortSignal`

#### Parameters

##### disposable

[`DisposableContainerLike`](../../interfaces/DisposableContainerLike.md)

#### Returns

`AbortSignal`

***

### toPromise()

> **toPromise**(`disposable`): `Promise`\<`void`\>

#### Parameters

##### disposable

[`DisposableContainerLike`](../../interfaces/DisposableContainerLike.md)

#### Returns

`Promise`\<`void`\>
