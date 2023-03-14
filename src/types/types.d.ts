export interface IMangaTitle {
  en: string;
}

export interface IMangaAltTitle {
  ko: string;
  'ko-ro': string;
  en: string;
  ru: string;
  zh: string;
  ja: string;
  'es-la': string;
  'ja-ro': string;
  fr: string;
  pl: string;
}

export interface IMangaDescription {
  en: string;
  ko: string;
  ru: string;
  zh: string;
  ja: string;
  th: string;
  fr: string;
}

export interface ILinks {
  al: string;
  mu: string;
  raw: string;
  bw: string;
  amz: string;
  ebj: string;
  mal: string;
  ap: string;
  kt: string;
  engtl: string;
  cdj: string;
  nu: string;
}

export interface ITagName {
  en: string;
}

export interface ITagDescription {}

export interface ITagAttributes {
  name: ITagName | undefined;
  description: unknown | undefined;
  group: string;
  version: number;
}

export interface IMangaTag {
  id: string;
  type: string;
  attributes: ITagAttributes | undefined;
  relationships: unknown[] | undefined;
}

export interface IMangaAttributes {
  title: IMangaTitle | undefined;
  altTitles: IMangaAltTitle[] | undefined;
  description: IMangaDescription | undefined;
  isLocked: boolean;
  links: ILinks | undefined;
  originalLanguage: string;
  lastVolume: string;
  lastChapter: string;
  publicationDemographic: string;
  status: string;
  year?: number;
  contentRating: string;
  tags: IMangaTag[] | undefined;
  state: string;
  chapterNumbersResetOnNewVolume: boolean;
  createdAt: Date;
  updatedAt: Date;
  version: number;
  availableTranslatedLanguages: string[] | undefined;
  latestUploadedChapter: string;
}

export interface IMangaRelationship {
  id: string;
  type: string;
  related: string;
  attributes?: IRelationshipAttributes;
}

export interface IManga {
  id: string;
  type: string;
  attributes: IMangaAttributes | undefined;
  relationships: IMangaRelationship[] | undefined;
}

export interface IMangaListResponse {
  result: string;
  response: string;
  data: IManga[];
  limit: number;
  offset: number;
  total: number;
}

export interface IMangaResponse {
  result: string;
  response: string;
  data: IManga;
  limit: number;
  offset: number;
  total: number;
}

export interface IMangaStatisticsResponse {
  result: string;
  statistics: string;
}

export interface IMangaComments {
  threadId: number;
  repliesCount: number;
}

export interface IStatsDistribution {
  1: number;
  2: number;
  3: number;
  4: number;
  5: number;
  6: number;
  7: number;
  8: number;
  9: number;
  10: number;
}

export interface IMangaRating {
  average: number;
  bayesian: number;
  distribution: IStatsDistribution | undefined;
}

export interface IMangaStatistics {
  comments: IMangaComments | undefined;
  rating: IMangaRating | undefined;
  follows: number;
}

export interface IStatisticsObject {
  statistics: IMangaStatistics | undefined;
}

export interface IStatisticsResponse {
  result: string;
  statistics: IStatisticsObject;
}

export interface IRelationshipAttributes {
  description: string;
  volume: string;
  fileName: string;
  locale: string;
  createdAt: Date;
  updatedAt: Date;
  version: number;
}

export interface IHomeProps {
}

export interface INavigationBarProps {

}

export interface ICustomButtonProps {
  type: 'link' | 'text' | 'ghost' | 'default' | 'primary' | 'dashed' | undefined;
  classStyles?: string;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  isDisabled?: boolean;
  children?: React.ReactNode;
  themeColor?: 'light' | 'dark';
}

export interface IPageSectionProps {
  sectionTitle: string;
  floatingPill?:React.ReactNode;
  children: React.ReactNode;
  styles: string;
}

export interface IListComponent {
  children?: React.ReactNode;
  skeletonLoader?: React.ReactNode;
  styles: string;
}

export interface IListCardProps {
  image?: Blob;
  styles: string;
  cardTitle:string;
  cardSubtitle?:string;
  progressPercentage?: number;
  onClick: (event?: React.MouseEvent<HTMLDivElement>) => void;
}
