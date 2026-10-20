# DoneState review fixture

This public repository contains synthetic sample data for exercising the DoneState app review workflow. It contains no customer data or credentials.

Run `npm test`. The initial invoice fixture deliberately contains an incorrect total. The review task is to correct `fixtures/invoice.json` to total **55**, preserve the tests, and open a pull request. Independent verification checks the exact PR commit and sealed JSON/file boundary requirements. The PR is not merged automatically.
