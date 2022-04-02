import { Universidade } from './universidade';

export interface UniversidadeRes {
  name: string;
  country: string;
  domains: string[];
  alpha_two_code: string;
  'state-province'?: string;
  web_pages: string[];
}

export const parseUniversidade = (res: UniversidadeRes): Universidade => {
  return {
    name: res.name,
    country: res.country,
    domains: res.domains,
    alphaTwoCode: res.alpha_two_code,
    stateProvince: res['state-province'],
    webPages: res.web_pages,
  };
};
