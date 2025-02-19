import {CityType} from './city.type.js';
import {LocationType} from './location.type.js';
import {OfferType} from './offer-type.enum.js';

type OfferCommon = {
  id: string;
  title: string;
  type: OfferType;
  price: number;
  city: CityType;
  location: LocationType;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
}

export type Offer = {
  previewImage: string;
} & OfferCommon

export type OfferDetails = {
  description: string;
  bedrooms: number;
  goods: string[];
  host: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  images: string[];
  maxAdults: number;
} & OfferCommon
