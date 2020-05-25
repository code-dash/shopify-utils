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

## Planned features

- Multiply delete for orders directly from the listing page
- Export/Import with some exceptions
- Find and replace/update functionality for pages/products/collections/blogs/articles based on dynamic conditions
- Metafields support

# Change Log

## [0.1.1] - 2020-05-25

### Added

- metafields duplication option for all page types
- metafields duplication for product variants

### Updated

- duplication will open new box where you can choose if metafields should be included
- webpack for SCSS support
- convert static CSS js file to SCSS

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