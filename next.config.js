/** @type {import('next').NextConfig} */
const path = require("path");

const withNextIntl = require("next-intl/plugin")("./app/i18n/i18n.ts");

const nextConfig = withNextIntl({
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
});

module.exports = nextConfig;
