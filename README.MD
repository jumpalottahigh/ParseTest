If you fork this:
---

Just bower install and run the project on your favorite server!

How to start from scratch and how I got here?
===

1. Init
---
Directory, Git and Bower init.

```
mkdir ParseTest && cd ParseTest
git init
bower init
```

2. Packages
---
Getting jquery, bootstrap and handlebars.

```
bower install jquery
bower install bootstrap
bower install --save handlebars
```

3. Make a Parse.com account
---
Get your unique app key and add it to the app via:

```
Parse.initialize("key1", "key2");
```
substitute key1 and key2 with your own keys.
