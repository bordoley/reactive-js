[@reactive-js/core - v0.0.37](../README.md) › ["parserCombinators"](_parsercombinators_.md)

# Module: "parserCombinators"

## Index

### Interfaces

* [CharStreamLike](../interfaces/_parsercombinators_.charstreamlike.md)

### Type aliases

* [CharCode](_parsercombinators_.md#charcode)
* [Parser](_parsercombinators_.md#parser)

### Variables

* [isParseError](_parsercombinators_.md#const-isparseerror)
* [pAsterisk](_parsercombinators_.md#const-pasterisk)
* [pCloseParen](_parsercombinators_.md#const-pcloseparen)
* [pColon](_parsercombinators_.md#const-pcolon)
* [pComma](_parsercombinators_.md#const-pcomma)
* [pDash](_parsercombinators_.md#const-pdash)
* [pDquote](_parsercombinators_.md#const-pdquote)
* [pEquals](_parsercombinators_.md#const-pequals)
* [pForwardSlash](_parsercombinators_.md#const-pforwardslash)
* [pOpenParen](_parsercombinators_.md#const-popenparen)
* [pPeriod](_parsercombinators_.md#const-pperiod)
* [pSemicolon](_parsercombinators_.md#const-psemicolon)
* [pSpace](_parsercombinators_.md#const-pspace)
* [throwParseError](_parsercombinators_.md#const-throwparseerror)

### Functions

* [char](_parsercombinators_.md#const-char)
* [concat](_parsercombinators_.md#concat)
* [createCharStream](_parsercombinators_.md#const-createcharstream)
* [followedBy](_parsercombinators_.md#const-followedby)
* [many](_parsercombinators_.md#const-many)
* [manyIgnore](_parsercombinators_.md#const-manyignore)
* [manySatisfy](_parsercombinators_.md#const-manysatisfy)
* [map](_parsercombinators_.md#const-map)
* [mapTo](_parsercombinators_.md#const-mapto)
* [optional](_parsercombinators_.md#const-optional)
* [or](_parsercombinators_.md#const-or)
* [orCompute](_parsercombinators_.md#const-orcompute)
* [pEof](_parsercombinators_.md#const-peof)
* [parseWith](_parsercombinators_.md#const-parsewith)
* [parseWithOrThrow](_parsercombinators_.md#const-parsewithorthrow)
* [satisfy](_parsercombinators_.md#const-satisfy)
* [sepBy](_parsercombinators_.md#const-sepby)
* [sepBy1](_parsercombinators_.md#const-sepby1)
* [string](_parsercombinators_.md#const-string)

## Type aliases

###  CharCode

Ƭ **CharCode**: *number*

___

###  Parser

Ƭ **Parser**: *function*

#### Type declaration:

▸ (`input`: [CharStreamLike](../interfaces/_parsercombinators_.charstreamlike.md)): *T*

**Parameters:**

Name | Type |
------ | ------ |
`input` | [CharStreamLike](../interfaces/_parsercombinators_.charstreamlike.md) |

## Variables

### `Const` isParseError

• **isParseError**: *function* = _isParseError

#### Type declaration:

▸ (`e`: unknown): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`e` | unknown |

___

### `Const` pAsterisk

• **pAsterisk**: *function* = char("*")

#### Type declaration:

▸ (`input`: [CharStreamLike](../interfaces/_parsercombinators_.charstreamlike.md)): *T*

**Parameters:**

Name | Type |
------ | ------ |
`input` | [CharStreamLike](../interfaces/_parsercombinators_.charstreamlike.md) |

___

### `Const` pCloseParen

• **pCloseParen**: *function* = char(")")

#### Type declaration:

▸ (`input`: [CharStreamLike](../interfaces/_parsercombinators_.charstreamlike.md)): *T*

**Parameters:**

Name | Type |
------ | ------ |
`input` | [CharStreamLike](../interfaces/_parsercombinators_.charstreamlike.md) |

___

### `Const` pColon

• **pColon**: *function* = char(":")

#### Type declaration:

▸ (`input`: [CharStreamLike](../interfaces/_parsercombinators_.charstreamlike.md)): *T*

**Parameters:**

Name | Type |
------ | ------ |
`input` | [CharStreamLike](../interfaces/_parsercombinators_.charstreamlike.md) |

___

### `Const` pComma

• **pComma**: *function* = char(",")

#### Type declaration:

▸ (`input`: [CharStreamLike](../interfaces/_parsercombinators_.charstreamlike.md)): *T*

**Parameters:**

Name | Type |
------ | ------ |
`input` | [CharStreamLike](../interfaces/_parsercombinators_.charstreamlike.md) |

___

### `Const` pDash

• **pDash**: *function* = char("-")

#### Type declaration:

▸ (`input`: [CharStreamLike](../interfaces/_parsercombinators_.charstreamlike.md)): *T*

**Parameters:**

Name | Type |
------ | ------ |
`input` | [CharStreamLike](../interfaces/_parsercombinators_.charstreamlike.md) |

___

### `Const` pDquote

• **pDquote**: *function* = char('"')

#### Type declaration:

▸ (`input`: [CharStreamLike](../interfaces/_parsercombinators_.charstreamlike.md)): *T*

**Parameters:**

Name | Type |
------ | ------ |
`input` | [CharStreamLike](../interfaces/_parsercombinators_.charstreamlike.md) |

___

### `Const` pEquals

• **pEquals**: *function* = char("=")

#### Type declaration:

▸ (`input`: [CharStreamLike](../interfaces/_parsercombinators_.charstreamlike.md)): *T*

**Parameters:**

Name | Type |
------ | ------ |
`input` | [CharStreamLike](../interfaces/_parsercombinators_.charstreamlike.md) |

___

### `Const` pForwardSlash

• **pForwardSlash**: *function* = char("/")

#### Type declaration:

▸ (`input`: [CharStreamLike](../interfaces/_parsercombinators_.charstreamlike.md)): *T*

**Parameters:**

Name | Type |
------ | ------ |
`input` | [CharStreamLike](../interfaces/_parsercombinators_.charstreamlike.md) |

___

### `Const` pOpenParen

• **pOpenParen**: *function* = char("(")

#### Type declaration:

▸ (`input`: [CharStreamLike](../interfaces/_parsercombinators_.charstreamlike.md)): *T*

**Parameters:**

Name | Type |
------ | ------ |
`input` | [CharStreamLike](../interfaces/_parsercombinators_.charstreamlike.md) |

___

### `Const` pPeriod

• **pPeriod**: *function* = char(".")

#### Type declaration:

▸ (`input`: [CharStreamLike](../interfaces/_parsercombinators_.charstreamlike.md)): *T*

**Parameters:**

Name | Type |
------ | ------ |
`input` | [CharStreamLike](../interfaces/_parsercombinators_.charstreamlike.md) |

___

### `Const` pSemicolon

• **pSemicolon**: *function* = char(";")

#### Type declaration:

▸ (`input`: [CharStreamLike](../interfaces/_parsercombinators_.charstreamlike.md)): *T*

**Parameters:**

Name | Type |
------ | ------ |
`input` | [CharStreamLike](../interfaces/_parsercombinators_.charstreamlike.md) |

___

### `Const` pSpace

• **pSpace**: *function* = char(" ")

#### Type declaration:

▸ (`input`: [CharStreamLike](../interfaces/_parsercombinators_.charstreamlike.md)): *T*

**Parameters:**

Name | Type |
------ | ------ |
`input` | [CharStreamLike](../interfaces/_parsercombinators_.charstreamlike.md) |

___

### `Const` throwParseError

• **throwParseError**: *function* = _throwParseError

#### Type declaration:

▸ <**T**>(`charStream`: [CharStreamLike](../interfaces/_parsercombinators_.charstreamlike.md)): *T*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`charStream` | [CharStreamLike](../interfaces/_parsercombinators_.charstreamlike.md) |

## Functions

### `Const` char

▸ **char**(`c`: string): *[Parser](_parsercombinators_.md#parser)‹[CharCode](_parsercombinators_.md#charcode)›*

**Parameters:**

Name | Type |
------ | ------ |
`c` | string |

**Returns:** *[Parser](_parsercombinators_.md#parser)‹[CharCode](_parsercombinators_.md#charcode)›*

___

###  concat

▸ **concat**<**TA**, **TB**>(`a`: [Parser](_parsercombinators_.md#parser)‹TA›, `b`: [Parser](_parsercombinators_.md#parser)‹TB›): *[Parser](_parsercombinators_.md#parser)‹[TA, TB]›*

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [Parser](_parsercombinators_.md#parser)‹TA› |
`b` | [Parser](_parsercombinators_.md#parser)‹TB› |

**Returns:** *[Parser](_parsercombinators_.md#parser)‹[TA, TB]›*

▸ **concat**<**TA**, **TB**, **TC**>(`a`: [Parser](_parsercombinators_.md#parser)‹TA›, `b`: [Parser](_parsercombinators_.md#parser)‹TB›, `c`: [Parser](_parsercombinators_.md#parser)‹TC›): *[Parser](_parsercombinators_.md#parser)‹[TA, TB, TC]›*

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [Parser](_parsercombinators_.md#parser)‹TA› |
`b` | [Parser](_parsercombinators_.md#parser)‹TB› |
`c` | [Parser](_parsercombinators_.md#parser)‹TC› |

**Returns:** *[Parser](_parsercombinators_.md#parser)‹[TA, TB, TC]›*

▸ **concat**<**TA**, **TB**, **TC**, **TD**>(`a`: [Parser](_parsercombinators_.md#parser)‹TA›, `b`: [Parser](_parsercombinators_.md#parser)‹TB›, `c`: [Parser](_parsercombinators_.md#parser)‹TC›, `d`: [Parser](_parsercombinators_.md#parser)‹TD›): *[Parser](_parsercombinators_.md#parser)‹[TA, TB, TC, TD]›*

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [Parser](_parsercombinators_.md#parser)‹TA› |
`b` | [Parser](_parsercombinators_.md#parser)‹TB› |
`c` | [Parser](_parsercombinators_.md#parser)‹TC› |
`d` | [Parser](_parsercombinators_.md#parser)‹TD› |

**Returns:** *[Parser](_parsercombinators_.md#parser)‹[TA, TB, TC, TD]›*

▸ **concat**<**TA**, **TB**, **TC**, **TD**, **TE**>(`a`: [Parser](_parsercombinators_.md#parser)‹TA›, `b`: [Parser](_parsercombinators_.md#parser)‹TB›, `c`: [Parser](_parsercombinators_.md#parser)‹TC›, `d`: [Parser](_parsercombinators_.md#parser)‹TD›, `e`: [Parser](_parsercombinators_.md#parser)‹TE›): *[Parser](_parsercombinators_.md#parser)‹[TA, TB, TC, TD, TE]›*

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

▪ **TE**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [Parser](_parsercombinators_.md#parser)‹TA› |
`b` | [Parser](_parsercombinators_.md#parser)‹TB› |
`c` | [Parser](_parsercombinators_.md#parser)‹TC› |
`d` | [Parser](_parsercombinators_.md#parser)‹TD› |
`e` | [Parser](_parsercombinators_.md#parser)‹TE› |

**Returns:** *[Parser](_parsercombinators_.md#parser)‹[TA, TB, TC, TD, TE]›*

▸ **concat**<**TA**, **TB**, **TC**, **TD**, **TE**, **TF**>(`a`: [Parser](_parsercombinators_.md#parser)‹TA›, `b`: [Parser](_parsercombinators_.md#parser)‹TB›, `c`: [Parser](_parsercombinators_.md#parser)‹TC›, `d`: [Parser](_parsercombinators_.md#parser)‹TD›, `e`: [Parser](_parsercombinators_.md#parser)‹TE›, `f`: [Parser](_parsercombinators_.md#parser)‹TF›): *[Parser](_parsercombinators_.md#parser)‹[TA, TB, TC, TD, TE, TF]›*

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

▪ **TE**

▪ **TF**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [Parser](_parsercombinators_.md#parser)‹TA› |
`b` | [Parser](_parsercombinators_.md#parser)‹TB› |
`c` | [Parser](_parsercombinators_.md#parser)‹TC› |
`d` | [Parser](_parsercombinators_.md#parser)‹TD› |
`e` | [Parser](_parsercombinators_.md#parser)‹TE› |
`f` | [Parser](_parsercombinators_.md#parser)‹TF› |

**Returns:** *[Parser](_parsercombinators_.md#parser)‹[TA, TB, TC, TD, TE, TF]›*

▸ **concat**<**TA**, **TB**, **TC**, **TD**, **TE**, **TF**, **TG**>(`a`: [Parser](_parsercombinators_.md#parser)‹TA›, `b`: [Parser](_parsercombinators_.md#parser)‹TB›, `c`: [Parser](_parsercombinators_.md#parser)‹TC›, `d`: [Parser](_parsercombinators_.md#parser)‹TD›, `e`: [Parser](_parsercombinators_.md#parser)‹TE›, `f`: [Parser](_parsercombinators_.md#parser)‹TF›, `g`: [Parser](_parsercombinators_.md#parser)‹TG›): *[Parser](_parsercombinators_.md#parser)‹[TA, TB, TC, TD, TE, TF, TG]›*

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

▪ **TE**

▪ **TF**

▪ **TG**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [Parser](_parsercombinators_.md#parser)‹TA› |
`b` | [Parser](_parsercombinators_.md#parser)‹TB› |
`c` | [Parser](_parsercombinators_.md#parser)‹TC› |
`d` | [Parser](_parsercombinators_.md#parser)‹TD› |
`e` | [Parser](_parsercombinators_.md#parser)‹TE› |
`f` | [Parser](_parsercombinators_.md#parser)‹TF› |
`g` | [Parser](_parsercombinators_.md#parser)‹TG› |

**Returns:** *[Parser](_parsercombinators_.md#parser)‹[TA, TB, TC, TD, TE, TF, TG]›*

▸ **concat**<**TA**, **TB**, **TC**, **TD**, **TE**, **TF**, **TG**, **TH**>(`a`: [Parser](_parsercombinators_.md#parser)‹TA›, `b`: [Parser](_parsercombinators_.md#parser)‹TB›, `c`: [Parser](_parsercombinators_.md#parser)‹TC›, `d`: [Parser](_parsercombinators_.md#parser)‹TD›, `e`: [Parser](_parsercombinators_.md#parser)‹TE›, `f`: [Parser](_parsercombinators_.md#parser)‹TF›, `g`: [Parser](_parsercombinators_.md#parser)‹TG›, `h`: [Parser](_parsercombinators_.md#parser)‹TH›): *[Parser](_parsercombinators_.md#parser)‹[TA, TB, TC, TD, TE, TF, TG, TH]›*

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

▪ **TE**

▪ **TF**

▪ **TG**

▪ **TH**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [Parser](_parsercombinators_.md#parser)‹TA› |
`b` | [Parser](_parsercombinators_.md#parser)‹TB› |
`c` | [Parser](_parsercombinators_.md#parser)‹TC› |
`d` | [Parser](_parsercombinators_.md#parser)‹TD› |
`e` | [Parser](_parsercombinators_.md#parser)‹TE› |
`f` | [Parser](_parsercombinators_.md#parser)‹TF› |
`g` | [Parser](_parsercombinators_.md#parser)‹TG› |
`h` | [Parser](_parsercombinators_.md#parser)‹TH› |

**Returns:** *[Parser](_parsercombinators_.md#parser)‹[TA, TB, TC, TD, TE, TF, TG, TH]›*

▸ **concat**<**TA**, **TB**, **TC**, **TD**, **TE**, **TF**, **TG**, **TH**, **TI**>(`a`: [Parser](_parsercombinators_.md#parser)‹TA›, `b`: [Parser](_parsercombinators_.md#parser)‹TB›, `c`: [Parser](_parsercombinators_.md#parser)‹TC›, `d`: [Parser](_parsercombinators_.md#parser)‹TD›, `e`: [Parser](_parsercombinators_.md#parser)‹TE›, `f`: [Parser](_parsercombinators_.md#parser)‹TF›, `g`: [Parser](_parsercombinators_.md#parser)‹TG›, `h`: [Parser](_parsercombinators_.md#parser)‹TH›, `i`: [Parser](_parsercombinators_.md#parser)‹TI›): *[Parser](_parsercombinators_.md#parser)‹[TA, TB, TC, TD, TE, TF, TG, TH, TI]›*

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

▪ **TE**

▪ **TF**

▪ **TG**

▪ **TH**

▪ **TI**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [Parser](_parsercombinators_.md#parser)‹TA› |
`b` | [Parser](_parsercombinators_.md#parser)‹TB› |
`c` | [Parser](_parsercombinators_.md#parser)‹TC› |
`d` | [Parser](_parsercombinators_.md#parser)‹TD› |
`e` | [Parser](_parsercombinators_.md#parser)‹TE› |
`f` | [Parser](_parsercombinators_.md#parser)‹TF› |
`g` | [Parser](_parsercombinators_.md#parser)‹TG› |
`h` | [Parser](_parsercombinators_.md#parser)‹TH› |
`i` | [Parser](_parsercombinators_.md#parser)‹TI› |

**Returns:** *[Parser](_parsercombinators_.md#parser)‹[TA, TB, TC, TD, TE, TF, TG, TH, TI]›*

___

### `Const` createCharStream

▸ **createCharStream**(`input`: string): *[CharStreamLike](../interfaces/_parsercombinators_.charstreamlike.md)*

**Parameters:**

Name | Type |
------ | ------ |
`input` | string |

**Returns:** *[CharStreamLike](../interfaces/_parsercombinators_.charstreamlike.md)*

___

### `Const` followedBy

▸ **followedBy**<**T**>(`other`: [Parser](_parsercombinators_.md#parser)‹unknown›): *[Operator](_functions_.md#operator)‹[Parser](_parsercombinators_.md#parser)‹T›, [Parser](_parsercombinators_.md#parser)‹T››*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`other` | [Parser](_parsercombinators_.md#parser)‹unknown› |

**Returns:** *[Operator](_functions_.md#operator)‹[Parser](_parsercombinators_.md#parser)‹T›, [Parser](_parsercombinators_.md#parser)‹T››*

___

### `Const` many

▸ **many**<**T**>(`options`: object): *[Operator](_functions_.md#operator)‹[Parser](_parsercombinators_.md#parser)‹T›, [Parser](_parsercombinators_.md#parser)‹keyof T[]››*

**Type parameters:**

▪ **T**

**Parameters:**

▪`Default value`  **options**: *object*= {}

Name | Type |
------ | ------ |
`max?` | number |
`min?` | number |

**Returns:** *[Operator](_functions_.md#operator)‹[Parser](_parsercombinators_.md#parser)‹T›, [Parser](_parsercombinators_.md#parser)‹keyof T[]››*

___

### `Const` manyIgnore

▸ **manyIgnore**<**T**>(`options`: object): *[Operator](_functions_.md#operator)‹[Parser](_parsercombinators_.md#parser)‹T›, [Parser](_parsercombinators_.md#parser)‹void››*

**Type parameters:**

▪ **T**

**Parameters:**

▪`Default value`  **options**: *object*= {}

Name | Type |
------ | ------ |
`max?` | number |
`min?` | number |

**Returns:** *[Operator](_functions_.md#operator)‹[Parser](_parsercombinators_.md#parser)‹T›, [Parser](_parsercombinators_.md#parser)‹void››*

___

### `Const` manySatisfy

▸ **manySatisfy**(`options`: object): *[Operator](_functions_.md#operator)‹[Parser](_parsercombinators_.md#parser)‹[CharCode](_parsercombinators_.md#charcode)›, [Parser](_parsercombinators_.md#parser)‹string››*

**Parameters:**

▪`Default value`  **options**: *object*= {}

Name | Type |
------ | ------ |
`max?` | number |
`min?` | number |

**Returns:** *[Operator](_functions_.md#operator)‹[Parser](_parsercombinators_.md#parser)‹[CharCode](_parsercombinators_.md#charcode)›, [Parser](_parsercombinators_.md#parser)‹string››*

___

### `Const` map

▸ **map**<**TA**, **TB**>(`mapper`: function): *[Operator](_functions_.md#operator)‹[Parser](_parsercombinators_.md#parser)‹TA›, [Parser](_parsercombinators_.md#parser)‹TB››*

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

▪ **mapper**: *function*

▸ (`result`: TA): *TB*

**Parameters:**

Name | Type |
------ | ------ |
`result` | TA |

**Returns:** *[Operator](_functions_.md#operator)‹[Parser](_parsercombinators_.md#parser)‹TA›, [Parser](_parsercombinators_.md#parser)‹TB››*

___

### `Const` mapTo

▸ **mapTo**<**TA**, **TB**>(`v`: TB): *[Operator](_functions_.md#operator)‹[Parser](_parsercombinators_.md#parser)‹TA›, [Parser](_parsercombinators_.md#parser)‹TB››*

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type |
------ | ------ |
`v` | TB |

**Returns:** *[Operator](_functions_.md#operator)‹[Parser](_parsercombinators_.md#parser)‹TA›, [Parser](_parsercombinators_.md#parser)‹TB››*

___

### `Const` optional

▸ **optional**<**T**>(`parse`: [Parser](_parsercombinators_.md#parser)‹T›): *[Parser](_parsercombinators_.md#parser)‹[Option](_option_.md#option)‹T››*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`parse` | [Parser](_parsercombinators_.md#parser)‹T› |

**Returns:** *[Parser](_parsercombinators_.md#parser)‹[Option](_option_.md#option)‹T››*

___

### `Const` or

▸ **or**<**TA**, **TB**>(`otherParse`: [Parser](_parsercombinators_.md#parser)‹TB›): *[Operator](_functions_.md#operator)‹[Parser](_parsercombinators_.md#parser)‹TA›, [Parser](_parsercombinators_.md#parser)‹TA | TB››*

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type |
------ | ------ |
`otherParse` | [Parser](_parsercombinators_.md#parser)‹TB› |

**Returns:** *[Operator](_functions_.md#operator)‹[Parser](_parsercombinators_.md#parser)‹TA›, [Parser](_parsercombinators_.md#parser)‹TA | TB››*

___

### `Const` orCompute

▸ **orCompute**<**T**>(`compute`: function): *[Operator](_functions_.md#operator)‹[Parser](_parsercombinators_.md#parser)‹[Option](_option_.md#option)‹T››, [Parser](_parsercombinators_.md#parser)‹T››*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **compute**: *function*

▸ (): *T*

**Returns:** *[Operator](_functions_.md#operator)‹[Parser](_parsercombinators_.md#parser)‹[Option](_option_.md#option)‹T››, [Parser](_parsercombinators_.md#parser)‹T››*

___

### `Const` pEof

▸ **pEof**(`charStream`: [CharStreamLike](../interfaces/_parsercombinators_.charstreamlike.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`charStream` | [CharStreamLike](../interfaces/_parsercombinators_.charstreamlike.md) |

**Returns:** *void*

___

### `Const` parseWith

▸ **parseWith**<**T**>(`parse`: [Parser](_parsercombinators_.md#parser)‹T›): *[Operator](_functions_.md#operator)‹string, [Option](_option_.md#option)‹T››*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`parse` | [Parser](_parsercombinators_.md#parser)‹T› |

**Returns:** *[Operator](_functions_.md#operator)‹string, [Option](_option_.md#option)‹T››*

___

### `Const` parseWithOrThrow

▸ **parseWithOrThrow**<**T**>(`parser`: [Parser](_parsercombinators_.md#parser)‹T›): *[Operator](_functions_.md#operator)‹string, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`parser` | [Parser](_parsercombinators_.md#parser)‹T› |

**Returns:** *[Operator](_functions_.md#operator)‹string, T›*

___

### `Const` satisfy

▸ **satisfy**(`f`: function): *[Parser](_parsercombinators_.md#parser)‹[CharCode](_parsercombinators_.md#charcode)›*

**Parameters:**

▪ **f**: *function*

▸ (`char`: [CharCode](_parsercombinators_.md#charcode)): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`char` | [CharCode](_parsercombinators_.md#charcode) |

**Returns:** *[Parser](_parsercombinators_.md#parser)‹[CharCode](_parsercombinators_.md#charcode)›*

___

### `Const` sepBy

▸ **sepBy**<**T**>(`separator`: [Parser](_parsercombinators_.md#parser)‹unknown›): *[Operator](_functions_.md#operator)‹[Parser](_parsercombinators_.md#parser)‹T›, [Parser](_parsercombinators_.md#parser)‹keyof T[]››*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`separator` | [Parser](_parsercombinators_.md#parser)‹unknown› |

**Returns:** *[Operator](_functions_.md#operator)‹[Parser](_parsercombinators_.md#parser)‹T›, [Parser](_parsercombinators_.md#parser)‹keyof T[]››*

___

### `Const` sepBy1

▸ **sepBy1**<**T**>(`separator`: [Parser](_parsercombinators_.md#parser)‹unknown›): *[Operator](_functions_.md#operator)‹[Parser](_parsercombinators_.md#parser)‹T›, [Parser](_parsercombinators_.md#parser)‹keyof T[]››*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`separator` | [Parser](_parsercombinators_.md#parser)‹unknown› |

**Returns:** *[Operator](_functions_.md#operator)‹[Parser](_parsercombinators_.md#parser)‹T›, [Parser](_parsercombinators_.md#parser)‹keyof T[]››*

___

### `Const` string

▸ **string**(`str`: string): *[Parser](_parsercombinators_.md#parser)‹string›*

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |

**Returns:** *[Parser](_parsercombinators_.md#parser)‹string›*
