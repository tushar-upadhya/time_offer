import Link from "next/link";

function Header() {
    return (
        <header className="px-4 lg:px-6 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center">
                <span className="text-2xl font-bold">TimeOffer</span>
            </Link>
            <nav className="flex gap-4 sm:gap-6">
                <Link
                    href="/features"
                    className="text-sm font-medium hover:underline underline-offset-4"
                >
                    Features
                </Link>
                <Link
                    href="/tutorial"
                    className="text-sm font-medium hover:underline underline-offset-4"
                >
                    How it works
                </Link>
                <Link
                    href="/pricing"
                    className="text-sm font-medium hover:underline underline-offset-4"
                >
                    Pricing
                </Link>
            </nav>
            <div className="flex gap-4">
                {/* <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn> */}
            </div>
        </header>
    );
}

export default Header;
