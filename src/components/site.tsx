import { Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  CalendarDays,
  CarFront,
  Check,
  ChevronRight,
  Clock3,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import logo from "@/assets/logo1.png";
import miniImage from "@/assets/fleet-mini.jpg";
import sedanImage from "@/assets/fleet-sedan.jpg";
import crystaImage from "@/assets/fleet-crysta.jpg";
import tempoImage from "@/assets/fleet-tempo.jpg";
import ertigaImage from "@/assets/fleet-ertiga.jpg";
import innovaImage from "@/assets/fleet-innova.jpg";
import taveraImage from "@/assets/fleet-tavera.jpg";
import {
  address,
  email,
  fleet,
  localFares,
  outstationFares,
  packages,
  phone,
  routes,
  whatsappUrl,
  type FareRow,
} from "@/lib/site-data";

const nav = [
  ["Home", "/"],
  ["About us", "/about"],
  ["Tariff", "/tariff"],
  ["Tour packages", "/tour-packages"],
  ["Online booking", "/online-booking"],
  ["Gallery", "/gallery"],
  ["Contact us", "/contact"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="contact-strip">
        <div className="shell flex items-center justify-between gap-4 py-2 text-xs">
          <p className="hidden sm:block">Safe journeys. Happier destinations.</p>
          <div className="ml-auto flex gap-5">
            <a href={`tel:+91${phone}`}>
              <Phone size={13} /> +91 {phone}
            </a>
            <a className="hidden md:flex" href={`mailto:${email}`}>
              <Mail size={13} /> {email}
            </a>
          </div>
        </div>
      </div>
      <header className="site-header">
        <div className="shell flex h-20 items-center justify-between gap-5">
          <Link to="/" aria-label="Tirupati Cabs home">
            <img src={logo} alt="Tirupati Cabs" className="h-17 w-36 object-contain object-left" />
          </Link>
          <nav className="hidden items-center gap-6 xl:flex">
            {nav.map(([label, to]) => (
              <Link key={to} to={to} activeProps={{ className: "nav-active" }} className="nav-link">
                {label}
              </Link>
            ))}
          </nav>
          <Link to="/online-booking" className="button-primary hidden lg:inline-flex">
            Book now <ArrowRight size={16} />
          </Link>
          <button
            className="icon-button xl:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <nav className="mobile-nav">
            {nav.map(([label, to]) => (
              <Link key={to} to={to} onClick={() => setOpen(false)}>
                {label}
                <ChevronRight size={16} />
              </Link>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div>
          <img
            src={logo}
            alt="Tirupati Cabs"
            className="mb-5 h-24 w-52 rounded bg-background object-contain p-2"
          />
          <p className="max-w-sm text-sm leading-7 text-footer-muted">
            Reliable local rides, outstation journeys and curated South India tours from Madurai,
            available around the clock.
          </p>
        </div>
        <div>
          <h3>Explore</h3>
          {nav.slice(1, 6).map(([label, to]) => (
            <Link key={to} to={to}>
              {label}
            </Link>
          ))}
        </div>
        <div>
          <h3>Services</h3>
          {[
            "Local rental",
            "Outstation",
            "One-way trips",
            "Pickup & drop",
            "Tour packages",
            "Cab booking",
          ].map((x) => (
            <span key={x}>{x}</span>
          ))}
        </div>
        <div>
          <h3>Contact</h3>
          <a href={`tel:+91${phone}`}>
            <Phone size={15} />
            +91 {phone}
          </a>
          <a href={`mailto:${email}`}>
            <Mail size={15} />
            {email}
          </a>
          <a
            href="https://maps.google.com/?q=77+Tamil+Sangam+Road+Madurai"
            target="_blank"
            rel="noreferrer"
          >
            <MapPin size={15} />
            <span>{address}</span>
          </a>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© 2026 Tirupati Cabs. All rights reserved.</span>
        <span>Madurai · Tamil Nadu</span>
      </div>
    </footer>
  );
}

export function WhatsAppFloat() {
  return (
    <a
      className="whatsapp-float"
      href={`${whatsappUrl}?text=${encodeURIComponent("Hi, I would like to enquire about a Tirupati Cabs booking.")}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle />
      <span>WhatsApp</span>
    </a>
  );
}

export function PageHero({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <section className="page-hero">
      <div className="shell">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}

const fleetImages = {
  mini: miniImage,
  sedan: sedanImage,
  crysta: crystaImage,
  tempo: tempoImage,
  ertiga: ertigaImage,
  innova: innovaImage,
  tavera: taveraImage,
};
export function FleetCards({ compact = false }: { compact?: boolean }) {
  return (
    <div className="fleet-grid">
      {fleet.map((car) => (
        <article className="fleet-card" key={car.name}>
          <div className="fleet-image">
            <img
              src={fleetImages[car.image as keyof typeof fleetImages]}
              alt={`${car.name} cab`}
              loading="lazy"
              width={1200}
              height={800}
            />
            <span>{car.seats}</span>
          </div>
          <div className="fleet-copy">
            <div>
              <p className="eyebrow">Day rent</p>
              <h3>{car.name}</h3>
            </div>
            <div className="text-right">
              <strong>{car.rent}</strong>
              <small>{car.rate}</small>
            </div>
          </div>
          {!compact && (
            <a
              href={`${whatsappUrl}?text=${encodeURIComponent(`Hi, I want to book a ${car.name}.`)}`}
              target="_blank"
              rel="noreferrer"
            >
              Enquire for {car.name}
              <ArrowRight size={16} />
            </a>
          )}
        </article>
      ))}
    </div>
  );
}

function FareTable({ rows }: { rows: FareRow[] }) {
  return (
    <div className="fare-wrap">
      <table>
        <thead>
          <tr>
            <th>Vehicle</th>
            <th>Package</th>
            <th>Duration / limit</th>
            <th>Base price</th>
            <th>Rate per km</th>
            <th>Driver bata</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={`${row.vehicle}-${i}`}>
              <td>{row.vehicle}</td>
              <td>{row.package}</td>
              <td>{row.limit}</td>
              <td>{row.base}</td>
              <td>{row.rate}</td>
              <td>{row.bata}</td>
              <td>{row.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export function TariffTables({ preview = false }: { preview?: boolean }) {
  return (
    <div className="space-y-10">
      <div>
        <div className="section-label">
          <span>01</span>
          <h3>Local packages</h3>
        </div>
        <FareTable rows={preview ? localFares.slice(0, 4) : localFares} />
      </div>
      {!preview && (
        <div>
          <div className="section-label">
            <span>02</span>
            <h3>Outstation packages</h3>
          </div>
          <FareTable rows={outstationFares} />
        </div>
      )}
    </div>
  );
}

export function PackageGrid({ limit }: { limit?: number }) {
  return (
    <div className="package-grid">
      {packages.slice(0, limit).map((item) => (
        <article className="package-card" key={item.name}>
          <span className="package-number">{item.mark}</span>
          <p className="eyebrow">Curated journey</p>
          <h3>
            {item.name}
            <br />
            Tour Package
          </h3>
          <p>{item.places}</p>
          <a
            href={`${whatsappUrl}?text=${encodeURIComponent(`Hi, I am interested in the ${item.name} Tour Package.`)}`}
            target="_blank"
            rel="noreferrer"
          >
            Plan this trip <ArrowRight size={16} />
          </a>
        </article>
      ))}
    </div>
  );
}

export function BookingForm({ dark = false }: { dark?: boolean }) {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = `Hi Tirupati Cabs, I need a ${data.get("service")} cab.\nName: ${data.get("name")}\nPhone: ${data.get("phone")}\nFrom: ${data.get("from")}\nTo: ${data.get("to")}\nDate: ${data.get("date")}\nPassengers: ${data.get("passengers")}`;
    window.open(
      `${whatsappUrl}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }
  return (
    <form className={`booking-form ${dark ? "booking-dark" : ""}`} onSubmit={submit}>
      <div className="form-heading">
        <p className="eyebrow">Instant enquiry</p>
        <h2>Where can we take you?</h2>
      </div>
      <div className="form-grid">
        <label>
          <span>Name</span>
          <input name="name" required placeholder="Your name" />
        </label>
        <label>
          <span>Phone</span>
          <input name="phone" type="tel" required placeholder="10-digit number" />
        </label>
        <label>
          <span>Pickup</span>
          <input name="from" required placeholder="From address" />
        </label>
        <label>
          <span>Destination</span>
          <input name="to" required placeholder="To address" />
        </label>
        <label>
          <span>Travel date</span>
          <input name="date" type="date" required />
        </label>
        <label>
          <span>Passengers</span>
          <input name="passengers" type="number" min="1" required placeholder="How many?" />
        </label>
        <label className="md:col-span-2">
          <span>Service</span>
          <select name="service" required defaultValue="">
            <option value="" disabled>
              Select service type
            </option>
            <option>Day Rent</option>
            <option>One-way Trip</option>
            <option>Round Trip</option>
            <option>Outstation</option>
          </select>
        </label>
      </div>
      <button className="button-primary w-full" type="submit">
        Send booking on WhatsApp <MessageCircle size={17} />
      </button>
    </form>
  );
}

export function ContactBand() {
  return (
    <section className="contact-band">
      <div className="shell flex flex-col items-start justify-between gap-7 py-14 lg:flex-row lg:items-center">
        <div>
          <p className="eyebrow">Ride when you’re ready</p>
          <h2>Your next journey starts with one call.</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          <a className="button-light" href={`tel:+91${phone}`}>
            <Phone size={17} />
            Call +91 {phone}
          </a>
          <Link className="button-outline-light" to="/online-booking">
            Book online
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function TrustGrid() {
  const items = [
    {
      Icon: ShieldCheck,
      title: "Safety first",
      text: "Experienced drivers and well-kept vehicles.",
    },
    { Icon: Clock3, title: "24 × 7 support", text: "Reliable assistance for every journey." },
    { Icon: Sparkles, title: "Quality control", text: "Clean cabs checked before every trip." },
    { Icon: Users, title: "Flexible travel", text: "Local, outstation, family and group options." },
  ];
  return (
    <div className="trust-grid">
      {items.map(({ Icon, title, text }) => (
        <div key={title}>
          <Icon />
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      ))}
    </div>
  );
}

export function RouteStrip() {
  return (
    <div className="route-strip">
      {routes.map((place) => (
        <a
          key={place}
          href={`${whatsappUrl}?text=${encodeURIComponent(`Hi, I need a cab from Madurai to ${place}.`)}`}
          target="_blank"
          rel="noreferrer"
        >
          <span>Madurai</span>
          <ArrowRight size={15} />
          <strong>{place}</strong>
        </a>
      ))}
    </div>
  );
}
