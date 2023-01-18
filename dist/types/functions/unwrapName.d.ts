import { DNSArgs } from '../index';
export default function ({ contracts, signer }: DNSArgs<'contracts' | 'signer'>, name: string, { newController, newRegistrant, }: {
    newController: string;
    newRegistrant?: string;
}): Promise<import("ethers").PopulatedTransaction>;
