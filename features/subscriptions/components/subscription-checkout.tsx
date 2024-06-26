import { useCheckoutSubscription } from "@/features/subscriptions/api/use-checkout-subscription";

import { Button } from "@/components/ui/button";
import { useGetSubscription } from "@/features/subscriptions/api/use-get-subscription";

export const SubscriptionCheckout = () => {
    const checkout = useCheckoutSubscription();
    const {
        data: subscription,
        isLoading: isLoadingSubscription,
    } = useGetSubscription();

    return (
        <Button
            onClick={() => checkout.mutate()}
            disabled={checkout.isPending || isLoadingSubscription}
            variant="ghost"
            size="sm"
        >
            {subscription ? "Manage" : "Upgrade"}
        </Button>
    );
};