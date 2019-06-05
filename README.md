# NextJS Back Button Bug

A test case demonstrating a bug in NextJS when passing objects in the `query` parameter.

## Description of the bug

When an object is passed from a custom server to a NextJS page in the `query` parameter, the object is passed as is to the page's `getInitialProps` method. However, when you navigate away from the page and then press the back button to return to the page, the object is transformed to an empty string.

# To reproduce

1. Clone repo
1. Run `npm install`
1. Run `npm run dev`
1. Go to http://localhost:3000
1. The page renders the query correctly.
1. Click on the link to page B.
1. After page B has loaded, click the back button.
1. The page no longer query correctly: `testObject` is an empty string.
