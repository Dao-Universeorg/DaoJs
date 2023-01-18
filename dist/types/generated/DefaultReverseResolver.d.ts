import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export interface DefaultReverseResolverInterface extends utils.Interface {
    functions: {
        "dns()": FunctionFragment;
        "name(bytes32)": FunctionFragment;
        "setName(bytes32,string)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "dns" | "name" | "setName"): FunctionFragment;
    encodeFunctionData(functionFragment: "dns", values?: undefined): string;
    encodeFunctionData(functionFragment: "name", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "setName", values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "dns", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setName", data: BytesLike): Result;
    events: {};
}
export interface DefaultReverseResolver extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: DefaultReverseResolverInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        dns(overrides?: CallOverrides): Promise<[string]>;
        name(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        setName(node: PromiseOrValue<BytesLike>, _name: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    dns(overrides?: CallOverrides): Promise<string>;
    name(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    setName(node: PromiseOrValue<BytesLike>, _name: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        dns(overrides?: CallOverrides): Promise<string>;
        name(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        setName(node: PromiseOrValue<BytesLike>, _name: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        dns(overrides?: CallOverrides): Promise<BigNumber>;
        name(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        setName(node: PromiseOrValue<BytesLike>, _name: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        dns(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        name(arg0: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setName(node: PromiseOrValue<BytesLike>, _name: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
