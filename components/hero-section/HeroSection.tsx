import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

function HeroSection() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                Effortless Time Off Management
                            </h1>
                            <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                                Streamline your company's time off requests,
                                approvals, and tracking all in one place.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <Button asChild>
                                <Link href="/sign-up">Get Started</Link>
                            </Button>
                            <Button variant="outline" asChild>
                                <Link href="/features">Learn More</Link>
                            </Button>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="relative w-full max-w-md overflow-hidden rounded-lg shadow-lg">
                            <Image
                                src="/dashboard-screenshot.jpg"
                                alt="Dashboard screenshot"
                                width={600}
                                height={400}
                                priority
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/20 to-transparent h-8">
                                <div className="flex items-center gap-2 px-4 py-2">
                                    <div className="bg-red-500 w-2 h-2 rounded-full" />
                                    <div className="bg-yellow-500 w-2 h-2 rounded-full" />
                                    <div className="bg-green-500 w-2 h-2 rounded-full" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
