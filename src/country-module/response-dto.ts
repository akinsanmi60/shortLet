import { ApiProperty } from '@nestjs/swagger';

export class GenericResponse {
  @ApiProperty()
  status: boolean;

  @ApiProperty()
  statusCode: number;

  @ApiProperty()
  message: string;
}

class Name {
  @ApiProperty()
  official: string;

  @ApiProperty()
  common: string;
}

class NativeName {
  @ApiProperty({ type: Name, additionalProperties: true })
  // [key: string]  : Name;
  dynamicProperties: Record<string, Name>;
}

class Currency {
  @ApiProperty()
  name: string;

  @ApiProperty()
  symbol: string;
}

class Currencies {
  @ApiProperty({ type: () => Currency })
  // [key: string]: Currency;
  dynamicProperties: Record<string, Currency>;
}

class Idd {
  @ApiProperty()
  root: string;

  @ApiProperty({ type: [String] })
  suffixes: string[];
}

class Demonyms {
  @ApiProperty()
  f: string;

  @ApiProperty()
  m: string;
}

class Maps {
  @ApiProperty()
  googleMaps: string;

  @ApiProperty()
  openStreetMaps: string;
}

class Car {
  @ApiProperty({ type: [String] })
  signs: string[];

  @ApiProperty()
  side: string;
}

class Flags {
  @ApiProperty()
  png: string;

  @ApiProperty()
  svg: string;
}

class CoatOfArms {
  @ApiProperty({ type: () => Object })
  dynamicProperties: Record<string, any>;
}

class CapitalInfo {
  @ApiProperty({ type: [Number] })
  latlng: number[];
}

export class Country {
  @ApiProperty({ type: () => Name })
  name: {
    common: string;
    official: string;
    nativeName: NativeName;
  };

  @ApiProperty({ type: [String] })
  tld: string[];

  @ApiProperty()
  cca2: string;

  @ApiProperty()
  ccn3: string;

  @ApiProperty()
  cca3: string;

  @ApiProperty()
  independent: boolean;

  @ApiProperty()
  status: string;

  @ApiProperty()
  unMember: boolean;

  @ApiProperty({ type: () => Currencies })
  currencies: Currencies;

  @ApiProperty({ type: () => Idd })
  idd: Idd;

  @ApiProperty({ type: [String] })
  capital: string[];

  @ApiProperty({ type: [String] })
  altSpellings: string[];

  @ApiProperty()
  region: string;

  @ApiProperty({ type: () => Object })
  languages: {
    [key: string]: string;
  };

  @ApiProperty({ type: () => Name })
  translations: {
    [key: string]: Name;
  };

  @ApiProperty({ type: [Number] })
  latlng: number[];

  @ApiProperty()
  landlocked: boolean;

  @ApiProperty()
  area: number;

  @ApiProperty({ type: () => Demonyms })
  demonyms: {
    eng: Demonyms;
  };

  @ApiProperty()
  flag: string;

  @ApiProperty({ type: () => Maps })
  maps: Maps;

  @ApiProperty()
  population: number;

  @ApiProperty({ type: () => Car })
  car: Car;

  @ApiProperty({ type: [String] })
  timezones: string[];

  @ApiProperty({ type: [String] })
  continents: string[];

  @ApiProperty({ type: () => Flags })
  flags: Flags;

  @ApiProperty({ type: () => CoatOfArms })
  coatOfArms: CoatOfArms;

  @ApiProperty()
  startOfWeek: string;

  @ApiProperty({ type: () => CapitalInfo })
  capitalInfo: CapitalInfo;
}

export class CountryResponseDto extends GenericResponse {
  @ApiProperty({ type: [Country] })
  data: Country[];
}
