// src/utils/singleCall.ts
var singleCall_default = async (provider, dnsData, func, ...data) => func.raw(dnsData, ...data).then((rawData) => provider.call({ ...rawData, ccipReadEnabled: true })).catch(() => null).then((ret) => func.decode(dnsData, ret, ...data));
export {
  singleCall_default as default
};
