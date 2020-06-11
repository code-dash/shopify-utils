# Shopify Utils

**Work in progress**

This is a script that can be pasted in your browser console in order to take advantage of the Shopify Admin access and build additional functionalities on top of it.

Shopify constantly updates their admin logic, so there is a high chance at some point some of the routes stop working.

There might be some bugs so please use at your own discretion!

**Notice: Its imporatant to be in the "top" content for the console, since there will be issues if you enter the iframe context on the `pages` type and try to locate the checked checkboxes.**

## How to use

1) Copy the code from `dist/bundle.js`.

2) Open your Shopify admin

3) Open your browser developer console (usually with F12)

4) Paste the code and press enter

5) You should see a small arrow in the right center of the screen that should open a panel when clicked

## Features

### Duplication

Duplication is supported for the following page types

- `/admin/products` (no support for Gift Products)
- `/admin/product/ID` (no support for Gift Products)
- `/admin/collections`
- `/admin/collections/ID`
- `/admin/pages`
- `/admin/pages/ID`
- `/admin/blogs`
- `/admin/blogs/ID`
- `/admin/articles`
- `/admin/blogs/BLOG_ID/articles/ID`
- `/admin/menus/ID`

### Dynamic Content

This option allows to dynamically pull pages/products/collections/blogs/articles based on dynamic conditions and update them using predefined methods or using custom code.

#### Filtration

The target objects for filtration are as follow:

* Product title
* Product content
* Product price
* Product tags

The conditions are:

* is equal to
* is not equal to
* is greater then
* is lesser then
* starts with
* ends with
* contains
* does not contain

#### Updates

The the target elements are:

* Title
* Content
* Tags

The methods are:

* Add
* Remove
* Lowercase
* Uppercase
* Insert Before
* Insert after
* Replace
* Replace RegEx
* Custom Code

#### Custom code

Only for developers that understand Javascript coding! Don't copy/paste random codes here that can break your store! It relies on eval function!

This option allows you to create a custom script that suits your needs for the specific items that you've filtered.

You have access to the filtered items via the object `shopifyUtils.filteredItems` and to the request method `shopifyUtils.postRequest(URL, METHOD, OBJECT)` which returns a promise.

Double test your code before you start it!

Example custom code where we attach "updated" text to the end of the title for each product:

```js
(async () => {
  for (let index = 0; index < shopifyUtils.filteredItems.length; index++) {
    const element = shopifyUtils.filteredItems[index];
    await shopifyUtils.postRequest(`products/${element.id}.json`, "PUT", {
      product: {
        title: element.title + ' updated'
      }
    })
  }
  alert('Done!')
})();
```

## Planned features

- Multiply delete for orders directly from the listing page
- Export/Import with some exceptions
- Metafields support

# Change Log

## [0.3.2] - 2020-06-11

## Added

- tags filtration
- content update methods
- tags update methods

## Update

- OR filtration logic to work properly

## [0.3.1] - 2020-06-09

## Added

- product price filtration
- greater and lesser than options for price

## [0.3.0] - 2020-06-08

## Added

- response holder for the condition output

## Updated

- fix dynamic content logic
- update styles

## [0.2.4] - 2020-06-07

## Added

- filtration logic for AND and OR
- update logic for lowercase/uppercase/insert before/insert after/replace/replace regexp/custom code

## [0.2.3] - 2020-06-06

## Added

- getRequestAll method for grabing objects with pagination

## [0.2.2] - 2020-05-30

## Added

- CodeMirror logic for the soon to be custom JS method

### Updated

- the look of the dynamic sidepanel

## [0.2.1] - 2020-05-27

### Updated

- small html updates

## [0.2.0] - 2020-05-26

### Added

- initial dynamic content logic

### Updated

- html append

## [0.1.1] - 2020-05-25

### Added

- metafields duplication option for all page types
- metafields duplication for product variants

### Updated

- duplication will open new box where you can choose if metafields should be included
- webpack for SCSS support
- static CSS js file to SCSS

## [0.1.0] - 2020-05-24

### Added
 
- webpack setup
- Duplicate for articles
- Duplicate for blogs
- Duplicate for navigations

### Updated

- split up code in separate files
- upate readme file

## [0.0.1] - 2020-05-23/2020-05-24
 
### Added
 
- Duplicate for collections
- Duplicate for products
- Duplicate for pages