import ky from 'ky';
import { createManga, createMangaList, createStatisticsObject } from '../types/createTypes';
import {
  IMangaResponse,
  IManga,
  IMangaListResponse,
  IMangaStatistics,
  IStatisticsObject,
  IStatisticsResponse,
} from '../types/types';

import { mangaUrl, statisticsUrl, mangaCoversUrl } from './apiRoutes';

export async function getMangaList(): Promise<IManga[]> {
  const mangaListResponse: IMangaListResponse = await ky(`${mangaUrl}?includes[]=cover_art&contentRating[]=safe`).json();
  return createMangaList(mangaListResponse.data) as IManga[];
}

export async function getManga(mangaId: string): Promise<IManga> {
  const mangaResponse: IMangaResponse = await ky(
    `${mangaUrl}/${mangaId}?includes[]=cover_art&rating=safe`,
  )
    .json();
  return createManga(mangaResponse.data) as IManga;
}

export async function getMangaStatistics(mangaId: string): Promise<IMangaStatistics> {
  const mangaStatsResponse: IStatisticsResponse = await ky(
    `${statisticsUrl}/manga/${mangaId}`,
  ).json();
  const statsObject: IStatisticsObject = createStatisticsObject(mangaStatsResponse.statistics);
  return statsObject.statistics as IMangaStatistics;
}

export async function getMangaChapterList(mangaId: string): Promise<IManga[]> {
  const mangaChapterListResponse: IMangaListResponse = await ky(
    `${mangaUrl}/${mangaId}/aggregate`,
  ).json();
  return createMangaList(mangaChapterListResponse.data) as IManga[];
}

export function getMangaCoverUrl(manga: IManga): string{
  return `${mangaCoversUrl}/${manga?.id}/${manga?.relationships?.[2].attributes?.fileName}`;
}

export async function searchManga(searchQuery: string): Promise<IManga[]> {
  const searchResult: IMangaListResponse = await ky(`${mangaUrl}?${searchQuery}`).json();
  return createMangaList(searchResult.data) as IManga[];
}
