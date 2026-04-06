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
        const url = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
        const response = await api.get<T>(url);
        setData(response.data);
        setError(null);
      } catch (err: any) {
        console.error(`Error fetching ${endpoint}:`, err);
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, loading, error };
}