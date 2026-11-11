# pipeline-sandbox

A disposable repository for testing [dev-pipeline](https://github.com/brianm-di4u/dev-pipeline)'s merge gate, council and workflows against a real GitHub repo before they reach a real project. It isn't a product, and nothing here is deployed or released for use.

## What's here

- `src/` and `tests/`: a few tiny functions with tests, there only so the gate has code to classify, verify and review.
- `.pipeline/`, `.github/` and `pipeline.config.json`: the pipeline as a project gets it from dev-pipeline's template.
- `docs/`: the template's planning docs, mostly unfilled on purpose.
- `evals/review/`: where planted-bug cases go, for checking that the council finds them.

Expect odd branches and PRs, such as `e2e/freshness-*`. Those are end-to-end tests of the gate, run by the pipeline itself. Some of them merge, so main's history has `Freshness e2e: ...` commits that add throwaway files and later remove them.

## Running the checks

```bash
node .pipeline/verify.mjs full
```

That's what CI runs. There are no dependencies to install.

## Security and licence

See [SECURITY.md](SECURITY.md) for how to report a vulnerability. MIT licensed: see [LICENSE](LICENSE).
