// src/contracts/registry.ts
import { DNSRegistry__factory } from "../generated/factories/DNSRegistry__factory.mjs";
var registry_default = (provider, address) => DNSRegistry__factory.connect(address, provider);
export {
  registry_default as default
};
