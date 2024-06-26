import { InferResponseType } from "hono";
import { useMutation } from "@tanstack/react-query";

import { client } from "@/lib/hono";
import { toast } from "sonner";

type ResponseType = InferResponseType<typeof client.api.subscriptions.checkout["$post"], 200>;

export const useCheckoutSubscription = () => {

    const mutation = useMutation<
        ResponseType,
        Error
    >({
        mutationFn: async () => {
            const response = await client.api.subscriptions.checkout.$post();

            if (!response.ok) {
                throw Error("Faild to create create URL");
            }

            return await response.json();
        },
        onSuccess: ({ data }) => {
            window.location.href = data;
        },
        onError: () => {
            toast.error("Faild to create create URL");
        },
    });

    return mutation;
};