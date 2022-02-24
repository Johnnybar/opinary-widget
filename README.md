**Opinary Poll Widget App.**

Create your own poll and vote on configurable questions.

**Instructions:**
To start the app run `npm i`, followed by `npm start`. Run all tests with `npm test`.

Run `npm run build:widget` to build the widget and test its functionality by directly opening up either `static-page-test-1.html` or `static-page-test-2.html`

The widget was bundled using Parcel and can be embedded simply by adding the following code to the body of any HTML page
and editing the div data-questions attribute, like so:

```

<div id="opinary-widget"
    data-questions='{
    "question": "How did you like the Opinary test?" , "answers" : ["It was great and so challenging", "Not bad, but you can improve", "It was a nightmare, never again" ], "questionId": "2"  }'>
  </div>
   <script src="./dist/index.js"></script>
    <link rel="stylesheet" href="./dist/index.css">
```

** Make sure that "questionId" is unique to each widget to prevent votes being stored and counted simultaneously for multiple polls.**

**Summary of technical choices:**

I used TypeScript, React, Sass, Node.js and Parcel to create a functioning poll widget

The widget works by using the provided questions in the data attribute and linking to the bundled js and css files in the `dist` folder.

Since it should be possible to embed the widget in a static page, which doesn't leave a lot of flexibility in terms of configuration, I decided on passing the question and answers as a data-attribute.

Each Answer object is modified when the app mounts (in the `useEffect` hook) to contain an 'exactId', a prop comprising the questionId (provided in the data-questions data attribute) with the actual answer's index, to make sure counts for each question are unique when saved to local storage and make sure to avoid overwriting counts (for instance - if multiple polls are added to page, setting by question index is no longer reliable)

Once the stateful value of `Answers` exists, that list is rendered using the `Answer` component, composed of a React-Bootstrap `Card` component, and calls the `incrementVoteCount` on click, which in turn animates and increments the vote count for the specific answer, setting the count to local storage and sets the value of `Answers` to the corrent state.

**What could be improved but could not be done during the time allocated**

- Due to the time constraints, the unit tests are pretty standard and I would have liked to improve on them and simulate votes and clicks as well.
- Currently, users are responsible for adding a question id which is not optimal, this should be automated
- I began attempting to remove identical polls from page using the isEqualNode method of the Node interface but encountered bugs which I didn't have the time to fix
- I would have preferred to refactor and modularize more of the functions away from App.tsx in a separate utilities file (and creating separate functions for incrementing count, setting local storage )
- I believe more error handling could have been added to control proper data-attribute setting
- I would have compartmentalized the app to more, smaller components
- I would have preferred a more user-friendly way to configure questions
- Additional styling
