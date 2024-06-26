import { useState } from "react";

import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectValue,
    SelectItem
} from "@/components/ui/select";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { FileSearch, Loader2, PieChart, Radar, Target } from "lucide-react";


import { PieVariant } from "@/components/Pie-variant";
import { RadarVariant } from "@/components/Radar-variant";
import { RadialVariant } from "@/components/Radianl-variant";
import { Skeleton } from "@/components/ui/skeleton";
import { usePaywall } from "@/features/subscriptions/hooks/use-paywall";

type Props = {
    data?: {
        name: string;
        value: number;
    }[];
};

export const SpendingPie = ({
    data = [],
}: Props) => {
    const [chartType, setChartType] = useState("pie");
    const { shouldBlock, triggerPaywall } = usePaywall();

    const onTypeChange = (type: string) => {
        if (type !== "pie" && shouldBlock) {
            triggerPaywall();
            return;
        }

        setChartType(type);
    };

    return (
        <Card className="border-none drop-shadow-sm">
            <CardHeader className="flex space-y-2 lg:space-y-0 lg:flex-row lg:items-center justify-between">
                <CardTitle className="text-xl line-clamp-1">
                    Categories
                </CardTitle>
                <Select
                    defaultValue={chartType}
                    onValueChange={onTypeChange}
                >
                    <SelectTrigger className="lg:w-auto h-9 rounded-md px-3">
                        <SelectValue placeholder="Chart type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="pie">
                            <div className="flex items-center">
                                <PieChart className="size-4 mr-2 shrink-0" />
                                <p className="line-clamp-1">
                                    Pie chart
                                </p>
                            </div>
                        </SelectItem>
                        {/* <SelectItem value="radar">
                            <div className="flex items-center">
                                <Radar className="size-4 mr-2 shrink-0" />
                                <p className="line-clamp-1">
                                    Radar chart
                                </p>
                            </div>
                        </SelectItem> */}
                        <SelectItem value="radial">
                            <div className="flex items-center">
                                <Target className="size-4 mr-2 shrink-0" />
                                <p className="line-clamp-1">
                                    Radial chart
                                </p>
                            </div>
                        </SelectItem>
                    </SelectContent>
                </Select>
            </CardHeader>
            <CardContent>
                {data.length === 0 ? (
                    <div className="flex flex-col gap-y-4 items-center justify-center h-[350px] w-full">
                        <FileSearch className="size-6 text-muted-foreground" />
                        <p className="text-muted-foreground text-sm">
                            Not data for this period
                        </p>
                    </div>
                ) : (
                    <>
                        {chartType === "pie" && <PieVariant data={data} />}
                        {/* {chartType === "radar" && <RadarVariant data={data} />} */}
                        {chartType === "radial" && <RadialVariant data={data} />}
                    </>
                )}
            </CardContent>
        </Card>
    );
};

export const SpendingPieLoading = () => {
    return (
        <Card className="border-none drop-shadow-sm">
            <CardHeader className="flex space-y-2 lg:space-y-0 lg:flex-row lg:items-center justify-between">
                <Skeleton className="h8 w-48" />
                <Skeleton className="h-8 lg:w-[120px] w-full" />
            </CardHeader>
            <CardContent>
                <div className="h-[350px] w-full flex items-center justify-between">
                    <Loader2 className="h-6 w-6 text-slate-300 animate-spin" />
                </div>
            </CardContent>
        </Card>
    );
};