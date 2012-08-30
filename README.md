# Wield

A tiny object wrapper around the DOM, targetted at replacing the core of the manipulations found inside jQuery, and providing a collection API on top of it.

## Project Goals

The primary goals of this project are to be exceptionally modular with a preference toward building a custom stack as a means to reduce size, fast parsing and method execution from the start, and to keep the collections API separate from the DOM manipulation API.

1. Abstraction of collections and DOM manip
2. Modularity at the method level (AMD, builder)
3. Parsing performance
4. Method performance
5. Size min'd and gzip'd
5. Type checked (clojure compiler)

## DOM Manipulation

The core of the library is a lightweight object wrapper for DOM elements. The goals for this portion are:

1. jQuery Browser support parity
2. Pass jQuery's DOM manipulation test suite
3. Single invocation pattern per method

Samples of stand alone use:

```javascript
var div = new Wield( document.getElementByName("div") ),
	span = document.createElement( "span" );

div.append( span ); // <div><span></span></div>
div.empty();        // <div></div>
div.wrap( span );   // <span><div></div></span>

// or ...

div.append( span ).empty().wrap( span );
```

## Collections

The collections portion of the library is meant to be a jQuery-ish usability layer for selection and collection manipulation

1. Provide a drop in replacement for jQuery methods that would use the core
2. Selector engine abstraction (querySelector/Sizzle)

Samples:

```javascript
Wield.finder = document.querySelectorAll;
var divs = Wield.find( "body > div" );

divs.addClass( "foo" ); // <div class='foo'></div><div class='foo'></div>

Wield.finder = Sizzle;
divs = Wield.find( "span:visible" );
divs.addClass( "foo" ); // <span class='foo'></span>
```

## Utilities

Inevitably users will need or want simple things, like element creation, that are streamlined and cross platform. The goal is to keep this separate.

Sample:

```javascript
var newDiv = Wield.create( "<div/>" );

Wield.find( "span" ).append( newDiv );
```
