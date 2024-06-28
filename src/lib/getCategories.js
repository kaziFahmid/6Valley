'use server';

import { BASE_URL } from "./api";

export const getCategories = async () => {
  try {
    const response = await fetch(`${BASE_URL}/categories?guest_id=1`, {next: { revalidate: 30000} });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return { error: 'Failed to fetch products' };
  }
};
