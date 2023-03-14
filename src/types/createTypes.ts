import cloneDeep from 'lodash.clonedeep';
import {
  ILinks,
  IManga,
  IMangaAltTitle,
  IMangaAttributes,
  IMangaComments,
  IMangaDescription,
  IMangaRating,
  IMangaRelationship,
  IMangaStatistics,
  IMangaTag,
  IMangaTitle,
  IRelationshipAttributes,
  IStatisticsObject,
  IStatsDistribution,
  ITagAttributes,
  ITagName,
} from './types';

function createRelationshipAttributes(
  relationshipAttributes: IRelationshipAttributes,
): IRelationshipAttributes {
  const relationship: IRelationshipAttributes = {
    description:
      relationshipAttributes?.description === null ? 'null' : relationshipAttributes?.description,
    volume: relationshipAttributes?.volume === null ? 'null' : relationshipAttributes?.volume,
    fileName: relationshipAttributes?.fileName === null ? 'null' : relationshipAttributes?.fileName,
    locale: relationshipAttributes?.locale === null ? 'null' : relationshipAttributes?.locale,
    createdAt:
      relationshipAttributes?.createdAt === null
        ? new Date('null')
        : relationshipAttributes?.createdAt,
    updatedAt:
      relationshipAttributes?.updatedAt === null
        ? new Date('null')
        : relationshipAttributes?.updatedAt,
    version:
      relationshipAttributes?.version === null ? Number('null') : relationshipAttributes?.version,
  };
  return relationship;
}

function createRelationships(mangaRelationships: IMangaRelationship[]): IMangaRelationship[] {
  const relationships: IMangaRelationship[] = [];

  mangaRelationships.forEach((mangaRelationship: IMangaRelationship) => {
    const relationship: IMangaRelationship = {
      id: mangaRelationship?.id === null ? 'null' : mangaRelationship?.id,
      type: mangaRelationship?.type === null ? 'null' : mangaRelationship?.type,
      related: mangaRelationship?.related === null ? 'null' : mangaRelationship?.related,
      attributes:
        mangaRelationship?.related === null
          ? undefined
          : createRelationshipAttributes(mangaRelationship?.attributes as IRelationshipAttributes),
    };

    relationships.push(relationship);
  });

  return relationships;
}

function createMangaTitle(mangaAttributeTitle: IMangaTitle) {
  const mangaTitle: IMangaTitle = {
    en: mangaAttributeTitle?.en === null ? 'null' : mangaAttributeTitle?.en,
  };
  return mangaTitle;
}
function createMangaAltTitles(mangaAltTitles: IMangaAltTitle[]) {
  const altTitles: IMangaAltTitle[] = [];

  mangaAltTitles.forEach((title: IMangaAltTitle) => {
    const altTitle: IMangaAltTitle = {
      ko: title?.ko === null ? 'null' : title?.ko,
      'ko-ro': title?.['ko-ro'] === null ? 'null' : title?.['ko-ro'],
      en: title?.en === null ? 'null' : title?.en,
      ru: title?.ru === null ? 'null' : title?.ru,
      zh: title?.zh === null ? 'null' : title?.zh,
      ja: title?.ja === null ? 'null' : title?.ja,
      'es-la': title?.['es-la'] === null ? 'null' : title?.['es-la'],
      'ja-ro': title?.['ja-ro'] === null ? 'null' : title?.['ja-ro'],
      fr: title?.fr === null ? 'null' : title?.fr,
      pl: title?.pl === null ? 'null' : title?.pl,
    };
    altTitles.push(altTitle);
  });

  return altTitles;
}

function createMangaDescription(mangaDescription: IMangaDescription) {
  const description: IMangaDescription = {
    en: mangaDescription?.en === null ? 'null' : mangaDescription?.en,
    ko: mangaDescription?.ko === null ? 'null' : mangaDescription?.ko,
    ru: mangaDescription?.ru === null ? 'null' : mangaDescription?.ru,
    zh: mangaDescription?.zh === null ? 'null' : mangaDescription?.zh,
    ja: mangaDescription?.ja === null ? 'null' : mangaDescription?.ja,
    th: mangaDescription?.th === null ? 'null' : mangaDescription?.th,
    fr: mangaDescription?.fr === null ? 'null' : mangaDescription?.fr,
  };
  return description;
}

function createMangaLinks(mangaLinks: ILinks) {
  const links: ILinks = {
    al: mangaLinks?.al === null ? 'null' : mangaLinks?.al,
    mu: mangaLinks?.mu === null ? 'null' : mangaLinks?.mu,
    raw: mangaLinks?.raw === null ? 'null' : mangaLinks?.raw,
    bw: mangaLinks?.bw === null ? 'null' : mangaLinks?.bw,
    amz: mangaLinks?.amz === null ? 'null' : mangaLinks?.amz,
    ebj: mangaLinks?.ebj === null ? 'null' : mangaLinks?.ebj,
    mal: mangaLinks?.al === null ? 'null' : mangaLinks?.mal,
    ap: mangaLinks?.ap === null ? 'null' : mangaLinks?.ap,
    kt: mangaLinks?.kt === null ? 'null' : mangaLinks?.kt,
    engtl: mangaLinks?.engtl === null ? 'null' : mangaLinks?.engtl,
    cdj: mangaLinks?.cdj === null ? 'null' : mangaLinks?.cdj,
    nu: mangaLinks?.nu === null ? 'null' : mangaLinks?.nu,
  };
  return links;
}

function createTagName(tagAttributeName: ITagName): ITagName {
  const tagName: ITagName = {
    en: tagAttributeName?.en === null ? 'null' : tagAttributeName?.en,
  };
  return tagName;
}

function createMangaTagAttributes(tagAttributes: ITagAttributes): ITagAttributes {
  const attributes: ITagAttributes = {
    name: tagAttributes?.name === null ? undefined : createTagName(tagAttributes?.name as ITagName),
    description: tagAttributes?.description === null ? undefined : tagAttributes?.description,
    group: tagAttributes?.group === null ? 'null' : tagAttributes?.group,
    version: tagAttributes?.version === null ? Number(null) : tagAttributes?.version,
  };
  return attributes;
}

function createMangaAttributeTags(mangaTags: IMangaTag[]) {
  const tags: IMangaTag[] = [];

  mangaTags.forEach((tag: IMangaTag) => {
    const mangaTag: IMangaTag = {
      id: tag?.id === null ? 'null' : tag?.id,
      type: tag?.type === null ? 'null' : tag?.type,
      attributes:
        tag?.attributes === null
          ? undefined
          : createMangaTagAttributes(tag?.attributes as ITagAttributes),
      relationships: tag?.relationships === null ? undefined : tag?.relationships,
    };
    tags.push(mangaTag);
  });
  return tags;
}

function createMangaAttributes(mangaAttributes: IMangaAttributes): IMangaAttributes {
  const attributes: IMangaAttributes = {
    title:
      mangaAttributes?.title === null
        ? undefined
        : createMangaTitle(mangaAttributes?.title as IMangaTitle),
    altTitles:
      mangaAttributes?.altTitles === null
        ? undefined
        : createMangaAltTitles(mangaAttributes?.altTitles as IMangaAltTitle[]),
    description:
      mangaAttributes?.description === null
        ? undefined
        : createMangaDescription(mangaAttributes?.description as IMangaDescription),
    isLocked: mangaAttributes?.isLocked !== null,
    links:
      mangaAttributes?.links === null
        ? undefined
        : createMangaLinks(mangaAttributes?.links as ILinks),
    originalLanguage:
      mangaAttributes?.originalLanguage === null ? 'null' : mangaAttributes?.originalLanguage,
    lastVolume: mangaAttributes?.lastVolume === null ? 'null' : mangaAttributes?.lastVolume,
    lastChapter: mangaAttributes?.lastChapter === null ? 'null' : mangaAttributes?.lastChapter,
    publicationDemographic:
      mangaAttributes?.publicationDemographic === null
        ? 'null'
        : mangaAttributes?.publicationDemographic,
    status: mangaAttributes?.status === null ? 'null' : mangaAttributes?.status,
    year: mangaAttributes?.year === null ? Number(null) : mangaAttributes?.year,
    contentRating:
      mangaAttributes?.contentRating === null ? 'null' : mangaAttributes?.contentRating,
    tags:
      mangaAttributes?.tags === null
        ? undefined
        : createMangaAttributeTags(mangaAttributes.tags as IMangaTag[]),
    state: mangaAttributes?.state === null ? 'null' : mangaAttributes?.state,
    chapterNumbersResetOnNewVolume:
      mangaAttributes?.chapterNumbersResetOnNewVolume === null
        ? false
        : mangaAttributes?.chapterNumbersResetOnNewVolume,
    createdAt: mangaAttributes?.createdAt === null ? new Date('null') : mangaAttributes?.createdAt,
    updatedAt: mangaAttributes?.updatedAt === null ? new Date('null') : mangaAttributes?.updatedAt,
    version: mangaAttributes?.version === null ? Number(null) : mangaAttributes?.version,
    availableTranslatedLanguages:
      mangaAttributes?.availableTranslatedLanguages === null
        ? undefined
        : cloneDeep(mangaAttributes?.availableTranslatedLanguages),
    latestUploadedChapter:
      mangaAttributes?.latestUploadedChapter === null
        ? 'null'
        : mangaAttributes?.latestUploadedChapter,
  };

  return attributes;
}

function createStatsDistribution(mangaDistribution: IStatsDistribution): IStatsDistribution {
  const distribution: IStatsDistribution = {
    1: mangaDistribution?.[1] === null ? 0 : mangaDistribution?.[1],
    2: mangaDistribution?.[2] === null ? 0 : mangaDistribution?.[2],
    3: mangaDistribution?.[3] === null ? 0 : mangaDistribution?.[3],
    4: mangaDistribution?.[4] === null ? 0 : mangaDistribution?.[4],
    5: mangaDistribution?.[5] === null ? 0 : mangaDistribution?.[5],
    6: mangaDistribution?.[6] === null ? 0 : mangaDistribution?.[6],
    7: mangaDistribution?.[7] === null ? 0 : mangaDistribution?.[7],
    8: mangaDistribution?.[8] === null ? 0 : mangaDistribution?.[8],
    9: mangaDistribution?.[9] === null ? 0 : mangaDistribution?.[9],
    10: mangaDistribution?.[10] === null ? 0 : mangaDistribution?.[10],
  };

  return distribution;
}

function createMangaStatisticsComments(statsComments: IMangaComments) {
  const comments: IMangaComments = {
    threadId: statsComments?.threadId === null ? 0 : statsComments?.threadId,
    repliesCount: statsComments?.repliesCount == null ? 0 : statsComments?.repliesCount,
  };
  return comments;
}

function createMangaStatisticsRating(mangaRating: IMangaRating): IMangaRating {
  const rating: IMangaRating = {
    average: mangaRating?.average === null ? 0 : mangaRating?.average,
    bayesian: mangaRating?.bayesian === null ? 0 : mangaRating?.bayesian,
    distribution:
      mangaRating?.distribution === null
        ? undefined
        : createStatsDistribution(mangaRating?.distribution as IStatsDistribution),
  };
  return rating;
}

function createMangaStatistics(mangaStatistics: IMangaStatistics) {
  const statistics: IMangaStatistics = {
    comments:
      mangaStatistics?.comments === null
        ? undefined
        : createMangaStatisticsComments(mangaStatistics?.comments as IMangaComments),
    rating:
      mangaStatistics?.rating === null
        ? undefined
        : createMangaStatisticsRating(mangaStatistics?.rating as IMangaRating),
    follows: mangaStatistics?.follows === null ? Number() : mangaStatistics?.follows,
  };
  return statistics;
}

function createStatisticsObject(mangaStatisticsObject: IStatisticsObject): IStatisticsObject {
  const statisticsObject: IStatisticsObject = {
    statistics:
      mangaStatisticsObject?.statistics === null
        ? undefined
        : createMangaStatistics(mangaStatisticsObject?.statistics as IMangaStatistics),
  };
  return statisticsObject;
}

function createManga(mangaResponse: IManga) {
  if (mangaResponse == null || typeof mangaResponse === 'undefined') return undefined;

  const manga: IManga = {
    id: mangaResponse?.id === null ? 'null' : mangaResponse?.id,
    type: mangaResponse?.type === null ? 'null' : mangaResponse?.type,
    relationships:
      mangaResponse?.relationships === null
        ? undefined
        : createRelationships(mangaResponse?.relationships as IMangaRelationship[]),
    attributes:
      mangaResponse?.attributes === null
        ? undefined
        : createMangaAttributes(mangaResponse?.attributes as IMangaAttributes),
  };

  return manga;
}

function createMangaList(mangaListResponse: IManga[]) {
  if (mangaListResponse == null || typeof mangaListResponse === 'undefined') return undefined;

  const mangaList: IManga[] = [];
  mangaListResponse.forEach((manga: IManga) => {
    mangaList.push(createManga(manga) as IManga);
  });
  return mangaList;
}
export { createManga, createMangaList, createStatisticsObject };
