import { TransformOptions } from 'esbuild';
import { Except } from 'type-fest';
declare type Filter = string | RegExp;
declare type LoaderOptions = Except<TransformOptions, 'sourcemap' | 'sourcefile'>;
declare type MinifyPluginOptions = Except<TransformOptions, 'sourcefile'> & {
    include?: Filter | Filter[];
    exclude?: Filter | Filter[];
    css?: boolean;
};
export { LoaderOptions, MinifyPluginOptions, };
