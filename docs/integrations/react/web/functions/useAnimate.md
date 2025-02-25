[**Reactive-JS**](../../../../README.md)

***

[Reactive-JS](../../../../README.md) / [integrations/react/web](../README.md) / useAnimate

# Function: useAnimate()

## Call Signature

> **useAnimate**\<`TElement`\>(`animation`): `Ref`\<`TElement`\>

### Type Parameters

• **TElement** *extends* `HTMLElement`

### Parameters

#### animation

[`Optional`](../../../../functions/type-aliases/Optional.md)\<[`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<[`CSSStyleMapLike`](../../../web/interfaces/CSSStyleMapLike.md)\>\>

### Returns

`Ref`\<`TElement`\>

## Call Signature

> **useAnimate**\<`TElement`, `T`\>(`animation`, `selector`, `deps`?): `Ref`\<`TElement`\>

### Type Parameters

• **TElement** *extends* `HTMLElement`

• **T**

### Parameters

#### animation

[`Optional`](../../../../functions/type-aliases/Optional.md)\<[`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`T`\>\>

#### selector

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`T`, [`CSSStyleMapLike`](../../../web/interfaces/CSSStyleMapLike.md)\>

#### deps?

readonly `unknown`[]

### Returns

`Ref`\<`TElement`\>
