import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import { getSiteSettings } from "../services/settings.service";
import type { SiteSettings } from "../types/settings.types";

interface SiteSettingsContextType {
  settings: SiteSettings | null;
  loading: boolean;
}

const SiteSettingsContext = createContext<SiteSettingsContextType>({
  settings: null,
  loading: true,
});

export const SiteSettingsProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSettings = async () => {
      const data = await getSiteSettings();
      setSettings(data);
      setLoading(false);
    };

    fetchSettings();
  }, []);

  return (
    <SiteSettingsContext.Provider value={{ settings, loading }}>
      {children}
    </SiteSettingsContext.Provider>
  );
};

export const useSiteSettings = () => {
  return useContext(SiteSettingsContext);
};