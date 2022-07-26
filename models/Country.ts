export interface IAPICountryObject {
  flags: {
    png: string;
  };
  name: {
    official: string;
    nativeName: {
      [key: string]: {
        official: string;
      };
    };
  };
  population: number;
  region: string;
  subregion: string;
  capital: Array<string>;
  tld: Array<string>;
  currencies: {
    [key: string]: {
      name: string;
    };
  };
  languages: {
    [key: string]: string;
  };
  borders?: Array<string>;
}

export interface ICountry {
  readonly id: number;
  readonly flag: string;
  readonly officialName: string;
  readonly nativeName: string;
  readonly population: string;
  readonly region: string;
  readonly subregion: string;
  readonly capital: string;
  readonly tld: string;
  readonly currencies: string;
  readonly languages: string;
  readonly borders: Array<string>;
}

export default class Country implements ICountry {
  private country: IAPICountryObject;
  public id: number;

  constructor(country: IAPICountryObject, id: number) {
    this.country = country;
    this.id = id;
  }

  public get flag(): string {
    return this.country.flags.png;
  }

  public get officialName(): string {
    return this.country.name.official;
  }

  public get nativeName(): string {
    try {
      let key = Object.keys(this.country.name.nativeName)[0];
      return this.country.name.nativeName[key].official;
    } catch {
      return "undefined";
    }
  }

  public get population(): string {
    return this.country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  public get region(): string {
    return this.country.region;
  }

  public get subregion(): string {
    return this.country.subregion;
  }

  public get capital(): string {
    try {
      return this.country.capital.join(", ");
    } catch {
      return "undefined";
    }
  }

  public get tld(): string {
    try {
      return this.country.tld.join(", ");
    } catch {
      return "undefined";
    }
  }

  public get currencies(): string {
    try {
      return Object.keys(this.country.currencies)
        .map((key) => this.country.currencies[key].name)
        .join(", ");
    } catch {
      return "undefined";
    }
  }

  public get languages(): string {
    try {
      return Object.keys(this.country.languages)
        .map((key) => this.country.languages[key])
        .join(", ");
    } catch {
      return "undefined";
    }
  }

  public get borders(): Array<string> {
    try {
      return this.country.borders ?? [];
    } catch {
      return [];
    }
  }
}
