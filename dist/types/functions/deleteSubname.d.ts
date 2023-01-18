import { ethers } from 'ethers';
import { DNSArgs } from '../index';
type Args = {
    contract: 'registry' | 'nameWrapper';
};
export default function ({ contracts, signer }: DNSArgs<'contracts' | 'signer' | 'getExpiry'>, name: string, { contract }: Args): Promise<ethers.PopulatedTransaction>;
export {};
