import type { PaginationQueryParams } from '../../common/apiClient.types';
import type { Image, OpenSearch, Wiki } from '../common.types';
import type { Tag } from '../tag/tag.types';
import type { Track } from '../track/track.types';

export type AlbumSearchParams = PaginationQueryParams & {
    album: string;
};

export type AlbumSearchParamsResponse = {
    results: OpenSearch & {
        '@attr': {
            for: string;
        };
        albummatches: {
            album: Pick<Album, 'artist' | 'image' | 'mbid' | 'name' | 'url'>[];
        };
    };
};

export type Album = {
    artist: string;
    image: Image[];
    listeners: string;
    mbid: string;
    name: string;
    playcount: string;
    tags: (Pick<Tag, 'name'> & {
        url: string;
    })[];
    tracks: (Pick<Track, 'artist' | 'duration' | 'name' | 'url'> & {
        '@attr': {
            rank: number;
        };
    })[];
    url: string;
    wiki: Wiki;
};
