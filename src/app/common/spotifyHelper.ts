import { IPlaylist } from "../interfaces/IPlaylist";
import { IUsuario } from "../interfaces/IUsuario";

export function SpotifyUserForUser(user:SpotifyApi.CurrentUsersProfileResponse): IUsuario
{
    return {
        id:user.id,
        name:user.display_name,
        imagenUrl:user.images.pop().url
        }
}


export function SpotifyPlaylistForPlaylist(playlist:SpotifyApi.PlaylistObjectSimplified):IPlaylist{

    return {
        id:playlist.id,
        name:playlist.name,
        imagenUrl:playlist.images.pop().url
    };
}