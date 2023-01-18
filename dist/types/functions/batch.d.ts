import { BatchFunctionResult, DNSArgs, RawFunction } from '../index';
declare const _default: {
    raw: ({ multicallWrapper }: DNSArgs<"multicallWrapper">, ...items: BatchFunctionResult<RawFunction>[]) => Promise<{
        to: string;
        data: string;
    }>;
    decode: ({ multicallWrapper }: DNSArgs<"multicallWrapper">, data: string, ...items: BatchFunctionResult<RawFunction>[]) => Promise<any[] | undefined>;
};
export default _default;
