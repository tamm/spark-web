import { createContext } from 'react';

export type AnalyticsEventData = Record<string, string | number>;
export type AnalyticsEventName = string;
export type AnalyticsEventHandler = (
  eventName: AnalyticsEventName,
  eventData: AnalyticsEventData
) => void;

export const AnalyticsListenerContext = createContext<AnalyticsEventHandler>(
  () => null
);
