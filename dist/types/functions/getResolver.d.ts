import { DNSArgs } from '../index';
declare const _default: {
    raw: ({ contracts }: DNSArgs<"contracts">, name: string) => Promise<{
        to: string;
        data: string;
    }>;
    decode: ({ contracts }: DNSArgs<"contracts">, data: string) => Promise<any>;
};
export default _default;
