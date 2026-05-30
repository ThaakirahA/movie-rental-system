# Branch Protection Rules

## Purpose

Branch protection rules help maintain code quality and project stability by preventing unreviewed or failing code from being merged into the main branch.

## Configured Rules

### Require Pull Request Reviews
All changes must be reviewed before being merged.

Benefits:
- Improves code quality
- Encourages collaboration
- Reduces bugs

### Require Status Checks to Pass

All GitHub Actions tests must pass before merging.

Benefits:
- Prevents broken code from reaching production
- Enforces automated quality checks
- Ensures all tests pass

### Disable Direct Pushes

Developers cannot push directly to the main branch.

Benefits:
- Protects production-ready code
- Forces proper pull request workflow
- Improves traceability

## Conclusion

These rules help enforce a safe and reliable development workflow while supporting CI/CD best practices.
