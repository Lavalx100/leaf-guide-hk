import { describe, expect, it } from 'vitest';
import {
  BUSINESS_LOCATIONS,
  HK_MAP_CENTER,
  getBusinessLocation,
  getBusinessLocations,
} from './locations.js';

describe('business locations', () => {
  it('returns the configured location for a known business', () => {
    expect(getBusinessLocation('hotel-icon')).toEqual(BUSINESS_LOCATIONS['hotel-icon']);
  });

  it('returns null for an unknown business', () => {
    expect(getBusinessLocation('not-a-business')).toBeNull();
    expect(getBusinessLocations('not-a-business')).toEqual([]);
  });

  it('normalizes a single location to a one-item list', () => {
    expect(getBusinessLocations('hotel-icon')).toEqual([BUSINESS_LOCATIONS['hotel-icon']]);
  });

  it('preserves all locations for businesses with multiple sites', () => {
    expect(getBusinessLocations('ovolo-hotels')).toEqual(BUSINESS_LOCATIONS['ovolo-hotels']);
    expect(getBusinessLocations('ovolo-hotels')).toHaveLength(4);
  });

  it('keeps the map centered on Hong Kong with a usable zoom level', () => {
    expect(HK_MAP_CENTER).toEqual({ lat: 22.3193, lng: 114.1694, zoom: 12 });
  });

  it('contains finite Hong Kong coordinates for every configured location', () => {
    for (const location of Object.values(BUSINESS_LOCATIONS).flat()) {
      expect(Number.isFinite(location.lat)).toBe(true);
      expect(Number.isFinite(location.lng)).toBe(true);
      expect(location.lat).toBeGreaterThan(22);
      expect(location.lat).toBeLessThan(23);
      expect(location.lng).toBeGreaterThan(113);
      expect(location.lng).toBeLessThan(115);
    }
  });
});
