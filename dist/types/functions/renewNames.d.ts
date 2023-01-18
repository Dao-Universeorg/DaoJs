import { BigNumber, BigNumberish } from 'ethers';
import { DNSArgs } from '../index';
import { FuseProps } from '../utils/fuses';
type BaseProps = {
    duration: number;
    value: BigNumber;
};
export declare function renewNameWithData({ contracts }: DNSArgs<'contracts'>, name: string, { duration, value, fuses, wrapperExpiry, }: BaseProps & {
    fuses?: FuseProps;
    wrapperExpiry?: BigNumberish;
}): Promise<import("ethers").PopulatedTransaction>;
export default function ({ contracts }: DNSArgs<'contracts'>, nameOrNames: string | string[], { duration, value }: BaseProps): Promise<import("ethers").PopulatedTransaction>;
export {};
