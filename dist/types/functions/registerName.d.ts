import { BigNumber } from 'ethers';
import { DNSArgs } from '../index';
import { BaseRegistrationParams } from '../utils/registerHelpers';
type Params = BaseRegistrationParams & {
    value: BigNumber;
};
export default function ({ contracts }: DNSArgs<'contracts'>, name: string, { resolverAddress, value, ...params }: Params): Promise<import("ethers").PopulatedTransaction>;
export {};
