/**
 * Converts a string to a URL-friendly slug
 * Example: "Grey Scale" -> "grey-scale"
 */
export function createSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
}

/**
 * Finds a service by slug from an array of services
 */
export function findServiceBySlug<T extends { slug: string }>(
  services: T[],
  slug: string
): T | undefined {
  return services.find(service => service.slug === slug);
}

