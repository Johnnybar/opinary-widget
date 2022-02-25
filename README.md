**Opinary Poll Widget App.**

Create your own poll and vote on configurable questions.

**Instructions:**
To start the app run `npm i`, followed by `npm start`. Run all tests with `npm test`.

Run `npm run build:widget` to build the widget and test its functionality by directly opening up either `static-page-test-1.html` or `static-page-test-2.html` on the project root.

The widget was bundled using Parcel and can be embedded simply by adding a few lines of code to the body of any HTML page
and editing the div `data-questions` attribute (see code below note).

**Note:** Since it should be possible to embed the widget in a static page, which reduced flexibility in terms of configuration, I decided on passing the question and answers as a data-attribute. An HTTP client was able to retrieve JSON data on the React app but unfortunately causes CORS issues if used on a static page. I would be specifically happy for feedback here.

```

<div id="opinary-widget"
    data-questions='{
    "question": "How did you like the Opinary test?" ,
    "answers" : [
      "It was great and so challenging",
      "Not bad, but you can improve",
      "It was a nightmare, never again"
       ] }'>
</div>
<script src="./dist/index.js"></script>
<link rel="stylesheet" href="./dist/index.css">
```

**Summary of technical choices:**

- I used TypeScript, React, Sass, Node.js and Parcel to create a functioning poll widget.

- The widget works by adding question and answers in the `data-questions` data attribute and linking to the bundled js and css files in the `dist` folder.

- Same polls are prevented from being displayed on the same page (see `removeIdenticalNodes` in index.tsx).

- Each Answer object is modified when the app mounts to contain an **exactId** prop comprising the specific widget identifier with the actual answer's index, to make sure votes for each question are unique (when there are multiple widgets in a page, for example) when saved to local storage.

- Once we get the stateful value of `Answers`, that list is rendered using the `Answer` component and each answer calls the `incrementVoteCount` on click, which in turn animates and increments the vote count for the specific answer, setting the count to local storage and sets the value of `Answers` to the current state.

**What could be improved but could not be done during the time allocated**

- Due to the time constraints, the unit tests are simple and not as comprehensive as they should be. I would have liked to improve on them and simulate votes and clicks using userEvents and mock functions as well.
- I would have preferred to refactor and simplify App.tsx, modularizing more of the functions away from it to a separate utilities file (and creating separate functions for incrementing count, setting local storage).
- I would have liked to refactor my question and answers configuration approach.
- Additional functionalities, such as adding custom answers and removing votes
