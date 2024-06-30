/**
 * @type {import('semantic-release').GlobalConfig}
*/

module.exports = {
  branches: ["release"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    [
      "@semantic-release/github",
      {
        assets: [
          "./src-tauri/target/release/**/*.{msi,exe,app,dmg,deb,AppImage}",
        ],
      },
    ],
    "@semantic-release/git",
  ],
};
