# Custom Responsive Framework

## The Config

---

The webpack is contained in the config folder. There are three different ones for local development, staging and production. Currently we only use the local one. In the future we will implement the production config, but for now we just use develop to compile the files and push those same files to staging and production.

### ENV Folder

Don't worry about the env folder. We don't use any environment variables on O&O sites.

### Plugins Folder

Inside the plugins folder, be sure to update the proxy for the browsersync plugin found on line 37. The path here is hardcoded because of how the site variable grabs the path, if you encounter similar issues feel free to just change the proxy to what you need. Otherwise, the site variable should suffice.

There is a spritesmith plugin that's available, but we dont really use that anymore. If a site is responsive, we want to stick to icons being SVGs so they can scale easily and without distortion. So any small icons should be an svg, larger images that require transparency should be png. Images that don't require transparency should be JPG. Be sure to run any images to get through the compressor at tinypng.com.

### Configs

Inside the dev config, be sure to update the path for images and fonts to be your current path you're working on. Again, for various reasons, the one in here is hardcoded to go to a certain path but normally having it set to '../assets' should work.

## Lazysizes and Picturefill

---

This theme uses lazysizes to lazy load images and control the art direction of images. Picturefill is a polyfill that gets lazysizes images with art direction to work in IE11. Basically is a polyfill for the picture element.

### The lazysizes file

Inside this file is the settings for lazysizes. The custom media is what sets the breakpoints for when images are swapped out. Here, they've been set to match the breakpoints we target in the variables for the Flex Grid.

### Using lazysizes

The picture element is used so we can use the art direction in lazysizes. We set three different source elements for the three different devices and one img element where the lazysizes class is actually applied. Follow these guidelines for future implementations, the configuration settings (js/lazysizes.js) must be updated to match the breakpoints in the variables.scss file where --small is equivalent to xs, --medium is equivalent to sm, --large is equivalent to md, and --xlarge is equivalent to lg:

```php+HTML
<picture>
    <source
      data-srcset="<?php echo dp('resp-right-img'); ?>" 
      media="--small" />
    <source
      data-srcset="<?php echo dp('resp-right-img'); ?>" 
      media="--large" />
    <source
      data-srcset="<?php echo dp('resp-right-img-dt'); ?>" 
      media="--xlarge" />
    <img
      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
      data-src="<?php echo dp('resp-right-img'); ?>"
      class="lazyload"
      alt="image with artdirection" />
</picture>
```

## SCSS Files

---

I won't go too deep into all the framework files because a lot of them are self explanatory and since this is customized bootstrap framework you can find a lot of the documentation on their website for how to use the grid.

### Variables

This file is really the only one that should be edited (if needed) when making additional updates to the framework. There is an array called `$grid-breakpoints` that is where we store the widths of the breakpoints to match the mocks. There should be four there: xs, sm, md, lg. These breakpoints coincide with the mocks the design team gives and should be set to 0, 375, 720 and 1030. If you ever receive a mock with different breakpoints, this would be the place to update the breakpoints.

### Style Vars

This is a file I made to store site specific values that I noticed were being used repeatedly.

### Utils

This file is for utility classes. Classes that apply styles that are consistently used.

### Sections Folder

The sections folder is where you will store all your site specific SCSS files. For example, you will see a header and footer SCSS file currently in the folder.

## HTML / CSS

---

When using the framework, be sure to use the classes and structure necessary to make it responsive and seamless. There are various mixins that allow you to do queries inside CSS blocks. These are the media-breakpoint mixins and there are two that we primarily use: media-breakpoint-up and media-breakpoint-only.

Using the classes will look something like this:

```php+HTML
<section class="hero js-hide d-md-none">
  <div class="container">
    <div class="row">
      <div class="col-12 col-sm-10">
        <div>
          <?php echo dp('main-heading'); ?>
        </div>
      </div>
    </div>
  </div>
</section>
```

Again, not going to go too deep into this because there is already documentation for it that can be found at:
https://getbootstrap.com/docs/4.0/layout/grid/