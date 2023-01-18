import { DNSArgs } from '..';
export default function ({ getOwner, provider }: DNSArgs<'getOwner' | 'provider'>, name: string): Promise<boolean>;
