"use client";

import { useState } from "react";
import { useMount } from "react-use";
import { usePlaidLink } from "react-plaid-link";

import { Button } from "@/components/ui/button";
import { useCreateLinkToken } from "@/features/plaid/api/use-create-link-token";
import { useExchangePublicToken } from "@/features/plaid/api/use-exchange-public-token";

export const PlaidConnent = () => {
    const [token, setToken] = useState<string | null>(null);
    
    const createLinkToken = useCreateLinkToken();
    const exchangePublicToken = useExchangePublicToken();

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

    const isDisabled =
        !plaid.ready ||
        exchangePublicToken.isPending

    const onClick = () => {
        plaid.open();
    };

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