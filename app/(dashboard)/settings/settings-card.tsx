"use client";

import { cn } from "@/lib/utils";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export const SettingsCard = () => {
    const connectedBank = null;

    return (
        <Card className="border-none drop-shadow-sm">
            <CardHeader>
                <CardTitle className="text-xl line-clamp-1">
                    Settings
                </CardTitle>
            </CardHeader>
            <CardContent>
                <Separator />
                <div className="flex flex-col gap-y-2 lg:flex-row items-center py-4">
                    <p className="text-sm font-medium w-full lg:w-[16.5rem]">
                        Bank Account
                    </p>
                    <div className="w-full flex items-center justify-between">
                        <div className={cn(
                            "text-sm truncate flex items-center",
                            !connectedBank && "text-muted-foreground"
                        )}>
                            {connectedBank
                                ? "Bank account connected"
                                : "No bank account connected"
                            }
                        </div>
                        <Button
                            size="sm"
                            variant="ghost"
                        >
                            Connect
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};