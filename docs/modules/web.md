[Reactive-JS](../README.md) / web

# Module: web

## Index

### Interfaces

* [WindowLocationStreamLike](../interfaces/web.windowlocationstreamlike.md)
* [WindowLocationStreamableLike](../interfaces/web.windowlocationstreamablelike.md)

### Type aliases

* [FetchRequest](web.md#fetchrequest)
* [WindowLocationURI](web.md#windowlocationuri)

### Variables

* [windowLocation](web.md#windowlocation)

### Functions

* [createEventSource](web.md#createeventsource)
* [fetch](web.md#fetch)
* [fromEvent](web.md#fromevent)

## Type aliases

### FetchRequest

Ƭ **FetchRequest**: RequestInit & { `uri`: *string*  }

___

### WindowLocationURI

Ƭ **WindowLocationURI**: { `fragment`: *string* ; `path`: *string* ; `query`: *string* ; `title`: *string*  }

#### Type declaration:

Name | Type |
------ | ------ |
`fragment` | *string* |
`path` | *string* |
`query` | *string* |
`title` | *string* |

## Variables

### windowLocation

• `Const` **windowLocation**: [*WindowLocationStreamableLike*](../interfaces/web.windowlocationstreamablelike.md)

## Functions

### createEventSource

▸ `Const`**createEventSource**(`url`: *string* \| URL, `options?`: EventSourceInit & { `events?`: *undefined* \| readonly *string*[]  }): [*ObservableLike*](../interfaces/observable.observablelike.md)<{ `data`: *string* ; `id`: *string* ; `type`: *string*  }\>

#### Parameters:

Name | Type |
------ | ------ |
`url` | *string* \| URL |
`options?` | EventSourceInit & { `events?`: *undefined* \| readonly *string*[]  } |

**Returns:** [*ObservableLike*](../interfaces/observable.observablelike.md)<{ `data`: *string* ; `id`: *string* ; `type`: *string*  }\>

___

### fetch

▸ `Const`**fetch**<T\>(`onResponse`: [*Function1*](functions.md#function1)<Response, *Promise*<T\> \| [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>): [*Function1*](functions.md#function1)<*string* \| [*FetchRequest*](web.md#fetchrequest), [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`onResponse` | [*Function1*](functions.md#function1)<Response, *Promise*<T\> \| [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\> |

**Returns:** [*Function1*](functions.md#function1)<*string* \| [*FetchRequest*](web.md#fetchrequest), [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>\>

___

### fromEvent

▸ `Const`**fromEvent**<T\>(`target`: EventTarget, `eventName`: *string*, `selector`: [*Function1*](functions.md#function1)<Event, T\>): [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`target` | EventTarget |
`eventName` | *string* |
`selector` | [*Function1*](functions.md#function1)<Event, T\> |

**Returns:** [*ObservableLike*](../interfaces/observable.observablelike.md)<T\>
