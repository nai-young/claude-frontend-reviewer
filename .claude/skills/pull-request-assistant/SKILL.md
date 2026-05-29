# Pull Request Assistant

Use this skill whenever changes are ready to be merged and a Pull Request needs to be created.

## Goals

- Generate concise and professional PR titles
- Write clear PR descriptions
- Summarize technical changes
- Highlight risks and breaking changes
- Improve reviewer experience

## Instructions

Analyze:

- Changed files
- Commit messages
- Git diff

Then generate:

### Title

Follow Conventional Commit style when possible.

Examples:

- feat: add Claude review workflow
- fix: handle empty API responses
- refactor: simplify review dashboard state management
- docs: improve project documentation

### Description

Use this template:

## Summary

Brief explanation of the change.

## Changes

- Change 1
- Change 2
- Change 3

## Testing

- [ ] Unit tests
- [ ] Manual testing completed

## Notes

Additional information for reviewers.

### Review Optimization

- Keep descriptions concise
- Explain why the change was made
- Mention potential risks
- Mention follow-up work if needed

### Output Format

Provide:

1. Optimized PR title
2. Optimized PR description
3. Suggested labels
4. Suggested reviewers
