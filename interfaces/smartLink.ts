export interface SmartLink {
    data: SmartLinkData;
    meta: SmartLinkMeta;
}

export interface SmartLinkData {
    id:          number;
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
    appearance:  Appearance;
    buttons:     Tab[];
    tab:         Tab;
    gallery:     Gallery[];
}

export interface Appearance {
    id:          number;
    title:       string;
    description: string;
    avatar:      Avatar;
}

export interface Avatar {
    id:                number;
    name:              string;
    alternativeText:   null;
    caption:           null;
    width:             number;
    height:            number;
    formats:           AvatarFormats;
    hash:              string;
    ext:               EXT;
    mime:              MIME;
    size:              number;
    url:               string;
    previewUrl:        null;
    provider:          string;
    provider_metadata: null;
    createdAt:         Date;
    updatedAt:         Date;
}

export enum EXT {
    JPEG = ".jpeg",
    Jpg = ".jpg",
    PNG = ".png",
}

export interface AvatarFormats {
    thumbnail: Thumbnail;
}

export interface Thumbnail {
    ext:    EXT;
    url:    string;
    hash:   string;
    mime:   MIME;
    name:   string;
    path:   null;
    size:   number;
    width:  number;
    height: number;
}

export enum MIME {
    ImageJPEG = "image/jpeg",
    ImagePNG = "image/png",
}

export interface Tab {
    id:    number;
    type:  string;
    value: string;
    icon?: Avatar;
}



export interface IconFormats {
    small:     Thumbnail;
    thumbnail: Thumbnail;
}

export interface Gallery {
    id:       number;
    url:      string;
    img:      Avatar;
    img_zoom: Avatar;
}



export interface ImgFormats {
    large:     Thumbnail;
    small:     Thumbnail;
    medium:    Thumbnail;
    thumbnail: Thumbnail;
}

export interface SmartLinkMeta {
}