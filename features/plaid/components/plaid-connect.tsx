"use client";

import { useState } from "react";
import { useMount } from "react-use";
import { usePlaidLink } from "react-plaid-link";

import { Button } from "@/components/ui/button";
import { useCreateLinkToken } from "@/features/plaid/api/use-create-link-token";
import { useExchangePublicToken } from "@/features/plaid/api/use-exchange-public-token";

import { usePaywall } from "@/features/subscriptions/hooks/use-paywall";

export const PlaidConnect = () => {
    const [token, setToken] = useState<string | null>(null);

    const createLinkToken = useCreateLinkToken();
    const exchangePublicToken = useExchangePublicToken();
    const { shouldBlock, triggerPaywall, isLoading } = usePaywall();

    useMount(() => {
        createLinkToken.mutate(undefined, {
            onSuccess: ({ data }) => {
                setToken(data);
            },
        });
    });

    const plaid = usePlaidLink({
        token: token,
        onSuccess: (publicToken) => {
            exchangePublicToken.mutate({
                publicToken,
            });
        },
        env: "sandbox",
    });



    const onClick = () => {
        if (shouldBlock) {
            triggerPaywall();
            return;
        }

        plaid.open();
    };

    const isDisabled =
        !plaid.ready ||
        exchangePublicToken.isPending ||
        isLoading

    return (
        <Button
            onClick={onClick}
            disabled={isDisabled}
            size="sm"
            variant="ghost"
        >
            Connect
        </Button>
    )
}