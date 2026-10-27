import Link from "next/link";

export default function WelcomePage() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center bg-[#F4F8FB] px-5 py-10 text-[#1B2230] sm:px-8">
      <h1 className="text-center font-[family-name:var(--font-montserrat)] text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
        Welcome To PriceLumi
      </h1>

      {/* Replace this box with the real logo (e.g. next/image) later */}
      <div
        role="img"
        aria-label="PriceLumi logo placeholder"
        className="mt-8 flex aspect-square w-40 items-center justify-center bg-[#D9D9D9] text-sm font-semibold sm:mt-12 sm:w-56 lg:w-72"
      >
        LOGO
      </div>

      <nav
        aria-label="Get started"
        className="mt-8 flex w-full max-w-md flex-col gap-3 sm:mt-12 sm:max-w-xl"
      >
        <Link
          href="/signup"
          className="flex h-12 items-center justify-center rounded-2xl bg-[#F97B45] px-6 font-[family-name:var(--font-poppins)] text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#E56A35] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B2230] sm:h-14 sm:text-base"
        >
          Create an account
        </Link>
        <Link
          href="/home"
          className="flex h-12 items-center justify-center rounded-2xl bg-[#88A5DC] px-6 font-[family-name:var(--font-poppins)] text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#7494CF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B2230] sm:h-14 sm:text-base"
        >
          Continue as guest
        </Link>
        <Link
          href="/forgot-password"
          className="mt-1 self-center font-[family-name:var(--font-poppins)] text-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B2230] sm:text-base"
        >
          Forgot password?
        </Link>
      </nav>
    </main>
  );
}