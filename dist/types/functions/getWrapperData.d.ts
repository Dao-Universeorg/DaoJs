import { BigNumber } from 'ethers';
import { DNSArgs } from '../index';
declare const _default: {
    raw: ({ contracts }: DNSArgs<"contracts">, name: string) => Promise<{
        to: string;
        data: string;
    }>;
    decode: ({ contracts }: DNSArgs<"contracts">, data: string) => Promise<{
        fuseObj: import("../utils/fuses").CurrentFuses;
        expiryDate: Date;
        rawFuses: BigNumber;
        owner: any;
    } | undefined>;
};
export default _default;
