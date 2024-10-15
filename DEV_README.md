
# DEV NOTES

## About building
- As of v1.1, the bundling is more complex. This is to support smoother and lighter imports.
    - The `"dom-types"` includes JS and TS, and exports the two cases with `"_native"` and `"_camelCase"` endings.
    - The `"dom-types/core"`, `"dom-types/native"` and `"dom-types/camelCase"` only import typing.
- If making changes on the JS side, be sure to verify the imports in `"dist/js.d.ts"` file.
    - If they are not correct, modify the `"rollup.config.js"` file accordingly.
    - Simply set the correct imports into the line that looks like: `const importsStr = 'import { ... } from "./core";\n'`;
