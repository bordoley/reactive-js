[@reactive-js/react-router-state-component](../README.md) › [RoutableStateComponentProps](routablestatecomponentprops.md)

# Interface: RoutableStateComponentProps <**TState**>

## Type parameters

▪ **TState**

## Hierarchy

* **RoutableStateComponentProps**

## Index

### Properties

* [dispatch](routablestatecomponentprops.md#dispatch)
* [goTo](routablestatecomponentprops.md#goto)
* [referer](routablestatecomponentprops.md#referer)
* [state](routablestatecomponentprops.md#state)
* [uri](routablestatecomponentprops.md#uri)

## Properties

###  dispatch

• **dispatch**: *function*

#### Type declaration:

▸ (`updater`: StateUpdater‹TState›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`updater` | StateUpdater‹TState› |

___

###  goTo

• **goTo**: *function*

#### Type declaration:

▸ (`uri`: RelativeURI): *void*

**Parameters:**

Name | Type |
------ | ------ |
`uri` | RelativeURI |

___

###  referer

• **referer**: *RelativeURI | undefined*

___

###  state

• **state**: *TState*

___

###  uri

• **uri**: *RelativeURI*
