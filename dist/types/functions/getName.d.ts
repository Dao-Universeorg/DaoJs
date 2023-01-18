import { DNSArgs } from '../index';
declare const _default: {
    raw: ({ contracts }: DNSArgs<"contracts">, address: string) => Promise<{
        to: string;
        data: string;
    }>;
    decode: ({ contracts }: DNSArgs<"contracts">, data: string, address: string) => Promise<{
        name: undefined;
        match?: undefined;
        reverseResolverAddress?: undefined;
        resolverAddress?: undefined;
    } | {
        name: any;
        match: boolean;
        reverseResolverAddress: any;
        resolverAddress: any;
    }>;
};
export default _default;
