'use client';

import { useState, useEffect } from 'react';
import { api } from '@/lib/api';

export function usePageData<T>(endpoint: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await api.get(endpoint);
        setData(response.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error fetching data');
        console.error(`Error fetching ${endpoint}:`, err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, loading, error };
}