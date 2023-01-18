import { DNSArgs } from '../index';
export default function ({ contracts, signer }: DNSArgs<'contracts' | 'signer'>, name: string, { address, resolver, }?: {
    address?: string;
    resolver?: string;
}): Promise<import("ethers").PopulatedTransaction>;
