# Testing component rendering

## React testing library

Make tests resemble the way software is used, avoid implementation focus, avoid focus on DOM structure, CSS classes, ids, etc.

- `render` returns the container so you can work with the rendered DOM
- `container.getByLabelText` gets a form field by label text (as a user would)
- `container.getByText` finds parts of the page by contained text
- `container.getByTitle` finds parts of the page by title (if it has one)
- `container.getByTestId` finds parts by `data-<testId>` (last resort)
- Can use exact string, regex, or finder function (boolean result)

`DateSlider` shows

- Selected date (label Earth Day)
- Slider with range on either end
- Slider position on range

### Pause to think

His code depends on certain things that seem to have changed in React land quite a while ago. I'm seeing posts from 2016 suggesting things he uses were deprecated then and are not supported now. I'm also seeing a lot of npm outdated warnings when installing his code. It does run with the old versions, but not with newer React.

I need to decide if I want to switch old versions and continue the course, figure out how to make his code work with newer React, or look for other resources. He says a lot of good things about testing. I think he has a lot of good points to make. I am concerned about the fact that what he's building doesn't run in current React land.

Some if it seems to be due to Redux, so maybe sideline this for a while and do a Redux course. (But, the Redux course is React 16 too. Why are courses from mid-2021 using 16 when 17 was out in early Q4 2020? Maybe because 17 was more laying groundwork for 18 with no major developer facing changes. Though Redux was already changing too.)

Need to think about this.

(later)

Redux has changed significantly, based on what I'm seeing. I'm going to sideline this and use a different Redux resource to learn about Redux.

**COMMIT: 2.0.1 - (code not working) Set this aside for now because it does not work with modern Redux/React; focus on and modern React testing sources instead**
