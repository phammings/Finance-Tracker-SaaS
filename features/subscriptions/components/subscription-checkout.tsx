import { useCheckoutSubscription } from "@/features/subscriptions/api/use-checkout-subscription";

import { Button } from "@/components/ui/button";

export const SubscriptionCheckout = () => {
    const checkout = useCheckoutSubscription();

    return (
        <Button
            onClick={() => checkout.mutate()}
            disabled={checkout.isPending}
            variant="ghost"
            size="sm"
        >
            Upgrade
        </Button>
    );
};