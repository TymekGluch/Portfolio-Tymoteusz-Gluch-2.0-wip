const baseApiUrl = 'https://cdn.contentful.com' 
const apiKey = import.meta.env.VITE_API_ACCESS_TOKEN;
const apiSpace = import.meta.env.VITE_CONTENTFULL_SPACE;

const createAssetQuery = (assetId: string): string =>
  `${baseApiUrl}/spaces/${apiSpace}/environments/master/assets/${assetId}?access_token=${apiKey}`;

const createEntryQuery  = (entryId: string): string => 
  `${baseApiUrl}/spaces/${apiSpace}/environments/master/entries/${entryId}?access_token=${apiKey}`;

export { createAssetQuery, createEntryQuery, baseApiUrl }