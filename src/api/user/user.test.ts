import { ApiClient } from '../../common/apiClient';
import { TaggingType } from '../common.types';
import { UserApi } from './user';
import { RecentTracksType, UserApiMethods } from './user.types';

jest.mock('../../common/apiClient');

const mockedApiKey = 'test';
const mockedUserName = 'someName';

describe('UserApi', () => {
    let userApi: UserApi;
    let mockedGet: jest.Mock;

    beforeEach(() => {
        mockedGet = jest.fn();
        ApiClient.prototype.get = mockedGet;
        userApi = new UserApi(mockedApiKey);
    });

    it('creates class instance', () => {
        expect(userApi).toBeInstanceOf(UserApi);
    });

    it('getInfo()', async () => {
        await userApi.getInfo({ user: mockedUserName });
        expect(mockedGet).toHaveBeenNthCalledWith(1, {
            api_key: mockedApiKey,
            method: UserApiMethods.GET_INFO,
            user: mockedUserName,
        });

        await userApi.getInfo({});
        expect(mockedGet).toHaveBeenNthCalledWith(2, {
            api_key: mockedApiKey,
            method: UserApiMethods.GET_INFO,
        });
    });

    it('getFriends()', async () => {
        await userApi.getFriends({ user: mockedUserName });
        expect(mockedGet).toHaveBeenNthCalledWith(1, {
            api_key: mockedApiKey,
            method: UserApiMethods.GET_FIRENDS,
            user: mockedUserName,
        });

        await userApi.getFriends({ user: mockedUserName, page: '2' });
        expect(mockedGet).toHaveBeenNthCalledWith(2, {
            api_key: mockedApiKey,
            method: UserApiMethods.GET_FIRENDS,
            user: mockedUserName,
            page: '2',
        });

        await userApi.getFriends({ user: mockedUserName, limit: '10' });
        expect(mockedGet).toHaveBeenNthCalledWith(3, {
            api_key: mockedApiKey,
            method: UserApiMethods.GET_FIRENDS,
            user: mockedUserName,
            limit: '10',
        });

        await userApi.getFriends({ user: mockedUserName, page: '2', limit: '10' });
        expect(mockedGet).toHaveBeenNthCalledWith(4, {
            api_key: mockedApiKey,
            method: UserApiMethods.GET_FIRENDS,
            user: mockedUserName,
            page: '2',
            limit: '10',
        });
    });

    it('getLovedTracks()', async () => {
        await userApi.getLovedTracks({ user: mockedUserName });
        expect(mockedGet).toHaveBeenNthCalledWith(1, {
            api_key: mockedApiKey,
            method: UserApiMethods.GET_LOVED_TRACKS,
            user: mockedUserName,
        });

        await userApi.getLovedTracks({ user: mockedUserName, page: '2' });
        expect(mockedGet).toHaveBeenNthCalledWith(2, {
            api_key: mockedApiKey,
            method: UserApiMethods.GET_LOVED_TRACKS,
            user: mockedUserName,
            page: '2',
        });

        await userApi.getLovedTracks({ user: mockedUserName, limit: '10' });
        expect(mockedGet).toHaveBeenNthCalledWith(3, {
            api_key: mockedApiKey,
            method: UserApiMethods.GET_LOVED_TRACKS,
            user: mockedUserName,
            limit: '10',
        });

        await userApi.getLovedTracks({ user: mockedUserName, page: '2', limit: '10' });
        expect(mockedGet).toHaveBeenNthCalledWith(4, {
            api_key: mockedApiKey,
            method: UserApiMethods.GET_LOVED_TRACKS,
            user: mockedUserName,
            page: '2',
            limit: '10',
        });
    });

    it('getLovedTracks()', async () => {
        await userApi.getPersonalTags({ user: mockedUserName, tag: 'rock', taggingtype: TaggingType.ALBUM });
        expect(mockedGet).toHaveBeenNthCalledWith(1, {
            api_key: mockedApiKey,
            method: UserApiMethods.GET_PERSONAL_TAGS,
            user: mockedUserName,
            tag: 'rock',
            taggingtype: TaggingType.ALBUM,
        });

        await userApi.getPersonalTags({ user: mockedUserName, page: '2', tag: 'rap', taggingtype: TaggingType.ARTIST });
        expect(mockedGet).toHaveBeenNthCalledWith(2, {
            api_key: mockedApiKey,
            method: UserApiMethods.GET_PERSONAL_TAGS,
            user: mockedUserName,
            page: '2',
            tag: 'rap',
            taggingtype: TaggingType.ARTIST,
        });

        await userApi.getPersonalTags({
            user: mockedUserName,
            limit: '10',
            tag: 'jazz',
            taggingtype: TaggingType.TRACK,
        });
        expect(mockedGet).toHaveBeenNthCalledWith(3, {
            api_key: mockedApiKey,
            method: UserApiMethods.GET_PERSONAL_TAGS,
            user: mockedUserName,
            limit: '10',
            tag: 'jazz',
            taggingtype: TaggingType.TRACK,
        });

        await userApi.getPersonalTags({
            user: mockedUserName,
            page: '2',
            limit: '10',
            tag: 'pop',
            taggingtype: TaggingType.ALBUM,
        });
        expect(mockedGet).toHaveBeenNthCalledWith(4, {
            api_key: mockedApiKey,
            method: UserApiMethods.GET_PERSONAL_TAGS,
            user: mockedUserName,
            page: '2',
            limit: '10',
            tag: 'pop',
            taggingtype: TaggingType.ALBUM,
        });
    });

    it('getRecentTracks()', async () => {
        await userApi.getRecentTracks({ user: mockedUserName });
        expect(mockedGet).toHaveBeenNthCalledWith(1, {
            api_key: mockedApiKey,
            method: UserApiMethods.GET_RECENT_TRACKS,
            user: mockedUserName,
        });

        await userApi.getRecentTracks({ user: mockedUserName, extended: RecentTracksType.EXTENDED });
        expect(mockedGet).toHaveBeenNthCalledWith(2, {
            api_key: mockedApiKey,
            method: UserApiMethods.GET_RECENT_TRACKS,
            user: mockedUserName,
            extended: RecentTracksType.EXTENDED,
        });

        await userApi.getRecentTracks({ user: mockedUserName, from: '1640995200', to: '1643760000' });
        expect(mockedGet).toHaveBeenNthCalledWith(3, {
            api_key: mockedApiKey,
            method: UserApiMethods.GET_RECENT_TRACKS,
            user: mockedUserName,
            from: '1640995200',
            to: '1643760000',
        });

        await userApi.getRecentTracks({ user: mockedUserName, page: '2', limit: '10' });
        expect(mockedGet).toHaveBeenNthCalledWith(4, {
            api_key: mockedApiKey,
            method: UserApiMethods.GET_RECENT_TRACKS,
            user: mockedUserName,
            page: '2',
            limit: '10',
        });
    });
});
