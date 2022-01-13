# Preview URL UI Extension for GraphCMS

## Why I've created this UIX

Currently, GraphCMS doesn't have an icon or link to preview content from table view. You should open an item to edit and them click to preview it.

This extension adds a link in the content table view, so that you have a shortcut to preview your content.

## Installation Instructions

1. On your project dashboard, go to **Settings > UI Extensions**
1. Click on Add UI Extension button
1. In the Extension URL field, enter this URL: https://preview-url-uix.vercel.app/, then click on **Run compatibility test**
1. In Preview URL field, add your base website URL before content slug. For instance, if a post is https://website.com/blog/your-post, enter just https://website.com/blog/.
1. Finally, click on **Authorize & Install**

## Adding Preview URL to a Schema

1. Go to **Schema** editor
1. Click on any model to edit it
1. On the right sidebar (Add Fields), click on **Preview URL** to add it to your model
1. On the dialog, enter **Display Name**
1. Click on **Advanced** tab
1. On **Field Visibility**, check **Read Only** option
1. Finally, click on **Update**

⚠️ Currently, this plugin only works with models that have a slug field called `slug`

## Previewing Links

1. Go to **Content**
1. Then, click on the Schema you've added Preview URL field in the previous step
1. In the Content Table view, you should see Preview URL column
1. Click on **Configure Columns**, then drag & drop Preview URL column to your desired place (I usually put it at the very beginning)

⚠️ You must leave Slug column visible. Otherwise, Preview URL won't work.