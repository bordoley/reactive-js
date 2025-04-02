[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [react/web](../README.md) / ReactWebModule

# Interface: ReactWebModule

## Methods

### useAnimate()

#### Call Signature

> **useAnimate**\<`TElement`\>(`animation`): `Ref`\<`TElement`\>

##### Type Parameters

• **TElement** *extends* `HTMLElement`

##### Parameters

###### animation

[`Optional`](../../../functions/type-aliases/Optional.md)\<[`BroadcasterLike`](../../../computations/interfaces/BroadcasterLike.md)\<[`CSSStyleMapLike`](../../../web/interfaces/CSSStyleMapLike.md)\>\>

##### Returns

`Ref`\<`TElement`\>

#### Call Signature

> **useAnimate**\<`TElement`, `T`\>(`animation`, `selector`, `deps`?): `Ref`\<`TElement`\>

##### Type Parameters

• **TElement** *extends* `HTMLElement`

• **T**

##### Parameters

###### animation

[`Optional`](../../../functions/type-aliases/Optional.md)\<[`BroadcasterLike`](../../../computations/interfaces/BroadcasterLike.md)\<`T`\>\>

###### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`T`, [`CSSStyleMapLike`](../../../web/interfaces/CSSStyleMapLike.md)\>

###### deps?

readonly `unknown`[]

##### Returns

`Ref`\<`TElement`\>

***

### useAnimation()

#### Call Signature

> **useAnimation**\<`T`\>(`animation`): [`Optional`](../../../functions/type-aliases/Optional.md)\<[`AnimationLike`](../../../computations/Streamable/interfaces/AnimationLike.md)\<`unknown`, `T`\>\>

##### Type Parameters

• **T**

##### Parameters

###### animation

[`PureSynchronousObservableLike`](../../../computations/interfaces/PureSynchronousObservableLike.md)\<`T`\>

##### Returns

[`Optional`](../../../functions/type-aliases/Optional.md)\<[`AnimationLike`](../../../computations/Streamable/interfaces/AnimationLike.md)\<`unknown`, `T`\>\>

#### Call Signature

> **useAnimation**\<`TEvent`, `T`\>(`animation`): [`Optional`](../../../functions/type-aliases/Optional.md)\<[`AnimationLike`](../../../computations/Streamable/interfaces/AnimationLike.md)\<`TEvent`, `T`\>\>

##### Type Parameters

• **TEvent**

• **T**

##### Parameters

###### animation

[`PureSynchronousObservableLike`](../../../computations/interfaces/PureSynchronousObservableLike.md)\<`T`\> | [`Function1`](../../../functions/type-aliases/Function1.md)\<`TEvent`, [`PureSynchronousObservableLike`](../../../computations/interfaces/PureSynchronousObservableLike.md)\<`T`\>\>

##### Returns

[`Optional`](../../../functions/type-aliases/Optional.md)\<[`AnimationLike`](../../../computations/Streamable/interfaces/AnimationLike.md)\<`TEvent`, `T`\>\>

***

### useAnimationGroup()

#### Call Signature

> **useAnimationGroup**\<`T`, `TKey`\>(`animationGroup`): [`Optional`](../../../functions/type-aliases/Optional.md)\<[`AnimationGroupLike`](../../../computations/Streamable/interfaces/AnimationGroupLike.md)\<`unknown`, `TKey`, `T`\>\>

##### Type Parameters

• **T**

• **TKey** *extends* `string` = `string`

##### Parameters

###### animationGroup

[`ReadonlyObjectMapLike`](../../../collections/type-aliases/ReadonlyObjectMapLike.md)\<`TKey`, [`PureSynchronousObservableLike`](../../../computations/interfaces/PureSynchronousObservableLike.md)\<`T`\>\>

##### Returns

[`Optional`](../../../functions/type-aliases/Optional.md)\<[`AnimationGroupLike`](../../../computations/Streamable/interfaces/AnimationGroupLike.md)\<`unknown`, `TKey`, `T`\>\>

#### Call Signature

> **useAnimationGroup**\<`T`, `TKey`, `TEvent`\>(`animationGroup`): [`Optional`](../../../functions/type-aliases/Optional.md)\<[`AnimationGroupLike`](../../../computations/Streamable/interfaces/AnimationGroupLike.md)\<`TEvent`, `TKey`, `T`\>\>

##### Type Parameters

• **T**

• **TKey** *extends* `string`

• **TEvent**

##### Parameters

###### animationGroup

[`ReadonlyObjectMapLike`](../../../collections/type-aliases/ReadonlyObjectMapLike.md)\<`TKey`, [`PureSynchronousObservableLike`](../../../computations/interfaces/PureSynchronousObservableLike.md)\<`T`\> \| [`Function1`](../../../functions/type-aliases/Function1.md)\<`TEvent`, [`PureSynchronousObservableLike`](../../../computations/interfaces/PureSynchronousObservableLike.md)\<`T`\>\>\>

##### Returns

[`Optional`](../../../functions/type-aliases/Optional.md)\<[`AnimationGroupLike`](../../../computations/Streamable/interfaces/AnimationGroupLike.md)\<`TEvent`, `TKey`, `T`\>\>

***

### useScroll()

> **useScroll**\<`TElement`\>(`callback`, `deps`): `Ref`\<`TElement`\>

#### Type Parameters

• **TElement** *extends* `HTMLElement`

#### Parameters

##### callback

[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<[`ScrollValue`](../../../web/interfaces/ScrollValue.md)\>

##### deps

readonly `unknown`[]

#### Returns

`Ref`\<`TElement`\>

***

### useSpring()

> **useSpring**(`options`?): [`Optional`](../../../functions/type-aliases/Optional.md)\<[`SpringStreamLike`](../../../computations/Streamable/interfaces/SpringStreamLike.md)\>

#### Parameters

##### options?

###### damping?

`number`

###### precision?

`number`

###### stiffness?

`number`

#### Returns

[`Optional`](../../../functions/type-aliases/Optional.md)\<[`SpringStreamLike`](../../../computations/Streamable/interfaces/SpringStreamLike.md)\>

***

### useWindowLocation()

> **useWindowLocation**(): `object`

#### Returns

`object`

##### canGoBack

> **canGoBack**: `boolean`

##### goBack()

> **goBack**: () => `void`

###### Returns

`void`

##### push

> **push**: [`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<[`WindowLocationURI`](../../../web/interfaces/WindowLocationURI.md) \| [`Updater`](../../../functions/type-aliases/Updater.md)\<[`WindowLocationURI`](../../../web/interfaces/WindowLocationURI.md)\>\>

##### replace

> **replace**: [`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<[`WindowLocationURI`](../../../web/interfaces/WindowLocationURI.md) \| [`Updater`](../../../functions/type-aliases/Updater.md)\<[`WindowLocationURI`](../../../web/interfaces/WindowLocationURI.md)\>\>

##### uri

> **uri**: [`Optional`](../../../functions/type-aliases/Optional.md)\<[`WindowLocationURI`](../../../web/interfaces/WindowLocationURI.md)\>

***

### WindowLocationProvider()

> **WindowLocationProvider**(`props`): `ReactNode`

#### Parameters

##### props

###### children

`ReactNode`

###### windowLocation

[`WindowLocationLike`](../../../web/interfaces/WindowLocationLike.md)

#### Returns

`ReactNode`
