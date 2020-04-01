// *** WARNING: this file was generated by pulumigen. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
import * as utilities from "../../utilities";

/**
 * SelfSubjectRulesReview enumerates the set of actions the current user can perform within a namespace. The returned list of actions may be incomplete depending on the server's authorization mode, and any errors experienced during the evaluation. SelfSubjectRulesReview should be used by UIs to show/hide actions, or to quickly let an end user reason about their permissions. It should NOT Be used by external systems to drive authorization decisions as this raises confused deputy, cache lifetime/revocation, and correctness concerns. SubjectAccessReview, and LocalAccessReview are the correct way to defer authorization decisions to the API server.
 */
export class SelfSubjectRulesReview extends pulumi.CustomResource {
    /**
     * Get an existing SelfSubjectRulesReview resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): SelfSubjectRulesReview {
        return new SelfSubjectRulesReview(name, undefined, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'kubernetes:authorization.k8s.io/v1beta1:SelfSubjectRulesReview';

    /**
     * Returns true if the given object is an instance of SelfSubjectRulesReview.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SelfSubjectRulesReview {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SelfSubjectRulesReview.__pulumiType;
    }

    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    public readonly apiVersion!: pulumi.Output<string | undefined>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    public readonly metadata!: pulumi.Output<outputs.meta.v1.ObjectMeta | undefined>;
    /**
     * Spec holds information about the request being evaluated.
     */
    public readonly spec!: pulumi.Output<outputs.authorization.v1beta1.SelfSubjectRulesReviewSpec | undefined>;
    /**
     * Status is filled in by the server and indicates the set of actions a user can perform.
     */
    public /*out*/ readonly status!: pulumi.Output<outputs.authorization.v1beta1.SubjectRulesReviewStatus | undefined>;

    /**
     * Create a SelfSubjectRulesReview resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SelfSubjectRulesReviewArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SelfSubjectRulesReviewArgs | SelfSubjectRulesReviewState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as SelfSubjectRulesReviewState | undefined;
            inputs["apiVersion"] = state ? state.apiVersion : undefined;
            inputs["kind"] = state ? state.kind : undefined;
            inputs["metadata"] = state ? state.metadata : undefined;
            inputs["spec"] = state ? state.spec : undefined;
            inputs["status"] = state ? state.status : undefined;
        } else {
            const args = argsOrState as SelfSubjectRulesReviewArgs | undefined;
            if (!args || args.spec === undefined) {
                throw new Error("Missing required property 'spec'");
            }
            inputs["apiVersion"] = (args ? args.apiVersion : undefined) || "authorization.k8s.io/v1beta1";
            inputs["kind"] = (args ? args.kind : undefined) || "SelfSubjectRulesReview";
            inputs["metadata"] = args ? args.metadata : undefined;
            inputs["spec"] = args ? args.spec : undefined;
            inputs["status"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        const aliasOpts = { aliases: [{ type: "kubernetes:authorization.k8s.io/v1:SelfSubjectRulesReview" }] };
        opts = opts ? pulumi.mergeOptions(opts, aliasOpts) : aliasOpts;
        super(SelfSubjectRulesReview.__pulumiType, name, inputs, opts);
    }
}

/**
 * The set of arguments for constructing a SelfSubjectRulesReview resource.
 */
export interface SelfSubjectRulesReviewArgs {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     */
    readonly apiVersion?: pulumi.Input<string>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     */
    readonly kind?: pulumi.Input<string>;
    readonly metadata?: pulumi.Input<inputs.meta.v1.ObjectMeta>;
    /**
     * Spec holds information about the request being evaluated.
     */
    readonly spec: pulumi.Input<inputs.authorization.v1beta1.SelfSubjectRulesReviewSpec>;
}
