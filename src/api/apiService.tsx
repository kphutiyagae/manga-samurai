import ky from 'ky';
import {
  IMangaResponse,
  IManga,
  IMangaListResponse,
  IMangaStatistics,
  IMangaStatisticsResponse,
  IStatisticsObject,
  IStatisticsResponse
} from '../types/types';

import { mangaUrl, statisticsUrl, mangaCoversUrl } from './apiRoutes';

export async function getMangaList(): Promise<IManga[]> {
  const mangaListResponse: IMangaListResponse = await ky(`${mangaUrl}?includes[]=cover_art`).json();
  return mangaListResponse.data;
}

export async function getManga(mangaId: string): Promise<IManga> {
  const mangaResponse: IMangaResponse = await ky(
    `${mangaUrl}/${mangaId}?includes[]=cover_art`
  ).json();
  return mangaResponse.data;
}

export async function getMangaStatistics(mangaId: string): Promise<IMangaStatistics> {
  const mangaStatsResponse: IStatisticsResponse = await ky(
    `${statisticsUrl}/manga/${mangaId}`
  ).json();
  return mangaStatsResponse?.statistics?.statistics;
}

export async function getMangaChapterList(mangaId: string): Promise<IManga[]> {
  const mangaChapterListResponse: IMangaListResponse = await ky(`${mangaUrl}/${mangaId}`).json();
  return mangaChapterListResponse.data;
}

export async function getMangaCover(mangaId: string, mangaCoverId: string): Promise<Blob> {
  const mangaCoverResponse: Blob = await ky(`${mangaCoversUrl}/${mangaId}/${mangaCoverId}`).blob();
  return mangaCoverResponse;
}
