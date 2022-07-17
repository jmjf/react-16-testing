# Testing component rendering

## Course intro

Example application -> Mars rovers images application

- Will add tests to existing application
- Search form for viewing images from Mars rovers
  - Earth day (slider)
  - Rover selector (checkboxes)
  - Camera selector (select)
  - Images (grid)
  - Uses NASA Mars rovers images API

## Why test (and when not to test)

Confirm the program

- Conforms to design
- Design is correct (does what it's supposed to do)
- Document expected and verified behavior (change with less risk--tests identify breaks)

React does two things

- Renders user interfaces
- Manages user interface events
- Testing focuses on user interface logic
  - Do not put app logic in React components (belong in backend)

Tests bring benefits, but also costs; balance in all things

- Remove any tests that don't add value
- Time spent on testing has an opportunity cost; choose wisely
- Code (including tests) add complexity
- Tests slow the feedback loop
  - Technically, he's right in some cases, but I'd argue not always
  - Tests' repeatable, code-driven test setup can be faster than clicking through the browser to set up a test condition
  - Tests reduce risk I'll forget to test something, in which case I might not find out about a problem until hours, days, or weeks later
  - For these and similar reasons, if tests are run regularly, net cost may be less in the long run
- False negatives
  - Tests age and need to be maintained as code changes
  - Testing logic instead of implementation can help reduce this risk
- Refactoring friction
  - Tests make assumptions
  - Refactoring may break those assumptions
  - Tests catch those breaks (safer)
  - He suggests that tests would change with refactoring, but if it's true refactoring (interface remains unchanged) and tests reduce assumptions about implementation, this issue is less of a problem

## Test environment setup

Setting it up can be complex

- Many people use tools like create-react-app

- `npx create-react-app . --template typescript`
  - CRA didn't like my `notes` directory
  - I created in a subdirectory, then copied everything but README to my working directory
- `npm start`
  - Confirm the default app runs
- `npm test`
  - See default tests run
- Look at `App.test.js`
  - Note that the test doesn't actually test that the element is a link
  - Never trust a test until you've seen it fail
  - We should be able to insert a `.not` in the `expect` and see the test fail and the error message
  - Revert change

## Visual verification

Test logic and expected results, not implementation.

- My interpretation is test based on known inputs and known expected results when testing logic

Storybook lets us work with components in isolation.

- `npx -p @storybook/cli sb init`
- `npm run storybook` -- launches server on `localhost` (port 6006 for me)
- Sets up example components by default in `src/stories`
  - For example, in `Button.stories.tsx`, base button is exported as default export; different versions are also exported (primary, etc.)
- Lets us render component outside the application to see it working
  - Looks at `lonelyplanet.github.io` ui example

### Add date slider component to Storybook

He's starting from a semi-completed app that doesn't match the demo files or anything he's described so far. I'm jumping to the demo file for the next module of the course (module 3, video is in module 2) and using it to set up a directory structure and files I need. Before I start this, let me...

**COMMIT: 1.0.1 - notes on intro and getting started section (up to 4:30 into Visual Verification)**

- Add subdirs under `src` -- `demos`, `io`, `pages`, `services`, `widgets`
- Get `DateSlider` pieces from the course files
- Copy from `src/services` because `DateSlider` wants components from there
  - I see it requires moment, so `npm install moment`
- Convert JS to TS
  - In `services/sols.ts`, moment().add()`says it takes a`DurationInputArg1` (bad name), which then gets a complaint because the formula subtracts 1, which means only a subset of the type values are actually allowed
  - Looks like `MomentInput` everywhere, which is an almost everything type
  - In `DateSlider.tsx`, props interface, React types on various bits; needed to use `toString()` on `earth_date` in JSX because it was a MomentInput type

So, now I can start following the videos again. If I ever build a course, be sure to lay the stage properly so people aren't wondering where all the stuff you're using came from.

- In `src/widgets` create `DateSlider.stories.tsx`
- Import `DateSlider` and `'bootstrap/dist/css/bootstrap.css'`
- Set up default export for the component definition (Storybook convention)
- Set up first "story" (export)
  - Stories return a JSX element
  - `Default` is the date slider at a specific date
    - Use Storybook's `action` stub for `onDateChange` prop
- `npm run storybook` to start SB
  - And it looks like I need to do some more cleanup
    - Copy `main.js` from exercise files to `/.storybook`
    - Copy `public` from files to `./public`
    - Add to `/.storybook/main.js` -- `core: { builder: "webpack5" },`
    - May also need `npx sb upgrade`
    - Bootstrap CSS not found -- `npm install bootstrap@^4.0.0` (because he's using 4.4.1 -- gets me 4.6.1)
  - After all that, looks like it's kind of working; the slider doesn't move, but is kicking events that make sense
- Now add a second story, `DifferentDate`
  - Same as first story, but use a different date for `earth_date`
  - Look at it in SB and see it starts from the expected date

So, when you need to look at components and see if they behave as expected, you can use SB to test them outside the application.

**COMMIT 1.0.2 - get Storybook working to demo checking that a component looks and basically behaves as expected visually**
