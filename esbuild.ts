import esbuild from "esbuild";

const defaultConfig = {
  minify: true,
  bundle: true,
  entryPoints: ["src/index.ts"],
};

esbuild.build({
  ...defaultConfig,
  format: "cjs",
  outfile: "./dist/index.js",
});

esbuild.build({
  ...defaultConfig,
  format: "esm",
  outfile: "./dist/index.mjs",
});
