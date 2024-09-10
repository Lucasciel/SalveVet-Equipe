/** @type {import('next').NextConfig} */

import withPlugins from 'next-compose-plugins';
import withSvgr from 'next-svgr';

const nextConfig = {};

//export default nextConfig;


export default withPlugins(
    [
      withSvgr,
    ],
    nextConfig
  );