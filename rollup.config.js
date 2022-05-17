import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import postcss from 'rollup-plugin-postcss'
import dts from 'rollup-plugin-dts'
import { terser } from 'rollup-plugin-terser'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import license from 'rollup-plugin-license'

const input = 'src/index.ts'
const packageJson = require('./package.json')
const fullYear = new Date().getFullYear()

const banner = `${packageJson.name} - ${packageJson.version}
  Author : ${packageJson.author}
  Copyright (c) ${(fullYear !== 2022 ? '2022,' : '')} ${fullYear} to ${packageJson.author}, released under the ${packageJson.license} license.
  ${packageJson.repository.url}`

export default [
  {
    input,
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    external: ['react', 'react-dom'],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      postcss(),
      license({
        banner,
      }),
      terser(),
    ],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: packageJson.types, format: 'esm' }],
    plugins: [dts()],
    external: [/\.css$/],
  },
]

// export default [{
//   input,
//   output: [{
//     file: packageJson.main,
//     format: 'cjs',
//     sourcemap: true,
//   }],
//   plugins: [
//     external(),
//     resolve(),
//     commonjs(),
//     typescript({ tsconfig: './tsconfig.json' }),
//     postcss(),
//     license({
//       banner,
//     }),
//   ],
// }, {
//   input,
//   output: [{
//     file: minifyExtension(packageJson.main),
//     format: 'cjs',
//     sourcemap: true,
//   }],
//   plugins: [
//     external(),
//     resolve(),
//     commonjs(),
//     typescript({ tsconfig: './tsconfig.json' }),
//     postcss(),
//     license({
//       banner,
//     }),
//     uglify(),
//   ],
// }, {
//   input,
//   output: {
//     file: packageJson.module,
//     format: 'es',
//     exports: 'named',
//     sourcemap: true,
//   },
//   plugins: [
//     external(),
//     resolve(),
//     commonjs(),
//     typescript({ tsconfig: './tsconfig.json' }),
//     postcss(),
//     license({
//       banner,
//     }),
//   ],
// }, {
//   input,
//   output: {
//     file: minifyExtension(packageJson.module),
//     format: 'es',
//     exports: 'named',
//     sourcemap: true,
//   },
//   plugins: [
//     external(),
//     resolve(),
//     commonjs(),
//     typescript({ tsconfig: './tsconfig.json' }),
//     postcss(),
//     license({
//       banner,
//     }),
//     terser(),
//   ],
// },{
//     input,
//     output: {
//       file: 'dist/react-3d-scroll-slider.min.js',
//       format: 'umd',
//       name: 'React3DScrollSlider',
//     },
//     plugins: [
//       external(),
//       resolve(),
//       commonjs(),
//       typescript({ tsconfig: './tsconfig.json' }),
//       postcss(),
//       license({
//         banner,
//       }),
//       terser(),
//     ],
//   }, {
//   input: 'dist/esm/types/index.d.ts',
//   output: [{ file: packageJson.types, format: 'umd' }],
//   plugins: [dts()],
//   external: [/\.css$/],
// }]
