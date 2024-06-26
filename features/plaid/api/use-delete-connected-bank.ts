import { InferResponseType } from "hono";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { client } from "@/lib/hono";
import { toast } from "sonner";

type ResponseType = InferResponseType<typeof client.api.plaid["connected-bank"]["$delete"], 200>;

export const useDeleteConnectedBank = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation<
        ResponseType,
        Error
    >({
        mutationFn: async () => {
            const response = await client.api.plaid["connected-bank"].$delete();

            if (!response.ok) {
                throw Error("Faild to delete connected bank");
            }

            return await response.json();
        },
        onSuccess: () => {
            toast.success("Connected bank deleted");
        },
        onError: () => {
            toast.error("Faild to delete connected bank");
            // connected-bank
            queryClient.invalidateQueries({ queryKey: ["connected-bank"] });
            // summary
            queryClient.invalidateQueries({ queryKey: ["summary"] });
            // transactions
            queryClient.invalidateQueries({ queryKey: ["transactions"] });
            // accounts
            queryClient.invalidateQueries({ queryKey: ["accounts"] });
            // categories
            queryClient.invalidateQueries({ queryKey: ["categories"] });
        },
    });

    return mutation;
};