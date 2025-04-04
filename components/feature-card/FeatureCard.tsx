import { Card, CardContent } from "@/components/ui/card";
import { Paperclip } from "lucide-react";

function FeatureCard({ title, description }) {
    return (
        <Card>
            <CardContent className="pt-6">
                <div className="flex flex-col justify-center space-y-4">
                    <Paperclip className="w-10 h-10 text-black" />
                    <div className="space-y-2">
                        <h3 className="text-xl font-bold">{title}</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            {description}
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export default FeatureCard;
