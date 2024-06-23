# Contributing

If you would like to contribute by developing a new feature or by fixing bugs/errors, follow these steps. If you're not sure on what to contribute, feel free to choose from `Pending Features & Fixes` and add it as a github issue.

- Fork this repository;
- Create a new feature/bugfix branch based on the `main` branch;
- Install dependencies by using `npm`
- Implement your changes and ensure there are no errors.
- Commit your changes, please try to follow `Commit Message Guidelines`.
- Submit a PR for review, that's it!

## Pending Features & Fixes

- **Sound notification**: Sound notification on break start/end
- **Code optimization**: Includes refactoring, improving SEO, restructuring of directories, optimation using react features, etc
- **Statistics tracking**: Using cookies to store usage records & derive statistics from it
- **Help/Info page**: Create a page explaining pomodoro technique and how to use this platform


## Commit Message Guidelines

- Final format for a commit message:

```bash
<type>([optional scope]): <description>  # subject

[optional body]
```

### Scope

- Scope of the changes included in the commit.
- It can be:
    - `global` or simply omit the scope
        ```bash
        <type>: <description>
        ...
        ```
    - `web`
    - `native`
    - or any `app` or `package`

### Message Subject

- Imperative Mood: Create commit messages in the imperative mood. Start with a verb to indicate what the commit does. For example:

    Use `fix: Fix bug #67` than `fix: Fixed bug #67`

- Short and Summarized: Try to fit the subject line inside 50 characters. Avoid trailing period and unneccessary words/symbols.

### Type and Message Body

- A type preifx in the subject line can be used to represent type of the changes included in the commit. Some of the commonly used types are:

    - `feat:` : To summarize a new feature in the codebase.

    - `fix:` : To address a fix to the codebase.

    - `build:`, `chore:`, `style:`, `refactor:` are some other examples.

- A body can be added to the message to include detailed explanations in the commit.

- Body is added by leaving a blank line after the subject line.

- Try to use multple lines of body, where each line does not exceed 72 characters.

------

Thank you for contributing! :heart:
