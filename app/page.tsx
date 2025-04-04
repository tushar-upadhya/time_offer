import FeaturesSection from "@/components/features-section/FeaturesSection";
import HeroSection from "@/components/hero-section/HeroSection";
import React from "react";

const HomePage: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1">
                <HeroSection />
                <FeaturesSection />
            </main>
        </div>
    );
};

export default HomePage;
