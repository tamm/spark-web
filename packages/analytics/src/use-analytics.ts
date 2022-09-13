import { useContext } from 'react';

import { AnalyticsContextContext } from './analytics-context';
import type {
  AnalyticsEventData,
  AnalyticsEventName,
} from './analytics-listener-context';
import { AnalyticsListenerContext } from './analytics-listener-context';

export type AnalyticsHookType = {
  trackEvent: (name: AnalyticsEventName, data?: AnalyticsEventData) => void;
};

export function useAnalytics(): AnalyticsHookType {
  const analyticsContext = useContext(AnalyticsContextContext);
  const listenerContext = useContext(AnalyticsListenerContext);
  const trackEvent = (
    name: AnalyticsEventName,
    data?: AnalyticsEventData
  ): void => {
    if (!listenerContext) return;
    listenerContext(name, { ...analyticsContext, ...data });
  };

  return {
    trackEvent,
  };
}

export default useAnalytics;
