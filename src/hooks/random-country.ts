import getCountries from "@/api/countries";
import { useQuery } from "@tanstack/react-query";
import { getRandomCountry } from "../lib/utils";

interface NativeName {
  official: string;
  common: string;
}

export interface Country {
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  name: {
    common: string;
    official: string;
    nativeName: Record<string, NativeName>;
  };
}

const useGetRandomCountry = () =>
  useQuery<Country[]>({
    queryKey: ["countries"],
    queryFn: () =>
      getCountries().then((countries) => getRandomCountry(countries)),
  });

export default useGetRandomCountry;
