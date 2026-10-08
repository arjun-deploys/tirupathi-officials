export const phone = "7305950500";
export const whatsappUrl = `https://wa.me/91${phone}`;
export const email = "tirupaticabsmadurai@gmail.com";
export const address = "NO: 77, Tamil Sangam Road, Madurai Main, Madurai, Poondhotam, Tamil Nadu 625001";

export const fleet = [
  { name: "Mini", rent: "₹1,500 / day", rate: "₹9 / km", seats: "4 seats", image: "mini" },
  { name: "Sedan", rent: "₹1,600 / day", rate: "₹10 / km", seats: "4 seats", image: "sedan" },
  { name: "Tavera", rent: "₹1,700 / day", rate: "₹13 / km", seats: "7 seats", image: "tavera" },
  { name: "Ertiga", rent: "₹2,200 / day", rate: "₹12 / km", seats: "6–7 seats", image: "ertiga" },
  { name: "Innova", rent: "₹2,500 / day", rate: "₹14 / km", seats: "7 seats", image: "innova" },
  { name: "Innova Crysta", rent: "₹2,800 / day", rate: "₹18 / km", seats: "6–7 seats", image: "crysta" },
  { name: "Tempo Traveller", rent: "From ₹2,600 / day", rate: "From ₹18 / km", seats: "13–21 seats", image: "tempo" },
];

export type FareRow = { vehicle: string; package: string; limit: string; base: string; rate: string; bata: string; notes: string };

export const localFares: FareRow[] = [
  { vehicle: "Mini / Sedan", package: "Local", limit: "2 hrs / 20 km", base: "₹600", rate: "20 km included", bata: "—", notes: "Toll & parking extra" },
  { vehicle: "Mini / Sedan", package: "Local", limit: "3 hrs / 30 km", base: "₹900", rate: "30 km included", bata: "—", notes: "Toll & parking extra" },
  { vehicle: "Mini / Sedan", package: "Local", limit: "4 hrs / 40 km", base: "₹1,200", rate: "40 km included", bata: "—", notes: "Toll & parking extra" },
  { vehicle: "Mini / Sedan", package: "Local", limit: "5 hrs / 50 km", base: "₹1,500", rate: "50 km included", bata: "—", notes: "Toll & parking extra" },
  { vehicle: "Mini / Sedan", package: "Local", limit: "6 hrs / 60 km", base: "₹1,800", rate: "60 km included", bata: "—", notes: "Toll & parking extra" },
  { vehicle: "Mini / Sedan", package: "Local", limit: "7 hrs / 70 km", base: "₹2,100", rate: "70 km included", bata: "—", notes: "Toll & parking extra" },
  { vehicle: "Mini / Sedan", package: "Local", limit: "8 hrs / 80 km", base: "₹2,400", rate: "80 km included", bata: "—", notes: "Toll & parking extra" },
  { vehicle: "Mini / Sedan", package: "Local", limit: "10 hrs / 100 km", base: "₹2,900", rate: "100 km included", bata: "—", notes: "Toll & parking extra" },
  { vehicle: "Ertiga", package: "Local", limit: "2 hrs / 20 km", base: "₹1,000", rate: "20 km included", bata: "—", notes: "Toll & parking extra" },
  { vehicle: "Ertiga", package: "Local", limit: "4 hrs / 40 km", base: "₹2,000", rate: "40 km included", bata: "—", notes: "Toll & parking extra" },
  { vehicle: "Ertiga", package: "Local", limit: "5 hrs / 50 km", base: "₹2,500", rate: "50 km included", bata: "—", notes: "Toll & parking extra" },
];

export const outstationFares: FareRow[] = [
  { vehicle: "Mini", package: "Day rent", limit: "—", base: "₹1,500/day", rate: "₹9/km", bata: "—", notes: "Toll & parking extra" },
  { vehicle: "Sedan", package: "Day rent", limit: "—", base: "₹1,600/day", rate: "₹10/km", bata: "—", notes: "Toll & parking extra" },
  { vehicle: "Mini", package: "Outstation", limit: "250 km and above", base: "—", rate: "₹13/km", bata: "₹400", notes: "Toll & parking extra" },
  { vehicle: "Sedan", package: "Outstation", limit: "250 km and above", base: "—", rate: "₹14/km", bata: "₹400", notes: "Toll & parking extra" },
  { vehicle: "Ertiga", package: "Outstation", limit: "250 km and above", base: "—", rate: "₹17/km", bata: "₹500", notes: "Toll & parking extra" },
  { vehicle: "Ertiga", package: "Day rent", limit: "—", base: "₹2,200/day", rate: "₹12/km", bata: "—", notes: "Toll & parking extra" },
  { vehicle: "Innova", package: "Outstation", limit: "300 km and above", base: "—", rate: "₹18/km", bata: "₹500", notes: "Toll & parking extra" },
  { vehicle: "Innova", package: "Day rent", limit: "—", base: "₹2,500/day", rate: "₹14/km", bata: "—", notes: "Toll & parking extra" },
  { vehicle: "Innova Crysta", package: "Outstation", limit: "300 km and above", base: "—", rate: "₹20/km", bata: "₹500", notes: "Toll & parking extra" },
  { vehicle: "Innova Crysta", package: "Day rent", limit: "—", base: "₹2,800/day", rate: "₹18/km", bata: "—", notes: "Toll & parking extra" },
  { vehicle: "Tempo Traveller 13 seater", package: "Outstation", limit: "300 km/day", base: "₹2,600/day", rate: "₹18/km", bata: "₹500", notes: "Toll & parking extra" },
  { vehicle: "Tempo Traveller 18 seater", package: "Outstation", limit: "300 km/day", base: "₹3,500/day", rate: "₹25/km", bata: "₹500", notes: "Toll & parking extra" },
  { vehicle: "Tempo Traveller 21 seater", package: "Outstation", limit: "300 km/day", base: "₹4,300/day", rate: "₹28/km", bata: "₹500", notes: "Toll & parking extra" },
];

export const routes = ["Rameswaram", "Thiruchendur", "Kodaikanal", "Trivandrum", "Kovalam", "Thekkady", "Munnar", "Sabarimala", "Srirangam", "Srivilliputtur", "Courtallam", "Nava Tirupathi"];

export const packages = [
  { name: "Tamil Nadu", places: "Kanyakumari, Rameswaram, Madurai, Kodaikanal, Ooty, Palani, Pollachi, Thiruchendur, Kanchipuram", mark: "01" },
  { name: "Kerala", places: "Munnar, Kovalam, Kumarakom, Trivandrum, Kochi, Alleppey, Thekkady, Poovar, Vagamon, Palakkad", mark: "02" },
  { name: "Karnataka", places: "Mysore Palace, Bengaluru, Abbey Falls, Coorg, Wonderla, Gardens, Sree Virupaksha Temple", mark: "03" },
  { name: "Honeymoon", places: "Ooty, Kodaikanal, Munnar, Coonoor, Coimbatore, Chennai, Mahabalipuram, Pondicherry, Trichy", mark: "04" },
  { name: "Corporate", places: "Chennai, Auroville, Hogenakkal, Mahabalipuram, Kanyakumari, Srirangam, Yercaud, Munnar, Ooty", mark: "05" },
  { name: "Temple", places: "Murugan Temples, Navagraha, Kanchipuram, Rameswaram, Thanjavur, Kumbakonam, Velankanni, Tiruvannamalai", mark: "06" },
  { name: "Hill Station", places: "Ooty, Kodaikanal, Yelagiri, Yercaud, Munnar, Kolli Hills, Kotagiri, Javadi Hills, Coonoor", mark: "07" },
  { name: "Family", places: "Madurai, Chidambaram, Mahabalipuram, Rameswaram, Thanjavur, Velankanni, Kanyakumari, Trichy", mark: "08" },
  { name: "Wildlife", places: "Mudumalai, Valparai, Anamalai Tiger Reserve, Masinagudi, Sathyamangalam, Megamalai, Kalakkad", mark: "09" },
];