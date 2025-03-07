[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [web/Element](../README.md) / WebElementModule

# Interface: WebElementModule

## Methods

### addEventHandler()

> **addEventHandler**\<`TEventTarget`, `TEventName`\>(`eventName`, `eventHandler`, `options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

#### Type Parameters

• **TEventTarget** *extends* [`DOMEventTarget`](../../type-aliases/DOMEventTarget.md)

• **TEventName** *extends* `string`

#### Parameters

##### eventName

`TEventName`

##### eventHandler

[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<[`EventMapOf`](../../type-aliases/EventMapOf.md)\<`TEventTarget`\>\[`TEventName`\]\>

##### options?

###### capture?

`boolean`

###### passive?

`boolean`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

***

### addResizeHandler()

> **addResizeHandler**\<`TElement`\>(`handler`, `options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<`TElement`, [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

#### Type Parameters

• **TElement** *extends* `Element`

#### Parameters

##### handler

[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<`ResizeObserverEntry`\>

##### options?

`ResizeObserverOptions`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TElement`, [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

***

### addScrollHandler()

> **addScrollHandler**\<`TElement`\>(`handler`): [`Function1`](../../../functions/type-aliases/Function1.md)\<`TElement`, [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

#### Type Parameters

• **TElement** *extends* `HTMLElement`

#### Parameters

##### handler

[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<[`ScrollValue`](../../interfaces/ScrollValue.md)\>

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TElement`, [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

***

### eventSource()

> **eventSource**\<`TEventTarget`, `TEventName`\>(`eventName`, `options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../computations/interfaces/EventSourceLike.md)\<[`EventMapOf`](../../type-aliases/EventMapOf.md)\<`TEventTarget`\>\[`TEventName`\]\>\>

#### Type Parameters

• **TEventTarget** *extends* [`DOMEventTarget`](../../type-aliases/DOMEventTarget.md)

• **TEventName** *extends* `string`

#### Parameters

##### eventName

`TEventName`

##### options?

###### capture?

`boolean`

###### passive?

`boolean`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TEventTarget`, [`EventSourceLike`](../../../computations/interfaces/EventSourceLike.md)\<[`EventMapOf`](../../type-aliases/EventMapOf.md)\<`TEventTarget`\>\[`TEventName`\]\>\>

***

### intersectionEventSource()

> **intersectionEventSource**(`parent`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<`Element`, [`EventSourceLike`](../../../computations/interfaces/EventSourceLike.md)\<`IntersectionObserverEntry`\>\>

#### Parameters

##### parent?

`Element` | `Document`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<`Element`, [`EventSourceLike`](../../../computations/interfaces/EventSourceLike.md)\<`IntersectionObserverEntry`\>\>

***

### measure()

> **measure**\<`TElement`\>(`options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<`TElement`, [`StoreLike`](../../../computations/interfaces/StoreLike.md)\<[`Rect`](../../interfaces/Rect.md)\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

#### Type Parameters

• **TElement** *extends* `HTMLElement` \| `SVGElement`

#### Parameters

##### options?

###### autoDispose?

`boolean`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TElement`, [`StoreLike`](../../../computations/interfaces/StoreLike.md)\<[`Rect`](../../interfaces/Rect.md)\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

***

### resizeEventSource()

> **resizeEventSource**\<`TElement`\>(`options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<`TElement`, [`EventSourceLike`](../../../computations/interfaces/EventSourceLike.md)\<`ResizeObserverEntry`\>\>

#### Type Parameters

• **TElement** *extends* `Element`

#### Parameters

##### options?

`ResizeObserverOptions`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TElement`, [`EventSourceLike`](../../../computations/interfaces/EventSourceLike.md)\<`ResizeObserverEntry`\>\>

***

### scrollEventSource()

> **scrollEventSource**\<`TElement`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<`TElement`, [`EventSourceLike`](../../../computations/interfaces/EventSourceLike.md)\<[`ScrollValue`](../../interfaces/ScrollValue.md)\>\>

#### Type Parameters

• **TElement** *extends* `HTMLElement`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TElement`, [`EventSourceLike`](../../../computations/interfaces/EventSourceLike.md)\<[`ScrollValue`](../../interfaces/ScrollValue.md)\>\>
