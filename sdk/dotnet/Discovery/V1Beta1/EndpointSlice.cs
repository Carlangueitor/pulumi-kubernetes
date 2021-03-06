// *** WARNING: this file was generated by the Pulumi Kubernetes codegen tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Kubernetes.Discovery.V1Beta1
{
    /// <summary>
    /// EndpointSlice represents a subset of the endpoints that implement a service. For a given
    /// service there may be multiple EndpointSlice objects, selected by labels, which must be
    /// joined to produce the full set of endpoints.
    /// </summary>
    public partial class EndpointSlice : KubernetesResource
    {
        /// <summary>
        /// addressType specifies the type of address carried by this EndpointSlice. All addresses
        /// in this slice must be the same type. This field is immutable after creation. The
        /// following address types are currently supported: * IPv4: Represents an IPv4 Address. *
        /// IPv6: Represents an IPv6 Address. * FQDN: Represents a Fully Qualified Domain Name.
        /// </summary>
        [Output("addressType")]
        public Output<string> AddressType { get; private set; } = null!;

        /// <summary>
        /// APIVersion defines the versioned schema of this representation of an object. Servers
        /// should convert recognized schemas to the latest internal value, and may reject
        /// unrecognized values. More info:
        /// https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
        /// </summary>
        [Output("apiVersion")]
        public Output<string> ApiVersion { get; private set; } = null!;

        /// <summary>
        /// endpoints is a list of unique endpoints in this slice. Each slice may include a maximum
        /// of 1000 endpoints.
        /// </summary>
        [Output("endpoints")]
        public Output<ImmutableArray<Types.Outputs.Discovery.V1Beta1.Endpoint>> Endpoints { get; private set; } = null!;

        /// <summary>
        /// Kind is a string value representing the REST resource this object represents. Servers
        /// may infer this from the endpoint the client submits requests to. Cannot be updated. In
        /// CamelCase. More info:
        /// https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
        /// </summary>
        [Output("kind")]
        public Output<string> Kind { get; private set; } = null!;

        /// <summary>
        /// Standard object's metadata.
        /// </summary>
        [Output("metadata")]
        public Output<Types.Outputs.Meta.V1.ObjectMeta> Metadata { get; private set; } = null!;

        /// <summary>
        /// ports specifies the list of network ports exposed by each endpoint in this slice. Each
        /// port must have a unique name. When ports is empty, it indicates that there are no
        /// defined ports. When a port is defined with a nil port value, it indicates "all ports".
        /// Each slice may include a maximum of 100 ports.
        /// </summary>
        [Output("ports")]
        public Output<ImmutableArray<Types.Outputs.Discovery.V1Beta1.EndpointPort>> Ports { get; private set; } = null!;


        /// <summary>
        /// Create a EndpointSlice resource with the given unique name, arguments, and options.
        /// </summary>
        /// <param name="name">The unique name of the resource</param>
        /// <param name="args">The arguments used to populate this resource's properties</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public EndpointSlice(string name, Types.Inputs.Discovery.V1Beta1.EndpointSliceArgs? args = null, CustomResourceOptions? options = null)
            : base("kubernetes:discovery.k8s.io/v1beta1:EndpointSlice", name, SetAPIKindAndVersion(args), MakeOptions(options))
        {
        }

        internal EndpointSlice(string name, ImmutableDictionary<string, object?> dictionary, CustomResourceOptions? options = null)
            : base("kubernetes:discovery.k8s.io/v1beta1:EndpointSlice", name, dictionary, options)
        {
        }

        private static ResourceArgs SetAPIKindAndVersion(Types.Inputs.Discovery.V1Beta1.EndpointSliceArgs? args)
        {
            args ??= new Types.Inputs.Discovery.V1Beta1.EndpointSliceArgs();
            args.ApiVersion = "discovery.k8s.io/v1beta1";
            args.Kind = "EndpointSlice";
            return args;
        }

        private static CustomResourceOptions? MakeOptions(CustomResourceOptions? options)
        {
            return options;
        }

        /// <summary>
        /// Get an existing EndpointSlice resource's state with the given name and ID.
        /// </summary>
        /// <param name="name">The unique name of the resulting resource.</param>
        /// <param name="id">The unique provider ID of the resource to lookup.</param>
        /// <param name="options">A bag of options that control this resource's behavior</param>
        public static EndpointSlice Get(string name, Input<string> id, CustomResourceOptions? options = null)
        {
            return new EndpointSlice(name, default(Types.Inputs.Discovery.V1Beta1.EndpointSliceArgs),
                CustomResourceOptions.Merge(options, new CustomResourceOptions {Id = id}));
        }
    }
}
