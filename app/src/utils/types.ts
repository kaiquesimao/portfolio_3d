import { Country } from "react-phone-number-input/min";

export interface IFeedbackCard {
  index: number;
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
}

export interface CountryData {
  ip: string;
  city: string;
  region: string;
  region_code: string;
  country_code: Country;
  country_code_iso3: string;
  country_name: string;
  country_capital: string;
  country_tld: string;
  continent_code: string;
  in_eu: boolean;
  postal: string;
  latitude: number;
  longitude: number;
  timezone: string;
  utc_offset: string;
  country_calling_code: string;
  currency: string;
  currency_name: string;
  languages: string;
  asn: string;
  org: string;
}

export interface DevStacksType {
  title: string;
  icon: string;
  index: number;
}

export interface ExperienceType {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
}

export interface IProjectCard {
  index: number;
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: string;
  source_code_link: string;
  demo_link: string;
  webImg: string;
}
