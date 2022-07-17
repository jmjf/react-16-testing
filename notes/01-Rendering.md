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

He's starting from a semi-completed app that doesn't match the demo files or anything he's described so far. I'm jumping to the last demo file and using it to set up a directory structure. Before I start this, let me...

**COMMIT: 1.0.1 - notes on intro and getting started section (up to 4:30 into "Visual Verification")**
