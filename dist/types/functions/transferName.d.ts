import { ethers } from 'ethers';
import { DNSArgs } from '../index';
export default function ({ contracts, signer }: DNSArgs<'contracts' | 'signer'>, name: string, { newOwner, contract, reclaim, }: {
    newOwner: string;
    contract: 'registry' | 'nameWrapper' | 'baseRegistrar';
    reclaim?: boolean;
}): Promise<ethers.PopulatedTransaction>;
