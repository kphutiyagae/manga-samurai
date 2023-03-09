import ky from 'ky';
import { IMangaResponse, IError, IManga, IMangaListResponse } from '../types/types';

import { mangaUrl } from './apiRoutes';

export async function getMangaList() {
  const mangaListResponse: IMangaListResponse = await ky(mangaUrl).json();
  return mangaListResponse.data;
}

export async function getManga(mangaId: string) {
  const mangaResponse: IMangaResponse = await ky(mangaUrl.concat(`/${mangaId}`)).json();
  return mangaResponse;
}

/*
export async function getManga(mangaId: string) {
  const mangaListResponse: IAPIResponse = await ky(`${mangaUrl}/${mangaId}`).json();
  return mangaListResponse.data;
}
*/