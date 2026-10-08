import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, MapPin, Phone } from "lucide-react";
import heroVideo from "@/assets/premium-car-assembly.webm";
import heroPoster from "@/assets/premium-car-poster.jpg.jpeg";
import {
  BookingForm,
  ContactBand,
  FleetCards,
  PackageGrid,
  RouteStrip,
  TariffTables,
  TrustGrid,
} from "@/components/site";
import { phone } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tirupati Cabs | Premium Cab Service in Madurai" },
      {
        name: "description",
        content:
          "Book trusted local taxis, outstation cabs and South India tour packages with Tirupati Cabs in Madurai.",
      },
      { property: "og:title", content: "Tirupati Cabs | Premium Cab Service in Madurai" },
      {
        property: "og:description",
        content: "Premium local, outstation and tour cab service from Madurai, available 24/7.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div>
      <section className="relative min-h-[680px] overflow-hidden bg-footer text-background lg:min-h-[calc(100vh-112px)]">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-90"
          src={heroVideo}
          poster={heroPoster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="Premium car assembling in a dark studio"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--footer)_0%,color-mix(in_oklab,var(--footer)_72%,transparent)_48%,color-mix(in_oklab,var(--footer)_28%,transparent)_100%)]" />
        <div className="shell relative z-10 flex min-h-[680px] items-end pb-14 pt-28 lg:min-h-[calc(100vh-112px)] lg:items-center lg:pb-24">
          <div className="max-w-3xl animate-fade-in">
            <p className="eyebrow mb-5">Madurai’s premium cab service</p>
            <h1 className="font-display text-[clamp(3rem,8vw,7.2rem)] font-bold leading-[.9]">
              Driven by trust.
              <br />
              <span className="text-primary">Defined by care.</span>
            </h1>
            <p className="mt-7 max-w-xl text-sm leading-7 text-footer-muted md:text-base">
              Tailored local rides, outstation journeys and South India tours—available around the
              clock from Madurai.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/online-booking" className="button-primary">
                Book your ride <ArrowRight size={17} />
              </Link>
              <a href={`tel:+91${phone}`} className="button-outline-light">
                <Phone size={17} />
                Call us now
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-5 text-xs text-footer-muted">
              <span className="flex items-center gap-2">
                <Check size={15} className="text-primary" />
                24/7 service
              </span>
              <span className="flex items-center gap-2">
                <Check size={15} className="text-primary" />
                Professional drivers
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={15} className="text-primary" />
                Madurai & beyond
              </span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 hidden w-[38%] border-t border-background/20 px-8 py-5 text-xs text-footer-muted lg:block">
          Precision. Comfort. Every kilometre.
        </div>
      </section>

      <section className="bg-background py-20 lg:py-28">
        <div className="shell grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <div>
            <p className="eyebrow">Welcome aboard</p>
            <h2 className="mt-3 max-w-md text-4xl font-bold leading-tight lg:text-5xl">
              Madurai travel, elevated.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">
              We offer thoughtfully managed, affordable car rentals for local travel, outstation
              trips, tour packages, pickup and drop services. Make us your trusted companion for
              every safe journey.
            </p>
            <Link
              to="/about"
              className="mt-7 inline-flex items-center gap-2 text-sm font-extrabold text-primary"
            >
              Discover our story
              <ArrowRight size={16} />
            </Link>
          </div>
          <BookingForm />
        </div>
      </section>
      <section className="bg-surface py-20 lg:py-28">
        <div className="shell">
          <div className="mb-10 flex items-end justify-between gap-5">
            <div>
              <p className="eyebrow">Choose your ride</p>
              <h2 className="mt-3 text-4xl font-bold">Our fleet</h2>
            </div>
            <Link
              to="/gallery"
              className="hidden items-center gap-2 text-sm font-extrabold text-primary sm:flex"
            >
              View gallery
              <ArrowRight size={16} />
            </Link>
          </div>
          <FleetCards />
        </div>
      </section>
      <section className="bg-background py-20 lg:py-28">
        <div className="shell">
          <div className="mb-10 max-w-2xl">
            <p className="eyebrow">Transparent pricing</p>
            <h2 className="mt-3 text-4xl font-bold">Local cab tariffs</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Straightforward packages for fast city travel. Toll and parking charges are additional
              where applicable.
            </p>
          </div>
          <TariffTables preview />
          <Link to="/tariff" className="button-primary mt-8">
            See all tariffs
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
      <section className="bg-surface py-20 lg:py-28">
        <div className="shell">
          <div className="mb-10 max-w-2xl">
            <p className="eyebrow">Across South India</p>
            <h2 className="mt-3 text-4xl font-bold">Journeys made memorable</h2>
          </div>
          <RouteStrip />
          <div className="mt-10">
            <PackageGrid limit={3} />
          </div>
          <Link to="/tour-packages" className="button-primary mt-8">
            Explore all packages
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
      <section className="bg-background py-20">
        <div className="shell">
          <div className="mb-10 text-center">
            <p className="eyebrow">Why Tirupati Cabs</p>
            <h2 className="mt-3 text-4xl font-bold">Confidence in every ride</h2>
          </div>
          <TrustGrid />
        </div>
      </section>
      <ContactBand />
    </div>
  );
}
