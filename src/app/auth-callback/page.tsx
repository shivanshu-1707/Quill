import { useRouter, useSearchParams } from "next/navigation";
import { trpc } from "../_trpc/client";

const Page = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const origin = searchParams.get("origin");

  
    const { data, isLoading, error, isSuccess } = trpc.authCallback.useQuery(undefined, {
        retry: true,
        retryDelay: 500,
    });

    if (isSuccess) {
        router.push(origin ? `/${origin}` : "/dashboard");
    }

    if (error?.data?.code === "UNAUTHORIZED") {
        router.push("/sign-in");
    }

    return null;
};

export default Page
