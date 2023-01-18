import { DNSArgs } from '..';
declare const _default: {
    raw: ({ contracts }: DNSArgs<"contracts">, name: string) => Promise<{
        to: string;
        data: string;
    }>;
    decode: ({ contracts }: DNSArgs<"contracts">, data: string) => Promise<boolean | undefined>;
};
export default _default;
