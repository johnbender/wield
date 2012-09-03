# Wield

A tiny object wrapper around the DOM, targeted at replacing the core of the manipulations found inside jQuery, and providing a collection API on top of it. The hope is that the core DOM manipulations could become popular enough to be incorporated as an abstracted set of DOM manipulations inside jQuery.

## Project Goals

The primary goals of this project are to be exceptionally modular with a preference toward building a custom stack as a means to reduce size, fast parsing and method execution from the start, and to keep the collections API separate from the DOM manipulation API.

1. Abstraction of collections and DOM manip
2. Modularity at the method level (AMD, builder)
3. Parsing performance
4. Method performance
5. Size min'd and gzip'd
5. Type checked (closure compiler)

## DOM Manipulation

The core of the library is a lightweight object wrapper for DOM elements. The goals for this portion are:

1. jQuery Browser support parity
2. Pass jQuery's DOM manipulation test suite
3. Single invocation pattern per method

Samples of stand alone use:

```javascript
var div = new Wield.Dom( document.getElementByName("div") ),
	span = document.createElement( "span" );

div.append( span ); // <div><span></span></div>
div.empty();        // <div></div>
div.wrap( span );   // <span><div></div></span>

// or ...

div.append( span ).empty().wrap( span );
```

### Standalone vs Object Receiver

In the interest of facilitating testing with the jquery core test suite each of the manipulation methods can be invoked on a instance of the Dom object constructor and as a standalone function on the prototype. Eg:

```javascript
var fixture = new Wield.Dom( document.getElementById("foo") );

fixture.remove();

// or ...

Wield.Dom.prototype.remove( document.getElementById("foo") );
```

For methods that accept at least one argument, `Wield.Dom` methods will accept either DOM or `Wield.Dom` objects when invoked with an object receiver and DOM elements when invoked as a function.

```javascript
var fixture = new Wield.Dom( document.getElementById("foo") );

fixture.append( document.createElement("span") );

// or ...

fixture.append( new Wield.Dom(document.createElement("span")) );

// or ...

Wield.Dom.prototype.append(
  document.getElementById("foo"),
  document.createElement("span")
);
```

### Wield.Dom.find

By defining the `Wield.Dom.finder` function (which uses `querySelector` by default in browsers that [support](http://caniuse.com/queryselector) it), the user can simplify `Wield.Dom` object creation, Eg:

```javascript
var fixture = Wield.Dom.find( "#foo" );

fixture.remove();
```

Alternatively you could use [sizzle](http://sizzlejs.com) for the finder function, eg:

```javascript
Wield.Dom.finder = window.Sizzle;
var fixture = Wield.Dom.find( ":not([that='crazy'])" );

fixture.remove();
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

## Outstanding Questions

There are few things that are yet to be decided about how the library should work:

1. Should the prototype functions return the element being operated on for the sake of composition?
2. Is it worth supporting many invocation patterns (ie, should it just be functions)? More specifically what is the real cost of supporting both?
3. Are there other libraries that focus on replacing the browsers DOM manipulation API?
4. Is there interest in the library by itself?

## TODOs

There are outstanding items of work that need to be put into place for the project to achieve it's goals:

1. Size regression testing
2. Performance regression testing
3. Cross browser automated testing (testswarm)
4. Sample DOM manip
5. Node based amd builder
6. Sort out build vs amd include issues (eg, excluding returns with pragmas)
