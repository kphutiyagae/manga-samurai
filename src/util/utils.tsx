import { mangaUrl } from "../api/apiRoutes";

export function getMangaCategory(urlCategory: string): string{

    switch (urlCategory.toLowerCase()) {
        case 'trending':
            return `order[followedCount]=desc&limit=50`;

        case 'newreleases':
            return `order[createdAt]=desc&limit=50`;

        case 'toprated':
            return `order[rating]=desc&limit=50`;
    
        default:
            return 'none';
    }
}