import dotenvx from '@dotenvx/dotenvx';
import path from 'path';

// Load environment variables from .env
dotenvx.config({
  path: path.resolve(__dirname, '../.env'),
});

interface EnvConfig {
  baseUrl: string;
  url: string;
  username: string;
  password: string;
}

export const env: EnvConfig = {
  baseUrl: process.env.BASE_URL!,
  url: process.env.BASE_URL!,
  username: process.env.USERNAME!,
  password: process.env.PASSWORD!,
};

/**
 * Returns the URL to navigate to, using the provided URL or falling back to the base URL.
 * @param url - Optional URL to use; defaults to env.baseUrl if not provided
 * @returns The URL string to navigate to
 */
export function getUrl(url?: string): string {
  return url ?? env.baseUrl;
}

/**
 * Builds an absolute app URL from a path, using BASE_URL as the origin anchor.
 */
export function getAppUrl(path: string): string {
  return new URL(path, env.baseUrl).href;
}